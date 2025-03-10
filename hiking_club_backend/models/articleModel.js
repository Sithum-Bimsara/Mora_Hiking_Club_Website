const db = require("../config/db");

// Create an article
const createArticle = async (memberId, topic, imagesLink, description) => {
    const query = "INSERT INTO article (member_id, topic, images_link, description) VALUES (?, ?, ?, ?)";
    const [result] = await db.execute(query, [memberId, topic, imagesLink, description]);
    return result;
};

// Delete an article
const deleteArticle = async (articleId) => {
    const query = "DELETE FROM article WHERE id = ?";
    const [result] = await db.execute(query, [articleId]);
    return result;
};

// Get all articles
const getAllArticles = async () => {
    const query = "SELECT * FROM article";
    const [articles] = await db.execute(query);
    return articles;
};

// Get a specific article with comments and member name
const getArticleWithComments = async (articleId) => {
    const query = `
        SELECT a.id, a.topic, a.images_link, a.description, 
               m.member_id, ap.first_name, ap.last_name, 
               c.id AS comment_id, c.commenter_name, c.comment
        FROM article a
        JOIN member m ON a.member_id = m.member_id
        JOIN applicant ap ON m.applicant_id = ap.applicant_id
        LEFT JOIN article_comment c ON a.id = c.article_id
        WHERE a.id = ?
    `;
    const [article] = await db.execute(query, [articleId]);
    return article;
};

// Update an article
const updateArticle = async (articleId, topic, imagesLink, description) => {
    const query = "UPDATE article SET topic = ?, images_link = ?, description = ? WHERE id = ?";
    const [result] = await db.execute(query, [topic, imagesLink, description, articleId]);
    return result;
};

module.exports = {
    createArticle,
    deleteArticle,
    getAllArticles,
    getArticleWithComments,
    updateArticle
};
