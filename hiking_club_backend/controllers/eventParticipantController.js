const eventParticipantModel = require("../models/eventParticipantModel");

// Register a member for an event
exports.registerParticipant = async (req, res) => {
    const { event_id, member_id } = req.body;
    
    try {
        const response = await eventParticipantModel.registerParticipant(event_id, member_id);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Remove a member from an event
exports.removeParticipant = async (req, res) => {
    const { event_id, member_id } = req.body;
    try {
        const response = await eventParticipantModel.removeParticipant(event_id, member_id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update participation status
exports.updateParticipationStatus = async (req, res) => {
    const { event_id, member_id, status } = req.body;
    try {
        const response = await eventParticipantModel.updateParticipationStatus(event_id, member_id, status);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all selected participants
exports.getSelectedParticipants = async (req, res) => {
    const { event_id } = req.params;

    try {
        const data = await eventParticipantModel.getSelectedParticipants(event_id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all pending participants
exports.getPendingParticipants = async (req, res) => {
    const { event_id } = req.params;
    try {
        const participants = await eventParticipantModel.getPendingParticipants(event_id);
        res.status(200).json(participants);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};