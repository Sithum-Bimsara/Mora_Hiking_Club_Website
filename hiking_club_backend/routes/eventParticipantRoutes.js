const express = require("express");
const router = express.Router();
const eventParticipantController = require("../controllers/eventParticipantController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.post("/", authenticateUser, authorizeAdmin, eventParticipantController.addEventParticipant); 
router.put("/:event_id/:member_id",authenticateUser, authorizeAdmin, eventParticipantController.updateEventParticipantStatus); 
router.delete("/:event_id/:member_id", authenticateUser, authorizeAdmin, eventParticipantController.deleteEventParticipant); 
router.get("/:event_id", authenticateUser, authorizeAdmin, eventParticipantController.getEventParticipants); 

module.exports = router;
