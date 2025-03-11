const express = require("express");
const router = express.Router();
const commentController = require("../controllers/articleCommentController");
const authenticateUser = require("../middlewares/authMiddleware");
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.post("/", authenticateUser, authorizeAdmin, commentController.createComment);
router.delete("/:id", authenticateUser, authorizeAdmin,  commentController.deleteComment);

module.exports = router;
