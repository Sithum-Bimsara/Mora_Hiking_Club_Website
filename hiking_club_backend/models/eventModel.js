const db = require("../config/db");

// Create a new event
const createEvent = async (eventData) => {
    const query = "INSERT INTO event (event_category_id, place_name, place_description, date, image_link) VALUES (?, ?, ?, ?, ?)";
    const values = [
        eventData.event_category_id,
        eventData.place_name,
        eventData.place_description,
        eventData.date,
        eventData.image_link,
    ];
    const [result] = await db.execute(query, values);
    return result;
};

// Get all events
const getAllEvents = async () => {
    const query = `
        SELECT e.*, ec.category_name 
        FROM event e
        JOIN event_category ec ON e.event_category_id = ec.id`;
    const [events] = await db.execute(query);
    return events;
};

// Get a specific event by ID
const getEventById = async (id) => {
    const query = `
        SELECT e.*, ec.category_name 
        FROM event e
        JOIN event_category ec ON e.event_category_id = ec.id
        WHERE e.id = ?`;
    const [event] = await db.execute(query, [id]);
    return event.length ? event[0] : null;
};

// Update an event
const updateEvent = async (id, eventData) => {
    const query = `
        UPDATE event 
        SET event_category_id = ?, place_name = ?, place_description = ?, date = ?, image_link = ?
        WHERE id = ?`;
    const values = [
        eventData.event_category_id,
        eventData.place_name,
        eventData.place_description,
        eventData.date,
        eventData.image_link,
        id,
    ];
    const [result] = await db.execute(query, values);
    return result;
};

// Delete an event
const deleteEvent = async (id) => {
    const query = "DELETE FROM event WHERE id = ?";
    const [result] = await db.execute(query, [id]);
    return result;
};

module.exports = {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
};
