const express = require("express");
const router = express.Router();
const knowledgeCategoryController = require("../controllers/knowledgeCategoryController");

router.post("/", knowledgeCategoryController.createKnowledgeCategory);
router.put("/:id", knowledgeCategoryController.updateKnowledgeCategory);
router.delete("/:id", knowledgeCategoryController.deleteKnowledgeCategory);
router.get("/", knowledgeCategoryController.getAllKnowledgeCategories);
router.get("/:id", knowledgeCategoryController.getKnowledgeCategoryById);

module.exports = router;
