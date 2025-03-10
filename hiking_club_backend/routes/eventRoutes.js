const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");
const authenticateUser = require("../middlewares/authMiddleware"); 

router.post("/", authenticateUser,eventController.createEvent); //
router.get("/", authenticateUser,eventController.getAllEvents); //
router.get("/:id", authenticateUser,eventController.getEventById); //
router.put("/:id", authenticateUser,eventController.updateEvent); 
router.delete("/:id", authenticateUser,eventController.deleteEvent); 

module.exports = router;
