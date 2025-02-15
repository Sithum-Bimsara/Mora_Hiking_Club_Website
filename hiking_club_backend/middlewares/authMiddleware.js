const verifyAdmin = (req, res, next) => {
    if (req.user.role !== "admin" && req.user.role !== "super_admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }
    next();
  };
  
  const verifySuperAdmin = (req, res, next) => {
    if (req.user.role !== "super_admin") {
      return res.status(403).json({ message: "Access denied. Super Admins only." });
    }
    next();
  };
  
  module.exports = { verifyAdmin, verifySuperAdmin };
  