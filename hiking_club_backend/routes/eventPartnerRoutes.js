const express = require("express");
const router = express.Router();
const eventPartnerController = require("../controllers/eventPartnerController");

router.post("/", eventPartnerController.addEventPartner); 
router.delete("/:partner_id/:event_id", eventPartnerController.deleteEventPartner); 
router.get("/:event_id", eventPartnerController.getEventPartners); 

module.exports = router;
