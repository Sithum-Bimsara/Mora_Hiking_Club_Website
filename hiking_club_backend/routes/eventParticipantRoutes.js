const express = require("express");
const router = express.Router();
const eventParticipantController = require("../controllers/eventParticipantController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.post("/register", authenticateUser, eventParticipantController.registerParticipant);
router.delete("/remove", authenticateUser, authorizeAdmin, eventParticipantController.removeParticipant);
router.put("/update-status", authenticateUser, authorizeAdmin, eventParticipantController.updateParticipationStatus);
router.get("/selected/:event_id",authenticateUser, authorizeAdmin,  eventParticipantController.getSelectedParticipants);
router.get("/pending/:event_id", authenticateUser,authorizeAdmin,  eventParticipantController.getPendingParticipants);

module.exports = router;
