const db = require("../config/db");

// Add an event partner
const addEventPartner = async (partnerId, eventId) => {
    const query = "INSERT INTO event_partner (partner_id, event_id) VALUES (?, ?)";
    const [result] = await db.execute(query, [partnerId, eventId]);
    return result;
};

// Delete an event partner
const deleteEventPartner = async (partnerId, eventId) => {
    const query = "DELETE FROM event_partner WHERE partner_id = ? AND event_id = ?";
    const [result] = await db.execute(query, [partnerId, eventId]);
    return result;
};

// Get all partners for a specific event (with partner names)
const getEventPartners = async (eventId) => {
    const query = `
        SELECT ep.event_id, p.partner_id, p.partner_name, p.partner_logo_link 
        FROM event_partner ep
        JOIN partner p ON ep.partner_id = p.partner_id
        WHERE ep.event_id = ?`;
    const [partners] = await db.execute(query, [eventId]);
    return partners;
};

module.exports = {
    addEventPartner,
    deleteEventPartner,
    getEventPartners
};
