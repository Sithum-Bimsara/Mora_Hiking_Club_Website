// controllers/eventController.js
const EventModel = require("../models/eventModel");

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await EventModel.getAllEvents();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve events" });
    }
};

// Get event by name
exports.getEventByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const event = await EventModel.getEventByCategory(category);

        if (!event) {
            return res.status(404).json({ error: "Event not found" });
        }

        res.json(event);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve event" });
    }
};

// Get event by place
exports.getEventByPlace = async (req, res) => {
    try {
        const { place } = req.params;
        const events = await EventModel.getEventByPlace(place);

        if (!events) {
            return res.status(404).json({ error: "No events found for this place" });
        }

        res.json(events);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve events" });
    }
};

// Get all events by date
exports.getEventsByDate = async (req, res) => {
    try {
        const { date } = req.params;
        const events = await EventModel.getEventsByDate(date);

        if (!events) {
            return res.status(404).json({ error: "No events found for this date" });
        }

        res.json(events);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve events" });
    }
};

// Create an event
exports.createEvent = async (req, res) => {
    try {
        await EventModel.createEvent(req.body);
        res.status(201).json({ message: "Event created successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to create event" });
    }
};

// Update an event
exports.updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        await EventModel.updateEvent(id, req.body);
        res.json({ message: "Event updated successfully" });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        await EventModel.deleteEvent(id);
        res.json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
