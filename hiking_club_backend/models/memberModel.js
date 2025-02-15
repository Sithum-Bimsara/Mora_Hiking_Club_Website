const db = require("../config/db");

// Get all possible membership types
const getMembershipTypes = async () => {
    const [rows] = await db.execute("SHOW COLUMNS FROM member LIKE 'membership_type'");
    const enumValues = rows[0].Type.match(/enum\(([^)]+)\)/)[1]
        .split(',')
        .map(value => value.replace(/'/g, ''));
    return enumValues;
};

// Get all possible roles
const getRoles = async () => {
    const [rows] = await db.execute("SHOW COLUMNS FROM member LIKE 'role'");
    const enumValues = rows[0].Type.match(/enum\(([^)]+)\)/)[1]
        .split(',')
        .map(value => value.replace(/'/g, ''));
    return enumValues;
};

// Update membership type
const updateMembershipType = async (member_id, membership_type) => {
    await db.execute("UPDATE member SET membership_type = ? WHERE member_id = ?", [membership_type, member_id]);
    return { message: "Membership type updated successfully" };
};

// Update role
const updateRole = async (member_id, role) => {
    await db.execute("UPDATE member SET role = ? WHERE member_id = ?", [role, member_id]);
    return { message: "Role updated successfully" };
};

module.exports = {
    getMembershipTypes,
    getRoles,
    updateMembershipType,
    updateRole,
};
