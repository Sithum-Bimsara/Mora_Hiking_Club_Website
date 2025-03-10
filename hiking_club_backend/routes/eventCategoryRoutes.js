const express = require("express");
const router = express.Router();
const eventCategoryController = require("../controllers/eventCategoryController");
const authenticateUser = require("../middlewares/authMiddleware"); 

router.post("/", authenticateUser, eventCategoryController.createEventCategory); 
router.get("/", authenticateUser, eventCategoryController.getAllEventCategories); 
router.put("/:id", authenticateUser, eventCategoryController.updateEventCategory); 
router.delete("/:id", authenticateUser, eventCategoryController.deleteEventCategory);

module.exports = router;
