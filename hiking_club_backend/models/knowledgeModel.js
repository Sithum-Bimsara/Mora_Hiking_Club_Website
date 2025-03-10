const db = require("../config/db");

// Create a knowledge entry
const createKnowledge = async (topic, imagesLink, categoryId, description) => {
    const query = "INSERT INTO knowledge (topic, images_link, knowledge_category_id, description) VALUES (?, ?, ?, ?)";
    const [result] = await db.execute(query, [topic, imagesLink, categoryId, description]);
    return result;
};

// Update a knowledge entry
const updateKnowledge = async (id, topic, imagesLink, categoryId, description) => {
    const query = "UPDATE knowledge SET topic = ?, images_link = ?, knowledge_category_id = ?, description = ? WHERE id = ?";
    const [result] = await db.execute(query, [topic, imagesLink, categoryId, description, id]);
    return result;
};

// Delete a knowledge entry
const deleteKnowledge = async (id) => {
    const query = "DELETE FROM knowledge WHERE id = ?";
    const [result] = await db.execute(query, [id]);
    return result;
};

// Get all knowledge entries with category name
const getAllKnowledgeWithCategory = async () => {
    const query = `
        SELECT k.id, k.topic, k.images_link, k.description, kc.knowledge_category_name
        FROM knowledge k
        JOIN knowledge_category kc ON k.knowledge_category_id = kc.id
    `;
    const [knowledge] = await db.execute(query);
    return knowledge;
};

// Get a specific knowledge entry with category name
const getKnowledgeByIdWithCategory = async (id) => {
    const query = `
        SELECT k.id, k.topic, k.images_link, k.description, kc.knowledge_category_name
        FROM knowledge k
        JOIN knowledge_category kc ON k.knowledge_category_id = kc.id
        WHERE k.id = ?
    `;
    const [knowledge] = await db.execute(query, [id]);
    return knowledge;
};

module.exports = {
    createKnowledge,
    updateKnowledge,
    deleteKnowledge,
    getAllKnowledgeWithCategory,
    getKnowledgeByIdWithCategory
};
