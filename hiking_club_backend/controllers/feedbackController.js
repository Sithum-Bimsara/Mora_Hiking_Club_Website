const feedbackModel = require("../models/feedbackModel");

// Create new feedback
const addFeedback = async (req, res) => {
    try {
        const feedbackData = req.body;
        const result = await feedbackModel.addFeedback(feedbackData);
        res.status(201).json({ message: "Feedback submitted successfully", feedbackId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all feedback for a specific event
const getAllFeedbacksByEvent = async (req, res) => {
    try {
        const { eventId } = req.params;
        const feedbacks = await feedbackModel.getAllFeedbacksByEvent(eventId);
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get specific feedback by ID
const getFeedbackById = async (req, res) => {
    try {
        const { id } = req.params;
        const feedback = await feedbackModel.getFeedbackById(id);
        if (!feedback) return res.status(404).json({ message: "Feedback not found" });
        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update feedback
const updateFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const feedbackData = req.body;
        await feedbackModel.updateFeedback(id, feedbackData);
        res.status(200).json({ message: "Feedback updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete feedback
const deleteFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        await feedbackModel.deleteFeedback(id);
        res.status(200).json({ message: "Feedback deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get feedback count for an event
const getFeedbackCount = async (req, res) => {
    try {
        const { eventId } = req.params;
        const count = await feedbackModel.getFeedbackCount(eventId);
        res.status(200).json({ feedbackCount: count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get average rating for an event
const getAverageRating = async (req, res) => {
    try {
        const { eventId } = req.params;
        const averageRating = await feedbackModel.getAverageRating(eventId);
        res.status(200).json({ averageRating });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addFeedback,
    getAllFeedbacksByEvent,
    getFeedbackById,
    updateFeedback,
    deleteFeedback,
    getFeedbackCount,
    getAverageRating,
};

