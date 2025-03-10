const express = require("express");
const router = express.Router();
const feedbackController = require("../controllers/feedbackController");
const authenticateUser = require("../middlewares/authMiddleware"); 

router.post("/", authenticateUser,feedbackController.addFeedback);
router.get("/event/:eventId", authenticateUser,feedbackController.getAllFeedbacksByEvent);
router.get("/:id", authenticateUser,feedbackController.getFeedbackById);
router.put("/:id", authenticateUser,feedbackController.updateFeedback);
router.delete("/:id", authenticateUser,feedbackController.deleteFeedback);
router.get("/event/:eventId/count", authenticateUser,feedbackController.getFeedbackCount);
router.get("/event/:eventId/average-rating", authenticateUser,feedbackController.getAverageRating);

module.exports = router;