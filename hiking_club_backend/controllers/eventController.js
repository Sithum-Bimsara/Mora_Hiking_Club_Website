const eventModel = require("../models/eventModel");

// Create a new event
const createEvent = async (req, res) => {
    try {
        const eventData = req.body;
        const result = await eventModel.createEvent(eventData);
        res.status(201).json({ message: "Event created successfully", eventId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all events
const getAllEvents = async (req, res) => {
    try {
        const events = await eventModel.getAllEvents();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific event by ID
const getEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await eventModel.getEventById(id);
        if (!event) return res.status(404).json({ message: "Event not found" });
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an event
const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const eventData = req.body;
        await eventModel.updateEvent(id, eventData);
        res.status(200).json({ message: "Event updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an event
const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        await eventModel.deleteEvent(id);
        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
};
