const express = require("express");
const router = express.Router();
const eventParticipantController = require("../controllers/eventParticipantController");
const authenticateUser = require("../middlewares/authMiddleware"); 

router.post("/", authenticateUser,eventParticipantController.addEventParticipant); 
router.put("/:event_id/:member_id", authenticateUser,eventParticipantController.updateEventParticipantStatus); 
router.delete("/:event_id/:member_id", authenticateUser,eventParticipantController.deleteEventParticipant); 
router.get("/:event_id", authenticateUser,eventParticipantController.getEventParticipants); 

module.exports = router;
