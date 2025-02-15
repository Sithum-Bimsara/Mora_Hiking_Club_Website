const express = require("express");
const router = express.Router();
const eventParticipantController = require("../controllers/eventParticipantController");

router.post("/", eventParticipantController.addEventParticipant); 
router.put("/:event_id/:member_id", eventParticipantController.updateEventParticipantStatus); 
router.delete("/:event_id/:member_id", eventParticipantController.deleteEventParticipant); 
router.get("/:event_id", eventParticipantController.getEventParticipants); 

module.exports = router;
