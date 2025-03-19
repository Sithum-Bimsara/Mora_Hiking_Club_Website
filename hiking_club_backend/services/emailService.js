const transporter = require("../config/emailConfig");

// Function to send an approval email
const sendApprovalEmail = async (email, first_name, member_id) => {
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "🎉 Application Approved!",
            text: `Dear ${first_name},\n\nCongratulations! Your application has been approved. Your member ID: ${member_id}\n\nBest regards,\nYour Team`,
        });

        console.log("Email sent successfully to:", email);
    } catch (error) {
        console.error("Error sending approval email:", error);
    }
};

module.exports = { sendApprovalEmail };
