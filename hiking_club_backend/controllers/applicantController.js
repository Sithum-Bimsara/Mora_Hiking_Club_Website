const applicantModel = require("../models/applicantModel");
const memberModel = require("../models/memberModel");
const { sendApprovalEmail } = require("../services/emailService");



// Update applicant details (excluding application_status)
exports.updateApplicantDetails = async (req, res) => {
    const { applicant_id } = req.params;
    const updates = req.body;

    try {
        // Prevent updating application_status
        if ("application_status" in updates) {
            return res.status(400).json({ error: "Cannot update application_status in this method." });
        }

        // Step 1: Check if the applicant exists before updating
        const affectedRows = await applicantModel.updateApplicantDetails(applicant_id, updates);

        if (affectedRows === 0) {
            return res.status(404).json({ error: "Applicant not found. Cannot update details." });
        }

        res.status(200).json({ message: "Applicant details updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message || "Error updating applicant details" });
    }
};


// Update application status and send email
exports.updateApplicationStatus = async (req, res) => {
    let application_status; 

    try {
        const { applicant_id } = req.params;
        application_status = req.body.application_status; // Assign value here

        // Step 1: Check if the applicant exists before updating
        const affectedRows = await applicantModel.updateApplicationStatus(applicant_id, application_status);

        if (affectedRows === 0) {
            return res.status(404).json({ error: "Applicant not found. Cannot update status." });
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
