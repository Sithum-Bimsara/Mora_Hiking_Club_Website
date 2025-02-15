const express = require("express");
const router = express.Router();
const knowledgeController = require("../controllers/knowledgeController");


router.post("/", knowledgeController.createKnowledge);
router.put("/:id", knowledgeController.updateKnowledge);
router.delete("/:id", knowledgeController.deleteKnowledge);
router.get("/", knowledgeController.getAllKnowledgeWithCategory);
router.get("/:id", knowledgeController.getKnowledgeByIdWithCategory);

module.exports = router;
