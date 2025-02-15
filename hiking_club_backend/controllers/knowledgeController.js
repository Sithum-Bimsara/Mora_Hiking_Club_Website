const knowledgeModel = require("../models/knowledgeModel");

// Create a knowledge entry
const createKnowledge = async (req, res) => {
    try {
        const { topic, images_link, knowledge_category_id, description } = req.body;
        await knowledgeModel.createKnowledge(topic, images_link, knowledge_category_id, description);
        res.status(201).json({ message: "Knowledge entry created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a knowledge entry
const updateKnowledge = async (req, res) => {
    try {
        const { id } = req.params;
        const { topic, images_link, knowledge_category_id, description } = req.body;
        await knowledgeModel.updateKnowledge(id, topic, images_link, knowledge_category_id, description);
        res.status(200).json({ message: "Knowledge entry updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a knowledge entry
const deleteKnowledge = async (req, res) => {
    try {
        const { id } = req.params;
        await knowledgeModel.deleteKnowledge(id);
        res.status(200).json({ message: "Knowledge entry deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all knowledge entries with category name
const getAllKnowledgeWithCategory = async (req, res) => {
    try {
        const knowledge = await knowledgeModel.getAllKnowledgeWithCategory();
        res.status(200).json(knowledge);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific knowledge entry with category name
const getKnowledgeByIdWithCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const knowledge = await knowledgeModel.getKnowledgeByIdWithCategory(id);
        res.status(200).json(knowledge);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createKnowledge,
    updateKnowledge,
    deleteKnowledge,
    getAllKnowledgeWithCategory,
    getKnowledgeByIdWithCategory
};
