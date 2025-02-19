const db = require("../config/db");

// Add an event participant
const addEventParticipant = async (eventId, memberId, status) => {
    const query = "INSERT INTO event_participant (event_id, member_id, participation_status) VALUES (?, ?, ?)";
    const [result] = await db.execute(query, [eventId, memberId, status]);
    return result;
};

// Update event participant status
const updateEventParticipantStatus = async (eventId, memberId, status) => {
    const query = "UPDATE event_participant SET participation_status = ? WHERE event_id = ? AND member_id = ?";
    const [result] = await db.execute(query, [status, eventId, memberId]);
    return result;
};

// Delete an event participant
const deleteEventParticipant = async (eventId, memberId) => {
    const query = "DELETE FROM event_participant WHERE event_id = ? AND member_id = ?";
    const [result] = await db.execute(query, [eventId, memberId]);
    return result;
};

// Get all participants for a specific event (including member details)
const getEventParticipants = async (eventId) => {
    const query = `
        SELECT ep.event_id, m.member_id, m.applicant_id, m.membership_type, m.role 
        FROM event_participant ep
        JOIN member m ON ep.member_id = m.member_id
        WHERE ep.event_id = ?`;
    const [participants] = await db.execute(query, [eventId]);
    return participants;
};

module.exports = {
    addEventParticipant,
    updateEventParticipantStatus,
    deleteEventParticipant,
    getEventParticipants
};
