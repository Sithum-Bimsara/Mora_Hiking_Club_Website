const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.get("/membership-types", authenticateUser,  memberController.getMembershipTypes);
router.get("/roles", authenticateUser, memberController.getRoles);
router.put("/:member_id/membership-type", authenticateUser, memberController.updateMembershipType);
router.put("/:member_id/role", authenticateUser, memberController.updateRole);

module.exports = router;
