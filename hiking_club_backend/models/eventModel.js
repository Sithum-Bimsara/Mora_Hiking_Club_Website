const db = require("../config/db");

// Get all events
const getAllEvents = async () => {
    const [events] = await db.execute("SELECT * FROM event");
    return events;
};

// Get event by name
const getEventByCategory = async (category) => {
    const [events] = await db.execute("SELECT * FROM event WHERE event_category = ?", [eventName]);
    return events.length ? events : null;
};

// Get event by place
const getEventByPlace = async (placeName) => {
    const [events] = await db.execute("SELECT * FROM event WHERE place_name = ?", [placeName]);
    return events.length ? events : null;
};

// Get all events by date
const getEventsByDate = async (date) => {
    const [events] = await db.execute(
        "SELECT * FROM event WHERE DATE(date) = ?", 
        [date]
    );
    return events.length ? events : null;
};


// Create an event
const createEvent = async (eventData) => {
    const { event_category, place_name, place_description, date, image_link } = eventData;
    await db.execute(
        "INSERT INTO event (event_category, place_name, place_description, date, image_link) VALUES (?, ?, ?, ?, ?)",
        [event_category, place_name, place_description, date, image_link]
    );
    return { message: "Event created successfully" };
};

// Update an event (partial update allowed)
const updateEvent = async (id, eventData) => {
    const [existingEvent] = await db.execute("SELECT * FROM event WHERE id = ?", [id]);
    if (existingEvent.length === 0) {
        throw new Error("Event not found");
    }

    const event = existingEvent[0];
    const updatedData = {
        event_category: eventData.event_category || event.event_category,
        place_name: eventData.place_name || event.place_name,
        place_description: eventData.place_description || event.place_description,
        date: eventData.date || event.date,
        image_link: eventData.image_link || event.image_link,
    };

    await db.execute(
        "UPDATE event SET event_category=?, place_name=?, place_description=?, date=?, image_link=? WHERE id=?",
        [updatedData.event_category, updatedData.place_name, updatedData.place_description, updatedData.date, updatedData.image_link, id]
    );
    return { message: "Event updated successfully" };
};

// Delete an event
const deleteEvent = async (id) => {
    const [existingEvent] = await db.execute("SELECT * FROM event WHERE id = ?", [id]);
    if (existingEvent.length === 0) {
        throw new Error("Event not found");
    }

    await db.execute("DELETE FROM event WHERE id = ?", [id]);
    return { message: "Event deleted successfully" };
};

module.exports = {
    getAllEvents,
    getEventByCategory,
    getEventByPlace,
    getEventsByDate,
    createEvent,
    updateEvent,
    deleteEvent
};