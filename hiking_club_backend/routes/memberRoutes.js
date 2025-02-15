const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");

router.get("/membership-types", memberController.getMembershipTypes);
router.get("/roles", memberController.getRoles);
router.put("/:member_id/membership-type", memberController.updateMembershipType);
router.put("/:member_id/role", memberController.updateRole);

module.exports = router;
