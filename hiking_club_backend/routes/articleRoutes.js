const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const authenticateUser = require("../middlewares/authMiddleware"); // Import middleware

router.get("/",  articleController.getAllArticles);
router.get("/:articleId/comments", articleController.getArticleWithComments);
router.post("/",authenticateUser, articleController.createArticle);
router.put("/:articleId", authenticateUser,articleController.updateArticle);
router.delete("/:articleId",authenticateUser, articleController.deleteArticle);

module.exports = router;
