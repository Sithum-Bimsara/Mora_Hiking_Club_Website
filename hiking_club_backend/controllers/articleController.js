const articleModel = require("../models/articleModel");

// Create an article
const createArticle = async (req, res) => {
    try {
        const { member_id, topic, images_link, description } = req.body;
        await articleModel.createArticle(member_id, topic, images_link, description);
        res.status(201).json({ message: "Article created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an article
const deleteArticle = async (req, res) => {
    try {
        const { id } = req.params;
        await articleModel.deleteArticle(id);
        res.status(200).json({ message: "Article deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all articles
const getAllArticles = async (req, res) => {
    try {
        const articles = await articleModel.getAllArticles();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get specific article with comments
const getArticleWithComments = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await articleModel.getArticleWithComments(id);
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an article
const updateArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const { topic, images_link, description } = req.body;
        await articleModel.updateArticle(id, topic, images_link, description);
        res.status(200).json({ message: "Article updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createArticle,
    deleteArticle,
    getAllArticles,
    getArticleWithComments,
    updateArticle
};
