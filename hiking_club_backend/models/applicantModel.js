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

// Find applicant by email (Login)
const findApplicantByEmail = async (email) => {
    const query = "SELECT * FROM applicant WHERE email = ?";
    const [result] = await db.execute(query, [email]);
    return result[0];
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
        throw new Error("No valid fields to update.");
    }

    const [result] = await db.execute(query, values);
    return result;
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
};