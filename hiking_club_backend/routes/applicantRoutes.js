const express = require("express");
const router = express.Router();
const applicantController = require("../controllers/applicantController");
const authenticateUser = require("../middlewares/authMiddleware"); 

// Update applicant details (excluding application_status) - Protected Route
router.put("/:applicant_id", authenticateUser, applicantController.updateApplicantDetails);

// Update application status (sends email when approved) - Protected Route
router.put("/:applicant_id/status", authenticateUser, applicantController.updateApplicationStatus);

module.exports = router;
