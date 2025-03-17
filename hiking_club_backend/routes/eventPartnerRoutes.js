const express = require("express");
const router = express.Router();
const eventPartnerController = require("../controllers/eventPartnerController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.post("/",authenticateUser, authorizeAdmin, eventPartnerController.addEventPartner); 
router.delete("/:partner_id/:event_id", authorizeAdmin, authenticateUser,eventPartnerController.deleteEventPartner); 
router.get("/:event_id", authenticateUser, authorizeAdmin, eventPartnerController.getEventPartners); 

module.exports = router;
