const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.post("/", authorizeAdmin,  authenticateUser,eventController.createEvent); 
router.get("/", authenticateUser,eventController.getAllEvents); 
router.get("/:id", authenticateUser,eventController.getEventById); 
router.put("/:id", authorizeAdmin,  authenticateUser,eventController.updateEvent); 
router.delete("/:id",  authorizeAdmin, authenticateUser,eventController.deleteEvent); 

module.exports = router;
