const applicantModel = require("../models/applicantModel");

// Update applicant details (excluding application_status)
exports.updateApplicantDetails = async (req, res) => {
    const { applicant_id } = req.params;
    const updates = req.body;

    try {
        if ("application_status" in updates) {
            return res.status(400).json({ error: "Cannot update application_status in this method." });
        }

        const result = await applicantModel.updateApplicantDetails(applicant_id, updates);
        res.status(200).json({ message: "Applicant details updated successfully", result });
    } catch (error) {
        res.status(500).json({ error: error.message || "Error updating applicant details" });
    }
};

// Update application_status separately
exports.updateApplicationStatus = async (req, res) => {
    const { applicant_id } = req.params;
    const { application_status } = req.body;

    if (!application_status) {
        return res.status(400).json({ error: "Application status is required" });
    }

    try {
        const result = await applicantModel.updateApplicationStatus(applicant_id, application_status);
        res.status(200).json({ message: "Application status updated successfully", result });
    } catch (error) {
        res.status(500).json({ error: "Error updating application status" });
    }
};
