const memberModel = require("../models/memberModel");

exports.getMembershipTypes = async (req, res) => {
    try {
        const types = await memberModel.getMembershipTypes();
        res.status(200).json({ membership_types: types });
    } catch (error) {
        res.status(500).json({ error: "Error fetching membership types" });
    }
};

exports.getRoles = async (req, res) => {
    try {
        const roles = await memberModel.getRoles();
        res.status(200).json({ roles });
    } catch (error) {
        res.status(500).json({ error: "Error fetching roles" });
    }
};

exports.updateMembershipType = async (req, res) => {
    const { member_id } = req.params;
    const { membership_type } = req.body;

    try {
        const types = await memberModel.getMembershipTypes();
        if (!types.includes(membership_type)) {
            return res.status(400).json({ error: "Invalid membership type" });
        }

        const result = await memberModel.updateMembershipType(member_id, membership_type);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error updating membership type" });
    }
};

exports.updateRole = async (req, res) => {
    const { member_id } = req.params;
    const { role } = req.body;

    try {
        const roles = await memberModel.getRoles();
        if (!roles.includes(role)) {
            return res.status(400).json({ error: "Invalid role" });
        }

        const result = await memberModel.updateRole(member_id, role);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error updating role" });
    }
};
