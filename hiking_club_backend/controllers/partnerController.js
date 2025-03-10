const partnerModel = require("../models/partnerModel");

// Add a new partner
const createPartner = async (req, res) => {
    try {
        const partnerData = req.body;
        const result = await partnerModel.createPartner(partnerData);
        res.status(201).json({ message: "Partner added successfully", partnerId: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all partners
const getAllPartners = async (req, res) => {
    try {
        const partners = await partnerModel.getAllPartners();
        res.status(200).json(partners);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific partner by ID
const getPartnerById = async (req, res) => {
    try {
        const { id } = req.params;
        const partner = await partnerModel.getPartnerById(id);
        if (!partner) return res.status(404).json({ message: "Partner not found" });
        res.status(200).json(partner);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a partner
const updatePartner = async (req, res) => {
    try {
        const { id } = req.params;
        const partnerData = req.body;
        await partnerModel.updatePartner(id, partnerData);
        res.status(200).json({ message: "Partner updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a partner
const deletePartner = async (req, res) => {
    try {
        const { id } = req.params;
        await partnerModel.deletePartner(id);
        res.status(200).json({ message: "Partner deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createPartner,
    getAllPartners,
    getPartnerById,
    updatePartner,
    deletePartner,
};
