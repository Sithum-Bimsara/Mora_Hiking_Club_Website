const db = require("../config/db");

// Create an event category
const createEventCategory = async (categoryName) => {
    const query = "INSERT INTO event_category (category_name) VALUES (?)";
    const [result] = await db.execute(query, [categoryName]);
    return result;
};

// Get all event categories
const getAllEventCategories = async () => {
    const query = "SELECT * FROM event_category";
    const [categories] = await db.execute(query);
    return categories;
};

// Update an event category
const updateEventCategory = async (id, categoryName) => {
    const query = "UPDATE event_category SET category_name = ? WHERE id = ?";
    const [result] = await db.execute(query, [categoryName, id]);
    return result;
};

// Delete an event category
const deleteEventCategory = async (id) => {
    const query = "DELETE FROM event_category WHERE id = ?";
    const [result] = await db.execute(query, [id]);
    return result;
};

module.exports = {
    createEventCategory,
    getAllEventCategories,
    updateEventCategory,
    deleteEventCategory
};
