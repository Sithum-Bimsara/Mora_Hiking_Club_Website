const express = require("express");
const router = express.Router();
const commentController = require("../controllers/articleCommentController");
const authenticateUser = require("../middlewares/authMiddleware"); 

router.post("/", authenticateUser,commentController.createComment);
router.delete("/:id", authenticateUser,commentController.deleteComment);

module.exports = router;
