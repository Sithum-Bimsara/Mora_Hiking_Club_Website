const db = require("../config/db");

// Create a knowledge category
const createKnowledgeCategory = async (categoryName) => {
    const query = "INSERT INTO knowledge_category (knowledge_category_name) VALUES (?)";
    const [result] = await db.execute(query, [categoryName]);
    return result;
};

// Update a knowledge category
const updateKnowledgeCategory = async (id, categoryName) => {
    const query = "UPDATE knowledge_category SET knowledge_category_name = ? WHERE id = ?";
    const [result] = await db.execute(query, [categoryName, id]);
    return result;
};

// Delete a knowledge category
const deleteKnowledgeCategory = async (id) => {
    const query = "DELETE FROM knowledge_category WHERE id = ?";
    const [result] = await db.execute(query, [id]);
    return result;
};

// Get all knowledge categories
const getAllKnowledgeCategories = async () => {
    const query = "SELECT * FROM knowledge_category";
    const [categories] = await db.execute(query);
    return categories;
};

// Get a specific knowledge category
const getKnowledgeCategoryById = async (id) => {
    const query = "SELECT * FROM knowledge_category WHERE id = ?";
    const [category] = await db.execute(query, [id]);
    return category;
};

module.exports = {
    createKnowledgeCategory,
    updateKnowledgeCategory,
    deleteKnowledgeCategory,
    getAllKnowledgeCategories,
    getKnowledgeCategoryById
};
