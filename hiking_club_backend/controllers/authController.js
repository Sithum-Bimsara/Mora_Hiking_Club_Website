const applicantModel = require("../models/applicantModel");
const bcrypt = require("bcrypt");

// Signup controller
const signup = async (req, res) => {
    try {
        const {
            application_status,
            password_hash,
            first_name,
            last_name,
            full_name,
            date_of_birth,
            NIC_no,
            gender,
            email,
            contact_no,
            university_id,
            faculty,
            degree_program,
            year,
            bio_description,
            skills,
            facebook_url,
            instagram_url,
            contact_person_id,
            blood_type,
            first_aid_skills,
            injuries,
            long_term_medical_issues,
            medicines,
            payment_proof_link
        } = req.body;

        
        const existingApplicant = await applicantModel.findApplicantByEmail(email);
        if (existingApplicant) {
            return res.status(400).json({ error: "A user with that email already exists." });
        }
        
        const hashedPassword = await bcrypt.hash(password_hash, 10);
        
        await applicantModel.createApplicant(
            application_status,
            hashedPassword,
            first_name,
            last_name,
            full_name,
            date_of_birth,
            NIC_no,
            gender,
            email,
            contact_no,
            university_id,
            faculty,
            degree_program,
            year,
            bio_description,
            skills,
            facebook_url,
            instagram_url,
            contact_person_id,
            blood_type,
            first_aid_skills,
            injuries,
            long_term_medical_issues,
            medicines,
            payment_proof_link
        );

        res.status(201).json({ message: "Signup successful" });
    } catch (error) {
        console.error("Signup Error:", error);

        // Handle database-specific duplicate entry error (example for MySQL)
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: "Duplicate entry. A user with this information already exists." });
        }
        
        res.status(500).json({ error: error.message });
    }
};


// Login controller
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const applicant = await applicantModel.findApplicantByEmail(email);
        if (!applicant) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const isPasswordValid = await bcrypt.compare(password, applicant.password_hash);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        res.status(200).json({ message: "Login successful", applicantId: applicant.applicant_id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Logout controller
const logout = (req, res) => {
    res.status(200).json({ message: "Logout successful" });
};

module.exports = {
    signup,
    login,
    logout,
};