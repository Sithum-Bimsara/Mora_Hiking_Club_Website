const knowledgeCategoryModel = require("../models/knowledgeCategoryModel");

// Create a knowledge category
const createKnowledgeCategory = async (req, res) => {
    try {
        const { knowledge_category_name } = req.body;
        await knowledgeCategoryModel.createKnowledgeCategory(knowledge_category_name);
        res.status(201).json({ message: "Knowledge category created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a knowledge category
const updateKnowledgeCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { knowledge_category_name } = req.body;
        await knowledgeCategoryModel.updateKnowledgeCategory(id, knowledge_category_name);
        res.status(200).json({ message: "Knowledge category updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a knowledge category
const deleteKnowledgeCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await knowledgeCategoryModel.deleteKnowledgeCategory(id);
        res.status(200).json({ message: "Knowledge category deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all knowledge categories
const getAllKnowledgeCategories = async (req, res) => {
    try {
        const categories = await knowledgeCategoryModel.getAllKnowledgeCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific knowledge category
const getKnowledgeCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await knowledgeCategoryModel.getKnowledgeCategoryById(id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createKnowledgeCategory,
    updateKnowledgeCategory,
    deleteKnowledgeCategory,
    getAllKnowledgeCategories,
    getKnowledgeCategoryById
};
