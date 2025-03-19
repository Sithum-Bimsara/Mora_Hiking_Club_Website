const authorizeAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== "super admin") {
        return res.status(403).json({ error: "Access denied. Super Admins only." });
    }
    next();
};

module.exports = authorizeAdmin;
