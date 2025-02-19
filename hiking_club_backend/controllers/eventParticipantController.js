const eventParticipantModel = require("../models/eventParticipantModel");

// Add an event participant
const addEventParticipant = async (req, res) => {
    try {
        const { event_id, member_id, participation_status } = req.body;
        await eventParticipantModel.addEventParticipant(event_id, member_id, participation_status);
        res.status(201).json({ message: "Event participant added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update event participant status
const updateEventParticipantStatus = async (req, res) => {
    try {
        const { event_id, member_id } = req.params;
        const { participation_status } = req.body;
        await eventParticipantModel.updateEventParticipantStatus(event_id, member_id, participation_status);
        res.status(200).json({ message: "Event participant status updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an event participant
const deleteEventParticipant = async (req, res) => {
    try {
        const { event_id, member_id } = req.params;
        await eventParticipantModel.deleteEventParticipant(event_id, member_id);
        res.status(200).json({ message: "Event participant deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all participants for a specific event
const getEventParticipants = async (req, res) => {
    try {
        const { event_id } = req.params;
        const participants = await eventParticipantModel.getEventParticipants(event_id);
        res.status(200).json(participants);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addEventParticipant,
    updateEventParticipantStatus,
    deleteEventParticipant,
    getEventParticipants
};
