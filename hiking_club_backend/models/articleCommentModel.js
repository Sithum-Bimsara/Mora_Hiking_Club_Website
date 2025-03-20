const db = require("../config/db");

 // Get all comments for a specific article
const getCommentsByArticle = async (articleId) => {
    const [rows] = await db.execute("SELECT * FROM article_comment WHERE article_id = ?", [articleId]);
    return rows;
};

// Create a comment for an article
const createComment = async (article_id, commenter_name, comment) => {
    const [result] = await db.execute(
        "INSERT INTO article_comment (article_id, commenter_name, comment) VALUES (?, ?, ?)",
        [article_id, commenter_name, comment]
    );
    return { id: result.insertId, article_id, commenter_name, comment };
};

// Delete a comment
const deleteComment = async (id) => {
    const [result] = await db.execute("DELETE FROM article_comment WHERE id = ?", [id]);
    return result.affectedRows > 0;
};

module.exports = {
    getCommentsByArticle,
    createComment,
    deleteComment
}
