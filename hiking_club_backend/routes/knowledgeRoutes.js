const express = require("express");
const router = express.Router();
const knowledgeController = require("../controllers/knowledgeController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");

router.post("/", authenticateUser, knowledgeController.createKnowledge);
router.put("/:id", authenticateUser, knowledgeController.updateKnowledge);
router.delete("/:id", authenticateUser, knowledgeController.deleteKnowledge);
router.get("/",  knowledgeController.getAllKnowledgeWithCategory);
router.get("/:id", authenticateUser, knowledgeController.getKnowledgeByIdWithCategory);

module.exports = router;
