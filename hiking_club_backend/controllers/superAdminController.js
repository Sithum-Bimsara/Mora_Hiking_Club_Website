const db = require("../config/db"); // Database connection

// Upgrade a user to Admin
exports.upgradeToAdmin = async (req, res) => {
  try {
    const { userId } = req.params;
    await db.query("UPDATE member SET role = 'admin' WHERE member_id = ?", [userId]);
    res.json({ message: "User upgraded to Admin successfully." });
  } catch (error) {
    res.status(500).json({ error: "Database error: " + error.message });
  }
};

// Downgrade an Admin to a regular member
exports.downgradeToMember = async (req, res) => {
  try {
    const { userId } = req.params;
    await db.query("UPDATE member SET role = 'member' WHERE member_id = ?", [userId]);
    res.json({ message: "Admin downgraded to Member successfully." });
  } catch (error) {
    res.status(500).json({ error: "Database error: " + error.message });
  }
};

// Delete a user (Only for Super Admins)
exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    await db.query("DELETE FROM member WHERE member_id = ?", [userId]);
    res.json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Database error: " + error.message });
  }
};
