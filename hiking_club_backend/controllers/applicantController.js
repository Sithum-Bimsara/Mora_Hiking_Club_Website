const applicantModel = require("../models/applicantModel");
const memberModel = require("../models/memberModel");
const { sendApprovalEmail } = require("../services/emailService");


// Nodemailer transporter setup (Configure SMTP settings accordingly)
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     host: 'smtp.gmail.com',
//     secure: false,
//     port: 587,
//     auth: {
//         user: process.env.EMAIL_USER, 
//         pass: process.env.EMAIL_PASS, 
//     },
// });


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

// Update application status and send email
exports.updateApplicationStatus = async (req, res) => {
    try {
        const { applicant_id } = req.params;
        const { application_status } = req.body;

        // Step 1: Update status in the database
        await applicantModel.updateApplicationStatus(applicant_id, application_status);
        res.json({ message: "Application status updated successfully!" });

    } catch (error) {
        console.error(" Error updating application status:", error);
        return res.status(500).json({ error: "Error updating application status." });
    }

    // Step 2: If approved, fetch member details and send an email
    try {
        const { applicant_id } = req.params;
        const { application_status } = req.body;

        if (application_status === "approved") {
            const member = await memberModel.getMemberDetails(applicant_id);

            if (member && member.email) {
                const { email, first_name, member_id } = member;
                sendApprovalEmail(email, first_name, member_id);

                // await transporter.sendMail({
                //     from: process.env.EMAIL_USER,
                //     to: email,
                //     subject: "🎉 Application Approved!",
                //     text: `Dear ${first_name},\n\nCongratulations! Your application has been approved.Your member ID: ${member_id}\n\nBest regards,\nYour Team`,
                // });

                // console.log("Email sent successfully to:", email);
            } else {
                console.log("No email found for applicant_id:", applicant_id);
            }
        }

    } catch (error) {
        console.error("Error sending approval email:", error);
    }
};;