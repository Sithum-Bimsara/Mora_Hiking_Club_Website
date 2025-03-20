const db = require("../config/db");

// Register a member for an event
const registerParticipant = async (event_id, member_id) => {
    console.log(`Attempting to register a participant to a event: event_id=${event_id}, member_id=${member_id}`);
    // Check if the event exists
    const [eventExists] = await db.execute(
        "SELECT id FROM event WHERE id = ?",
        [event_id]
    );
    if (eventExists.length === 0) {
        console.error(`Error: Event ID ${event_id} does not exist.`);
        throw new Error("Event does not exist");
    }

    // Check if the member exists
    const [memberExists] = await db.execute(
        "SELECT member_id FROM member WHERE member_id = ?",
        [member_id]
    );
    if (memberExists.length === 0) {
        console.error(`Error: Member ID ${member_id} does not exist.`);
        throw new Error("Member does not exist");
    }

    // Check if the member is already registered for the event
    const [alreadyRegistered] = await db.execute(
        "SELECT * FROM event_participant WHERE event_id = ? AND member_id = ?",
        [event_id, member_id]
    );
    if (alreadyRegistered.length > 0) {
        console.error(`Error: Member ID ${member_id} , This member is already registered for this event.`);
        throw new Error("Member is already registered for this event");
    }

    // Register the member for the event
    await db.execute(
        "INSERT INTO event_participant (event_id, member_id, participation_status) VALUES (?, ?, 'pending')",
        [event_id, member_id]
    );
    console.log(`Success: Participant (member_id=${member_id}) registered for event (event_id=${event_id}).`);
    return { message: "Member registered for event successfully" };
};





// Remove a member from an event
const removeParticipant = async (event_id, member_id) => {
    console.log(`Attempting to remove participant: event_id=${event_id}, member_id=${member_id}`);

    // Check if the event exists
    const [eventExists] = await db.execute(
        "SELECT id FROM event WHERE id = ?",
        [event_id]
    );
    if (eventExists.length === 0) {
        console.error(`Error: Event ID ${event_id} does not exist.`);
        throw new Error("Event does not exist");
    }

    // Check if the member exists
    const [memberExists] = await db.execute(
        "SELECT member_id FROM member WHERE member_id = ?",
        [member_id]
    );
    if (memberExists.length === 0) {
        console.error(`Error: Member ID ${member_id} does not exist.`);
        throw new Error("Member does not exist");
    }

    // Check if the participant is registered for the event
    const [participant] = await db.execute(
        "SELECT * FROM event_participant WHERE event_id = ? AND member_id = ?",
        [event_id, member_id]
    );
    if (participant.length === 0) {
        console.error(`Error: Participant (member_id=${member_id}) not found in event (event_id=${event_id}).`);
        throw new Error("Participant not found in this event");
    }

    // Remove the participant from the event
    await db.execute(
        "DELETE FROM event_participant WHERE event_id = ? AND member_id = ?",
        [event_id, member_id]
    );

    console.log(`Success: Participant (member_id=${member_id}) removed from event (event_id=${event_id}).`);
    return { message: "Participant removed successfully" };
};




// Change participation status
const updateParticipationStatus = async (event_id, member_id, status) => {
    console.log(`Attempting to update status: event_id=${event_id}, member_id=${member_id}, new_status=${status}`);

    // Check if the participant exists
    const [participant] = await db.execute(
        "SELECT participation_status FROM event_participant WHERE event_id = ? AND member_id = ?",
        [event_id, member_id]
    );

    if (participant.length === 0) {
        console.error(`Error: Participant (member_id=${member_id}) not found in event (event_id=${event_id}).`);
        throw new Error("Participant not found in this event");
    }

    const currentStatus = participant[0].participation_status;

    // Check if the user is trying to update to the same status
    if (currentStatus === status) {
        console.error(`Error: Participant (member_id=${member_id}) already has status '${status}'. No update needed.`);
        throw new Error(`Participant already has status '${status}'`);
    }

    // Update the participation status
    await db.execute(
        "UPDATE event_participant SET participation_status = ? WHERE event_id = ? AND member_id = ?",
        [status, event_id, member_id]
    );

    console.log(`Success: Participant (member_id=${member_id}) status updated from '${currentStatus}' to '${status}'.`);
    return { message: "Participation status updated successfully" };
};


// Get all selected participants with details
const getSelectedParticipants = async (event_id) => {
    // Get event details first
    const [eventDetails] = await db.execute(
        `SELECT e.event_category, e.place_name, e.date 
         FROM event e 
         WHERE e.id = ?`,
        [event_id]
    );

    // Check if event exists
    if (eventDetails.length === 0) {
        throw new Error("Event not found");
    }

    // Get selected participants with their applicant details
    const [participants] = await db.execute(
        `SELECT a.applicant_id, a.first_name, a.last_name, a.full_name, 
                a.email, a.contact_no, a.gender, a.date_of_birth, 
                a.university_id, a.faculty, a.degree_program, a.year, 
                a.bio_description, a.skills, a.blood_type, 
                a.first_aid_skills, a.injuries, a.long_term_medical_issues, 
                a.medicines, m.membership_type, m.role, m.profile_pic_link
         FROM event_participant ep
         JOIN member m ON ep.member_id = m.member_id
         JOIN applicant a ON m.applicant_id = a.applicant_id
         WHERE ep.event_id = ? AND ep.participation_status = 'selected'`,
        [event_id]
    );

    // Check if there are selected participants
    if (participants.length === 0) {
        throw new Error("No members have been selected for this event");
    }

    return {
        event: eventDetails[0], // Show event details once
        participants: participants, // List of selected participants
    };
};



// Get all pending participants
const getPendingParticipants = async (event_id) => {
    // Get event details first
    const [eventDetails] = await db.execute(
        `SELECT e.event_category, e.place_name, e.date 
         FROM event e 
         WHERE e.id = ?`,
        [event_id]
    );

    // Check if event exists
    if (eventDetails.length === 0) {
        throw new Error("Event not found");
    }

    // Get selected participants with their applicant details
    const [participants] = await db.execute(
        `SELECT a.applicant_id, a.first_name, a.last_name, a.full_name, 
                a.email, a.contact_no, a.gender, a.date_of_birth, 
                a.university_id, a.faculty, a.degree_program, a.year, 
                a.bio_description, a.skills, a.blood_type, 
                a.first_aid_skills, a.injuries, a.long_term_medical_issues, 
                a.medicines, m.membership_type, m.role, m.profile_pic_link
         FROM event_participant ep
         JOIN member m ON ep.member_id = m.member_id
         JOIN applicant a ON m.applicant_id = a.applicant_id
         WHERE ep.event_id = ? AND ep.participation_status = 'pending'`,
        [event_id]
    );

    // Check if there are selected participants
    if (participants.length === 0) {
        throw new Error("No members have been registered for this event");
    }

    return {
        event: eventDetails[0], // Show event details once
        participants: participants, // List of selected participants
    };
};


module.exports = {
    registerParticipant,
    removeParticipant,
    updateParticipationStatus,
    getSelectedParticipants,
    getPendingParticipants
};