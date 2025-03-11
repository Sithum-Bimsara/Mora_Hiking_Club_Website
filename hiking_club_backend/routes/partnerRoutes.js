const express = require("express");
const router = express.Router();
const partnerController = require("../controllers/partnerController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.post("/", authenticateUser, partnerController.createPartner); 
router.get("/", authenticateUser, partnerController.getAllPartners); 
router.get("/:id", authenticateUser, partnerController.getPartnerById); 
router.put("/:id", authenticateUser, partnerController.updatePartner); 
router.delete("/:id", authenticateUser, partnerController.deletePartner);

module.exports = router;
