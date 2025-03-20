const applicantModel = require("../models/applicantModel");
const memberModel = require("../models/memberModel");
const { sendApprovalEmail } = require("../services/emailService");


exports.getAllApplicants = async (req, res) => {
    try {
        const applicants = await applicantModel.getAllApplicants();

        if (applicants.length === 0) {
            return res.status(404).json({ error: "No applicants found" });
        }

        res.status(200).json(applicants);
    } catch (error) {
        console.error("Error fetching applicants:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get all applicants with pending status
exports.getPendingApplicants = async (req, res) => {
    try {
        const applicants = await applicantModel.getApplicantsByStatus("pending");
        res.status(200).json(applicants);
    } catch (error) {
        console.error("Error fetching pending applicants:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get all applicants with rejected status
exports.getRejectedApplicants = async (req, res) => {
    try {
        const applicants = await applicantModel.getApplicantsByStatus("rejected");
        res.status(200).json(applicants);
    } catch (error) {
        console.error("Error fetching rejected applicants:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Update applicant details using member_id
exports.updateApplicantDetailsByMemberId = async (req, res) => {
    try {
        const { member_id } = req.params;
        const updates = req.body;

        // Prevent updating application_status
        if ("application_status" in updates) {
            return res.status(400).json({ error: "Cannot update application_status in this method." });
        }

        // Step 1: Get applicant_id using member_id
        const applicant_id = await memberModel.getApplicantIdByMemberId(member_id);
        if (!applicant_id) {
            return res.status(404).json({ error: "Member not found or not linked to an applicant." });
        }

        // Step 2: Check if applicant exists
        const applicant = await applicantModel.getApplicantById(applicant_id);
        if (!applicant) {
            return res.status(404).json({ error: "Applicant not found. Cannot update details." });
        }

        // Step 3: Update only provided fields
        const affectedRows = await applicantModel.updateApplicantDetails(applicant_id, updates);
        if (affectedRows === 0) {
            return res.status(400).json({ error: "No valid fields provided for update." });
        }

        res.status(200).json({ message: "Applicant details updated successfully" });

    } catch (error) {
        console.error("Error updating applicant details:", error);
        res.status(500).json({ error: "Error updating applicant details." });
    }
};


// Update application status and send email
exports.updateApplicationStatus = async (req, res) => {
    const { applicant_id } = req.params;
    const { application_status } = req.body;
    try {
        

        // Step 1: Check if the applicant exists
        const applicant = await applicantModel.getApplicantById(applicant_id);
        if (!applicant) {
            return res.status(404).json({ error: "Applicant not found. Cannot update status." });
        }

        // Step 2: Check if the status is already the same
        if (applicant.application_status === application_status) {
            return res.status(400).json({ error: `Applicant is already in '${application_status}' status.` });
        }

        // Step 3: Update application status
        const affectedRows = await applicantModel.updateApplicationStatus(applicant_id, application_status);
        if (affectedRows === 0) {
            return res.status(500).json({ error: "Error updating application status." });
        }

        res.json({ message: "Application status updated successfully!" });



    } catch (error) {
        console.error("Error updating application status:", error);
        return res.status(500).json({ error: "Error updating application status." });
    }

    // Step 2: If approved, fetch member details and send an email
    try {
        const { applicant_id } = req.params;

        if (application_status === "approved") { 
            const member = await memberModel.getMemberDetails(applicant_id);

            if (member && member.email) {
                const { email, first_name, member_id } = member;
                sendApprovalEmail(email, first_name, member_id);
            } else {
                console.log("No email found for applicant_id:", applicant_id);
            }
        }
    } catch (error) {
        console.error("Error sending approval email:", error);
    }
};
