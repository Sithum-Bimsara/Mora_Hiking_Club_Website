const db = require("../config/db");

// Create a new feedback entry
const addFeedback = async (feedbackData) => {
    const query = "INSERT INTO feedback (event_id, rating, review) VALUES (?, ?, ?)";
    const values = [
        feedbackData.event_id,
        feedbackData.rating,
        feedbackData.review
    ];
    const [result] = await db.execute(query, values);
    return result;
};

// Get all feedback entries
const getAllFeedbacksByEvent = async (eventId) => {
    const query = "SELECT * FROM feedback WHERE event_id = ?";
    const [feedback] = await db.execute(query, [eventId]);
    return feedback;
};

// Get specific feedback by ID
const getFeedbackById = async (id) => {
    const query = "SELECT * FROM feedback WHERE id = ?";
    const [feedback] = await db.execute(query, [id]);
    return feedback.length ? feedback[0] : null;
};

// Update feedback entry
const updateFeedback = async (id, feedbackData) => {
    const query = `
        UPDATE feedback 
        SET event_id = ?, rating = ?, review = ?
        WHERE id = ?`;
    const values = [
        feedbackData.event_id,
        feedbackData.rating,
        feedbackData.review,
        id
    ];
    const [result] = await db.execute(query, values);
    return result;
};

// Delete feedback entry
const deleteFeedback = async (id) => {
    const query = "DELETE FROM feedback WHERE id = ?";
    const [result] = await db.execute(query, [id]);
    return result;
};

// Get feedback count for an event
const getFeedbackCount = async (eventId) => {
    const query = `SELECT COUNT(*) AS feedback_count FROM feedback WHERE event_id = ?`;
    const [result] = await db.execute(query, [eventId]);
    return result[0].feedback_count;
};

// Get the avergae rating of an event
const getAverageRating = async (eventId) => {
    const query = `SELECT AVG(rating) AS average_rating FROM feedback WHERE event_id = ?`;
    const [result] = await db.execute(query, [eventId]);
    return result[0].average_rating || 0;
};

module.exports = {
    addFeedback,
    getAllFeedbacksByEvent,
    getFeedbackById,
    updateFeedback,
    deleteFeedback,
    getFeedbackCount,
    getAverageRating
};
