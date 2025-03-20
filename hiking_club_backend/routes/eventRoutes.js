const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.get("/", authenticateUser,eventController.getAllEvents);
router.get("/category/:category", authenticateUser, eventController.getEventByCategory);
router.get("/place/:place",authenticateUser, eventController.getEventByPlace);
router.get("/date/:date", authenticateUser,eventController.getEventsByDate);
router.post("/", authenticateUser, authorizeAdmin, eventController.createEvent);
router.put("/:id",authenticateUser, authorizeAdmin ,eventController.updateEvent);
router.delete("/:id",authenticateUser, authorizeAdmin, eventController.deleteEvent);

module.exports = router;
