const express = require("express");
const router = express.Router();
const applicantController = require("../controllers/applicantController");

// Update applicant details (excluding application_status)
router.put("/:applicant_id", applicantController.updateApplicantDetails);


// Update application status (sends email when approved)
router.put("/:applicant_id/status", applicantController.updateApplicationStatus);

module.exports = router;
