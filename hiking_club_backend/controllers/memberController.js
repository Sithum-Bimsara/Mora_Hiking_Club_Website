const memberModel = require("../models/memberModel");

exports.getApplicantDetailsByMemberId = async (req, res) => {
    const { member_id } = req.params;

    try {
        const applicantDetails = await memberModel.getApplicantDetailsByMemberId(member_id);

        if (!applicantDetails) {
            return res.status(404).json({ error: "Member not found" });
        }

        res.status(200).json(applicantDetails);
    } catch (error) {
        console.error("Error fetching applicant details:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getAllMembers = async (req, res) => {
    try {
        const members = await memberModel.getAllMembers();

        if (members.length === 0) {
            return res.status(404).json({ error: "No members found" });
        }

        res.status(200).json(members);
    } catch (error) {
        console.error("Error fetching members:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};



// Update membership type
exports.updateMembershipType = async (req, res) => {
    const { member_id } = req.params;
    const { membership_type } = req.body;

    try {
        // Check if member exists
        const exists = await memberModel.memberExists(member_id);
        if (!exists) {
            return res.status(404).json({ error: "Member not found" });
        }

        // Validate membership type
        const validTypes = ["regular member", "fellow member"];
        if (!validTypes.includes(membership_type)) {
            return res.status(400).json({ error: "Invalid membership type" });
        }

        const result = await memberModel.updateMembershipType(member_id, membership_type);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error updating membership type:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Update role
exports.updateRole = async (req, res) => {
    const { member_id } = req.params;
    const { role } = req.body;

    try {
        // Check if member exists
        const exists = await memberModel.memberExists(member_id);
        if (!exists) {
            return res.status(404).json({ error: "Member not found" });
        }

        // Validate role (modify as needed)
        const validRoles = ["admin", "member", "super_admin"];
        if (!validRoles.includes(role)) {
            return res.status(400).json({ error: "Invalid role" });
        }

        const result = await memberModel.updateRole(member_id, role);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error updating role:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
