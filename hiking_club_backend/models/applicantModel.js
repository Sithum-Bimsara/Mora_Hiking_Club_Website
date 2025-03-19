const db = require("../config/db");

const createApplicant = async (application_status, password_hash, first_name, last_name, full_name
    ,date_of_birth, NIC_no, gender, email, contact_no, university_id, 
    faculty, degree_program, year, bio_description, skills, facebook_url, 
    instagram_url, contact_person_id, blood_type, first_aid_skills, injuries, 
    long_term_medical_issues, medicines, payment_proof_link) => {
    const query = `INSERT INTO applicant (
        application_status, password_hash, first_name, last_name, full_name
        ,date_of_birth, NIC_no, gender, email, contact_no, university_id, 
        faculty, degree_program, year, bio_description, skills, facebook_url, 
        instagram_url, contact_person_id, blood_type, first_aid_skills, injuries, 
        long_term_medical_issues, medicines, payment_proof_link
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const [result] = await db.execute(query, [application_status, password_hash, first_name, last_name, full_name
        ,date_of_birth, NIC_no, gender, email, contact_no, university_id, 
        faculty, degree_program, year, bio_description, skills, facebook_url, 
        instagram_url, contact_person_id, blood_type, first_aid_skills, injuries, 
        long_term_medical_issues, medicines, payment_proof_link]);
    return result;
};

const findApplicantByEmail = async (email) => {
    const query = `
        SELECT a.applicant_id, a.full_name, a.email, a.password_hash, 
               m.member_id, m.role 
        FROM applicant a
        LEFT JOIN member m ON a.applicant_id = m.applicant_id
        WHERE a.email = ?`;
    
    const [result] = await db.execute(query, [email]);
    return result[0]; // Return the first matching applicant
};


// Get all applicants by status
const getApplicantsByStatus = async (status) => {
    const [rows] = await db.execute(
        "SELECT applicant_id, first_name, last_name, email, application_status FROM applicant WHERE application_status = ?",
        [status]
    );
    return rows;
};

// Update applicant details (excluding application_status)
const updateApplicantDetails = async (applicant_id, updates) => {
    let query = "UPDATE applicant SET ";
    const values = [];
    
    Object.entries(updates).forEach(([key, value], index) => {
        if (key !== "application_status") { // Exclude application_status
            query += `${index > 0 ? ", " : ""}${key} = ?`;
            values.push(value);
        }
    });

    query += " WHERE applicant_id = ?";
    values.push(applicant_id);

    if (values.length === 1) {
        return 0; // No valid fields to update
    }

    const [result] = await db.execute(query, values);
    return result.affectedRows;
};

// Function to check if an applicant exists
const getApplicantById = async (applicant_id) => {
    const [rows] = await db.execute("SELECT * FROM applicant WHERE applicant_id = ?", [applicant_id]);
    return rows.length > 0 ? rows[0] : null;
};

// Function to check if an applicant exists
const getMemberById = async (member_id) => {
    const [rows] = await db.execute("SELECT * FROM member WHERE member_id = ?", [member_id]);
    return rows.length > 0 ? rows[0] : null;
};

// Update application_status separately
const updateApplicationStatus = async (applicant_id, application_status) => {
    const query = "UPDATE applicant SET application_status = ? WHERE applicant_id = ?";
    const [result] = await db.execute(query, [application_status, applicant_id]);
    return result;
};





module.exports = {
    createApplicant,
    findApplicantByEmail,
    updateApplicantDetails,
    updateApplicationStatus,
    getApplicantById,
    getApplicantsByStatus,
    getMemberById
};