const ArticleModel = require("../models/articleModel");

// Get all articles
exports.getAllArticles = async (req, res) => {
    try {
        const articles = await ArticleModel.getAllArticles();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve articles" });
    }
};

// Get an article by ID with comments
exports.getArticleWithComments = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await ArticleModel.getArticleWithComments(id);

        if (!article) {
            return res.status(404).json({ error: "Article not found" });
        }

        res.json(article);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve article" });
    }
};

// Get all articles with comments
exports.getAllArticlesWithComments = async (req, res) => {
    try {
        const articles = await ArticleModel.getAllArticlesWithComments();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve articles" });
    }
};

// Create an article
exports.createArticle = async (req, res) => {
    try {
        const { member_id, topic, images_link, description } = req.body;
        const newArticle = await ArticleModel.createArticle(member_id, topic, images_link, description);
        res.status(201).json(newArticle);
    } catch (error) {
        res.status(500).json({ error: "Failed to create article" });
    }
};

// Update an article
exports.updateArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const { topic, images_link, description } = req.body;

        const updated = await ArticleModel.updateArticle(id, topic, images_link, description);
        if (!updated) {
            return res.status(404).json({ error: "Article not found or no changes made" });
        }

        res.json({ message: "Article updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update article" });
    }
};

// Delete an article
exports.deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await ArticleModel.deleteArticle(id);

        if (!deleted) {
            return res.status(404).json({ error: "Article not found" });
        }

        res.json({ message: "Article deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete article" });
    }
};
