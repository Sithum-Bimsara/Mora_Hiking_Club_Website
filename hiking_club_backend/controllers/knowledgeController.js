const KnowledgeModel = require("../models/knowledgeModel");


// Get all knowledge
exports.getAllKnowledge = async (req, res) => {
    try {
        const knowledge = await KnowledgeModel.getAllKnowledge();
        res.json(knowledge);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve knowledge" });
    }
},

// Get knowledge by topic
exports.getKnowledgeByTopic = async (req, res) => {
    try {
        const { topic } = req.params;
        const knowledge = await KnowledgeModel.getKnowledgeByTopic(topic);

        if (!knowledge) {
            return res.status(404).json({ error: "Knowledge not found for the given topic" });
        }

        res.json(knowledge);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve knowledge" });
    }
},

// Create new knowledge
exports.createKnowledge = async (req, res) => {
    try {
        const { topic, images_link, description } = req.body;
        const newKnowledge = await KnowledgeModel.createKnowledge(topic, images_link, description);
        res.status(201).json(newKnowledge);
    } catch (error) {
        res.status(500).json({ error: "Failed to create knowledge" });
    }
},

// Update knowledge by ID
exports.updateKnowledge = async (req, res) => {
    try {
        const { id } = req.params;
        const { topic, images_link, description } = req.body;

        const updated = await KnowledgeModel.updateKnowledge(id, topic, images_link, description);

        if (!updated) {
            return res.status(404).json({ error: "Knowledge not found or no changes made" });
        }

        res.json({ message: "Knowledge updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update knowledge" });
    }
},

// Delete knowledge by ID
exports.deleteKnowledge = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await KnowledgeModel.deleteKnowledge(id);

        if (!deleted) {
            return res.status(404).json({ error: "Knowledge not found" });
        }

        res.json({ message: "Knowledge deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete knowledge" });
    }
}
