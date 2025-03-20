const db = require("../config/db");

// Get all events
const getAllEvents = async () => {
    console.log("Fetching all events...");
    const [events] = await db.execute("SELECT * FROM event");
    console.log(`Success: Retrieved ${events.length} events.`);
    return events;
};

// Get event by category
const getEventByCategory = async (category) => {
    console.log(`Fetching events with category: '${category}'`);
    const [events] = await db.execute("SELECT * FROM event WHERE event_category = ?", [category]);
    
    if (events.length === 0) {
        console.error(`Error: No events found for category '${category}'`);
        return null;
    }

    console.log(`Success: Found ${events.length} events in category '${category}'`);
    return events;
};

// Get event by place
const getEventByPlace = async (placeName) => {
    console.log(`Fetching events at place: '${placeName}'`);
    const [events] = await db.execute("SELECT * FROM event WHERE place_name = ?", [placeName]);
    
    if (events.length === 0) {
        console.error(`Error: No events found at place '${placeName}'`);
        return null;
    }

    console.log(`Success: Found ${events.length} events at '${placeName}'`);
    return events;
};

// Get all events by date
const getEventsByDate = async (date) => {
    console.log(`Fetching events on date: '${date}'`);
    const [events] = await db.execute("SELECT * FROM event WHERE DATE(date) = ?", [date]);
    
    if (events.length === 0) {
        console.error(`Error: No events found on '${date}'`);
        return null;
    }

    console.log(`Success: Found ${events.length} events on '${date}'`);
    return events;
};

// Create an event
const createEvent = async (eventData) => {
    console.log(`Creating event with data:`, eventData);
    const { event_category, place_name, place_description, date, image_link } = eventData;
    await db.execute(
        "INSERT INTO event (event_category, place_name, place_description, date, image_link) VALUES (?, ?, ?, ?, ?)",
        [event_category, place_name, place_description, date, image_link]
    );
    console.log(`Success: Event '${event_category}' at '${place_name}' created.`);
    return { message: "Event created successfully" };
};

// Update an event (partial update allowed)
const updateEvent = async (id, eventData) => {
    console.log(`Updating event with ID: ${id}`);
    const [existingEvent] = await db.execute("SELECT * FROM event WHERE id = ?", [id]);

    if (existingEvent.length === 0) {
        console.error(`Error: Event with ID ${id} not found.`);
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
    console.log(`Success: Event with ID ${id} updated.`);
    return { message: "Event updated successfully" };
};

// Delete an event
const deleteEvent = async (id) => {
    console.log(`Attempting to delete event with ID: ${id}`);
    const [existingEvent] = await db.execute("SELECT * FROM event WHERE id = ?", [id]);

    if (existingEvent.length === 0) {
        console.error(`Error: Event with ID ${id} not found.`);
        throw new Error("Event not found");
    }

    await db.execute("DELETE FROM event WHERE id = ?", [id]);
    console.log(`Success: Event with ID ${id} deleted.`);
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
