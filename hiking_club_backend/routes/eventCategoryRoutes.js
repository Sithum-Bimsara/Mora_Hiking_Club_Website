const express = require("express");
const router = express.Router();
const eventCategoryController = require("../controllers/eventCategoryController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.post("/", authenticateUser, authorizeAdmin, eventCategoryController.createEventCategory); 
router.get("/", authenticateUser, authorizeAdmin, eventCategoryController.getAllEventCategories); 
router.put("/:id", authenticateUser, authorizeAdmin, eventCategoryController.updateEventCategory); 
router.delete("/:id", authenticateUser, authorizeAdmin, eventCategoryController.deleteEventCategory);

module.exports = router;
