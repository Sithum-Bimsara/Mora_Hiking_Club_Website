const eventCategoryModel = require("../models/eventCategoryModel");

// Create an event category
const createEventCategory = async (req, res) => {
    try {
        const { category_name } = req.body;
        await eventCategoryModel.createEventCategory(category_name);
        res.status(201).json({ message: "Event category created successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all event categories
const getAllEventCategories = async (req, res) => {
    try {
        const categories = await eventCategoryModel.getAllEventCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an event category
const updateEventCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { category_name } = req.body;
        await eventCategoryModel.updateEventCategory(id, category_name);
        res.status(200).json({ message: "Event category updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an event category
const deleteEventCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await eventCategoryModel.deleteEventCategory(id);
        res.status(200).json({ message: "Event category deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createEventCategory,
    getAllEventCategories,
    updateEventCategory,
    deleteEventCategory
};
