const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.get("/",  articleController.getAllArticles);
router.get("/:id/comments", articleController.getArticleWithComments);
router.get("/with-comments", articleController.getAllArticlesWithComments);
router.post("/",authenticateUser, authorizeAdmin,  articleController.createArticle);
router.put("/:id", authenticateUser, authorizeAdmin, articleController.updateArticle);
router.delete("/:id",authenticateUser, authorizeAdmin,  articleController.deleteArticle);

module.exports = router;
