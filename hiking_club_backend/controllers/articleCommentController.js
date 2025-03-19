const ArticleCommentModel = require("../models/articleCommentModel");


// Get all comments of a specific article
exports.getCommentsByArticle = async (req, res) => {
    try {
        const { article_id } = req.params;
        const comments = await ArticleCommentModel.getCommentsByArticle(article_id);
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve comments" });
    }
};

// Create a comment for an article
exports.createComment = async (req, res) => {
    try {
        const { article_id, commenter_name, comment } = req.body;
        const newComment = await ArticleCommentModel.createComment(article_id, commenter_name, comment);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: "Failed to create comment" });
    }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await ArticleCommentModel.deleteComment(id);

        if (!deleted) {
            return res.status(404).json({ error: "Comment not found" });
        }

        res.json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
}

