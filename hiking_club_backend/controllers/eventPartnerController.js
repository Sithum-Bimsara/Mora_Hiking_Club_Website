const eventPartnerModel = require("../models/eventPartnerModel");

// Add an event partner
const addEventPartner = async (req, res) => {
    try {
        const { partner_id, event_id } = req.body;
        await eventPartnerModel.addEventPartner(partner_id, event_id);
        res.status(201).json({ message: "Event partner added successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an event partner
const deleteEventPartner = async (req, res) => {
    try {
        const { partner_id, event_id } = req.params;
        await eventPartnerModel.deleteEventPartner(partner_id, event_id);
        res.status(200).json({ message: "Event partner deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all partners for a specific event (with partner names)
const getEventPartners = async (req, res) => {
    try {
        const { event_id } = req.params;
        const partners = await eventPartnerModel.getEventPartners(event_id);
        res.status(200).json(partners);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addEventPartner,
    deleteEventPartner,
    getEventPartners
};
