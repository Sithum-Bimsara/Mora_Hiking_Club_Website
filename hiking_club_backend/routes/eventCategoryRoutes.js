const express = require("express");
const router = express.Router();
const eventCategoryController = require("../controllers/eventCategoryController");

router.post("/", eventCategoryController.createEventCategory); 
router.get("/", eventCategoryController.getAllEventCategories); 
router.put("/:id", eventCategoryController.updateEventCategory); 
router.delete("/:id", eventCategoryController.deleteEventCategory);

module.exports = router;
