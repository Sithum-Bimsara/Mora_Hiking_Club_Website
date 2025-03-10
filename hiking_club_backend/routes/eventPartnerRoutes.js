const express = require("express");
const router = express.Router();
const eventPartnerController = require("../controllers/eventPartnerController");
const authenticateUser = require("../middlewares/authMiddleware"); 

router.post("/",authenticateUser, eventPartnerController.addEventPartner); 
router.delete("/:partner_id/:event_id", authenticateUser,eventPartnerController.deleteEventPartner); 
router.get("/:event_id", authenticateUser,eventPartnerController.getEventPartners); 

module.exports = router;
