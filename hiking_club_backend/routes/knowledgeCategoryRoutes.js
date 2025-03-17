const express = require("express");
const router = express.Router();
const knowledgeCategoryController = require("../controllers/knowledgeCategoryController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.post("/", authenticateUser, knowledgeCategoryController.createKnowledgeCategory);
router.put("/:id", authenticateUser, knowledgeCategoryController.updateKnowledgeCategory);
router.delete("/:id", authenticateUser, knowledgeCategoryController.deleteKnowledgeCategory);
router.get("/", authenticateUser, knowledgeCategoryController.getAllKnowledgeCategories);
router.get("/:id", authenticateUser, knowledgeCategoryController.getKnowledgeCategoryById);

module.exports = router;
