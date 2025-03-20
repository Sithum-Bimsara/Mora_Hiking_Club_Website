const db = require("../config/db");


// Function to get applicant_id using member_id
const getApplicantIdByMemberId = async (member_id) => {
    const [rows] = await db.execute("SELECT applicant_id FROM member WHERE member_id = ?", [member_id]);
    return rows.length > 0 ? rows[0].applicant_id : null;
};


const getApplicantDetailsByMemberId = async (member_id) => {
    const [rows] = await db.execute(`
        SELECT 
            a.email, 
            a.first_name, 
            m.member_id, 
            m.role, 
            m.membership_type
        FROM applicant a
        JOIN member m ON a.applicant_id = m.applicant_id
        WHERE m.member_id = ?`, 
        [member_id]
    );

    return rows.length > 0 ? rows[0] : null;
};

const getAllMembers = async () => {
    const [rows] = await db.execute(`
        SELECT 
            a.email, 
            a.first_name, 
            m.member_id, 
            m.role, 
            m.membership_type
        FROM applicant a
        JOIN member m ON a.applicant_id = m.applicant_id
    `);

    return rows;
};


// // Get memeberId with email
// const getMemberDetails = async (applicant_id) => {
//     const query = `SELECT a.email, a.first_name, m.member_id, m.role, m.membership_type
//                     FROM applicant a 
//                     JOIN member m ON a.applicant_id = m.applicant_id
//                     WHERE a.applicant_id = ?`;
//     const [result] = await db.execute(query, [applicant_id]);

//     console.log("Debug: Fetched applicant details:", result);

//     return result.length > 0 ? result[0] : null;
// };








// Check if the member exists
const memberExists = async (member_id) => {
    const [rows] = await db.execute("SELECT member_id FROM member WHERE member_id = ?", [member_id]);
    return rows.length > 0;
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
    getApplicantDetailsByMemberId,
    getAllMembers,
    memberExists,
    updateMembershipType,
    updateRole,
    getApplicantIdByMemberId,
    getApplicantDetailsByMemberId
};
