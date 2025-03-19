const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateUser = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(403).json({ error: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = decoded; // Attach user data (including role) to request
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid or expired token" });
    }
};

module.exports = authenticateUser;
