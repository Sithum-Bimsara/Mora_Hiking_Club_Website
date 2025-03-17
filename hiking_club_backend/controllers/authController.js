const applicantModel = require("../models/applicantModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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


const login = async (req, res) => { 
    try {
        const { email, password } = req.body;

        // Check if user exists
        const applicant = await applicantModel.findApplicantByEmail(email);
        if (!applicant) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Check if the applicant is a member
        if (!applicant.member_id) {
            return res.status(403).json({ error: "Access denied. You are not a registered member." });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, applicant.password_hash);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Generate JWT token with member details
        const tokenPayload = {
            applicantId: applicant.applicant_id,
            full_name: applicant.full_name,
            member_id: applicant.member_id,
            role: applicant.role || "member",
        };

        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        // Return token in response
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Logout controller
const logout = () => {
    localStorage.removeItem("token");
    console.log("User logged out");
};



module.exports = {
    signup,
    login,
    logout,
};