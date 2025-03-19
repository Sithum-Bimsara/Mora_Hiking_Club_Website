const express = require("express");
const router = express.Router();
const knowledgeController = require("../controllers/knowledgeController");
const authenticateUser = require("../middlewares/authMiddleware"); 
const authorizeAdmin = require("../middlewares/authorizeAdmin");


router.get("/", knowledgeController.getAllKnowledge); 
router.get("/:topic", knowledgeController.getKnowledgeByTopic);
router.post("/", authenticateUser, authorizeAdmin,  knowledgeController.createKnowledge);
router.put("/:id", authenticateUser, authorizeAdmin, knowledgeController.updateKnowledge);
router.delete("/:id", authenticateUser, authorizeAdmin, knowledgeController.deleteKnowledge);


module.exports = router;
