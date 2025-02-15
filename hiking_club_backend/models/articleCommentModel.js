const db = require("../config/db");

// Create a comment for an article
const createComment = async (articleId, commenterName, comment) => {
    const query = "INSERT INTO article_comment (article_id, commenter_name, comment) VALUES (?, ?, ?)";
    const [result] = await db.execute(query, [articleId, commenterName, comment]);
    return result;
};

// Delete a comment
const deleteComment = async (commentId) => {
    const query = "DELETE FROM article_comment WHERE id = ?";
    const [result] = await db.execute(query, [commentId]);
    return result;
};

// Get all comments for an article
const getCommentsByArticleId = async (articleId) => {
    const query = "SELECT * FROM article_comment WHERE article_id = ?";
    const [comments] = await db.execute(query, [articleId]);
    return comments;
};

module.exports = {
    createComment,
    deleteComment,
    getCommentsByArticleId
};
