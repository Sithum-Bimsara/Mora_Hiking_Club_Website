const db = require("../config/db");


// Get all knowledge entries
const getAllKnowledge =  async () => {
    const [rows] = await db.execute("SELECT * FROM knowledge");
    return rows;
};

// Get knowledge by topic
const getKnowledgeByTopic = async (topic) => {
    const [rows] = await db.execute("SELECT * FROM knowledge WHERE topic = ?", [topic]);
    return rows.length ? rows[0] : null;
};

// Add new knowledge
const createKnowledge = async (topic, images_link, description) => {
    const [result] = await db.execute(
        "INSERT INTO knowledge (topic, images_link, description) VALUES (?, ?, ?)",
        [topic, images_link, description]
    );
    return { id: result.insertId, topic, images_link, description };
};

// Update knowledge by ID
const updateKnowledge =  async (id, topic, images_link, description) => {
    const [result] = await db.execute(
        "UPDATE knowledge SET topic = ?, images_link = ?, description = ? WHERE id = ?",
        [topic, images_link, description, id]
    );
    return result.affectedRows > 0; // True if updated, false otherwise
};

// Delete knowledge by ID
const deleteKnowledge = async (id) => {
    const [result] = await db.execute("DELETE FROM knowledge WHERE id = ?", [id]);
    return result.affectedRows > 0; // True if deleted, false otherwise
}



module.exports = {
    getAllKnowledge,
    getKnowledgeByTopic,
    createKnowledge,
    updateKnowledge,
    deleteKnowledge
};
