const db = require("../config/db");

// Add a new partner
const createPartner = async (partnerData) => {
    const query = "INSERT INTO partner (partner_name, partner_logo_link) VALUES (?, ?)";
    const values = [partnerData.partner_name, partnerData.partner_logo_link];
    const [result] = await db.execute(query, values);
    return result;
};

// Get all partners with ID
const getAllPartners = async () => {
    const query = "SELECT * FROM partner";
    const [partners] = await db.execute(query);
    return partners;
};

// Get a specific partner by ID
const getPartnerById = async (id) => {
    const query = "SELECT * FROM partner WHERE partner_id = ?";
    const [partner] = await db.execute(query, [id]);
    return partner.length ? partner[0] : null;
};

// Update a partner
const updatePartner = async (id, partnerData) => {
    const query = `
        UPDATE partner 
        SET partner_name = ?, partner_logo_link = ?
        WHERE partner_id = ?`;
    const values = [partnerData.partner_name, partnerData.partner_logo_link, id];
    const [result] = await db.execute(query, values);
    return result;
};

// Delete a partner
const deletePartner = async (id) => {
    const query = "DELETE FROM partner WHERE partner_id = ?";
    const [result] = await db.execute(query, [id]);
    return result;
};

module.exports = {
    createPartner,
    getAllPartners,
    getPartnerById,
    updatePartner,
    deletePartner,
};
