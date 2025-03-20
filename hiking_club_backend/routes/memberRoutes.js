const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");
const authorizeSuperAdmin = require("../middlewares/authorizeSuperAdmin");


router.get("/:member_id", authenticateUser,  memberController.getApplicantDetailsByMemberId);
router.get("/", authenticateUser, authorizeAdmin,  memberController.getAllMembers);
router.put("/:member_id/membership-type", authenticateUser, authorizeSuperAdmin,  memberController.updateMembershipType);
router.put("/:member_id/role", authenticateUser, authorizeSuperAdmin,  memberController.updateRole);

module.exports = router;
