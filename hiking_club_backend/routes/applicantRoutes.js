const express = require("express");
const router = express.Router();
const applicantController = require("../controllers/applicantController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");



router.get("/pending", authenticateUser, authorizeAdmin , applicantController.getPendingApplicants);
router.get("/rejected", authenticateUser, authorizeAdmin , applicantController.getRejectedApplicants);

// Update applicant details using member_id (excluding application_status) - Protected Route
router.put("/:member_id", authenticateUser, applicantController.updateApplicantDetailsByMemberId);

// Update application status using applicant_id (sends email when approved) - Protected Route
router.put("/:applicant_id/status", authenticateUser, authorizeAdmin , applicantController.updateApplicationStatus);

router.get("/", authenticateUser, authorizeAdmin,  applicantController.getAllApplicants);

// router.get("/",  applicantController.getAllApplicants);


router.get("/:applicant_id", authenticateUser, authorizeAdmin,  applicantController.getApplicantDetailsById);

module.exports = router;
