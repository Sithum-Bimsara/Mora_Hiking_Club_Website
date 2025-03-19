const express = require("express");
const router = express.Router();
const articleCommentController = require("../controllers/articleCommentController");
const authenticateUser = require("../middlewares/authMiddleware");
const authorizeAdmin = require("../middlewares/authorizeAdmin");


router.get("/:article_id", articleCommentController.getCommentsByArticle);
router.post("/", authenticateUser, authorizeAdmin, articleCommentController.createComment);
router.delete("/:id", authenticateUser, authorizeAdmin,  articleCommentController.deleteComment);

module.exports = router;
