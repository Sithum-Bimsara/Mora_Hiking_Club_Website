const commentModel = require("../models/articleCommentModel");

// Create a comment
const createComment = async (req, res) => {
    try {
        const { article_id, commenter_name, comment } = req.body;
        await commentModel.createComment(article_id, commenter_name, comment);
        res.status(201).json({ message: "Comment added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a comment
const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        await commentModel.deleteComment(id);
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createComment,
    deleteComment
};
