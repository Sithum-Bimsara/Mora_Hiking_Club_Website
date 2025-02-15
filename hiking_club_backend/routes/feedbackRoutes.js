const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");

router.post("/", feedbackController.addFeedback);
router.get("/event/:eventId", feedbackController.getAllFeedbacksByEvent);
router.get("/:id", feedbackController.getFeedbackById);
router.put("/:id", feedbackController.updateFeedback);
router.delete("/:id", feedbackController.deleteFeedback);
router.get("/event/:eventId/count", feedbackController.getFeedbackCount);
router.get("/event/:eventId/average-rating", feedbackController.getAverageRating);

module.exports = router;