const db = require("../config/db");


// Get all articles
const getAllArticles = async () => {
    const [rows] = await db.execute("SELECT * FROM article");
    return rows;
};

// Get an article by ID with comments
const getArticleWithComments = async (articleId) => {
    const [articles] = await db.execute("SELECT * FROM article WHERE id = ?", [articleId]);
    if (articles.length === 0) return null;

    const [comments] = await db.execute("SELECT * FROM article_comment WHERE article_id = ?", [articleId]);
    return { ...articles[0], comments };
};

// Get all articles with comments
const getAllArticlesWithComments = async () => {
    const [rows] = await db.execute(`
        SELECT a.*, ac.id AS comment_id, ac.commenter_name, ac.comment
        FROM article a
        LEFT JOIN article_comment ac ON a.id = ac.article_id
    `);
    return rows;
};

// Get a single article by ID
const getArticleById = async (id) => {
    const [rows] = await db.execute("SELECT * FROM article WHERE id = ?", [id]);
    return rows.length ? rows[0] : null;
};

// Create a new article
const createArticle = async (member_id, topic, images_link, description) => {
    const [result] = await db.execute(
        "INSERT INTO article (member_id, topic, images_link, description) VALUES (?, ?, ?, ?)",
        [member_id, topic, images_link, description]
    );
    return { id: result.insertId, member_id, topic, images_link, description };
};

// Update an article
const updateArticle = async (id, topic, images_link, description) => {
    const [result] = await db.execute(
        "UPDATE article SET topic = ?, images_link = ?, description = ? WHERE id = ?",
        [topic, images_link, description, id]
    );
    return result.affectedRows > 0; // True if updated, false otherwise
};

// Delete an article
const deleteArticle = async (id) => {
    const [result] = await db.execute("DELETE FROM article WHERE id = ?", [id]);
    return result.affectedRows > 0; // True if deleted, false otherwise
};


module.exports = {
    getAllArticles,
    getArticleWithComments,
    getAllArticlesWithComments,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
}
