const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

router.get("/", articleController.getAllArticles);
router.get("/:id/comments", articleController.getArticleWithComments); // Ensure 'id' matches the controller
router.post("/", articleController.createArticle);
router.put("/:id", articleController.updateArticle); // Ensure 'id' matches the controller
router.delete("/:id", articleController.deleteArticle); // Ensure 'id' matches the controller

module.exports = router;
