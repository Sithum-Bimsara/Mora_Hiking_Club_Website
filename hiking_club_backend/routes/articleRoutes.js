const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.get("/",  articleController.getAllArticles);
router.get("/:articleId/comments", articleController.getArticleWithComments);
router.post("/",authenticateUser, authorizeAdmin,  articleController.createArticle);
router.put("/:articleId", authenticateUser, authorizeAdmin, articleController.updateArticle);
router.delete("/:articleId",authenticateUser, authorizeAdmin,  articleController.deleteArticle);

module.exports = router;
