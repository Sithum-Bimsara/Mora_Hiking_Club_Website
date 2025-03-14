const express = require("express");
const dotenv = require("dotenv");
const partnerRoutes = require("./routes/partnerRoutes");
const eventRoutes = require("./routes/eventRoutes");
const eventPartnerRoutes = require("./routes/eventPartnerRoutes");
const eventCategoryRoutes = require("./routes/eventCategoryRoutes");
const eventParticipantRoutes = require("./routes/eventParticipantRoutes");
const articleRoutes = require("./routes/articleRoutes");
const commentRoutes = require("./routes/articleCommentRoutes");
const knowledgeCategoryRoutes = require("./routes/knowledgeCategoryRoutes");
const knowledgeRoutes = require("./routes/knowledgeRoutes");
const memberRoutes = require("./routes/memberRoutes");
const applicantRoutes = require("./routes/applicantRoutes");
const authRoutes = require("./routes/authRoutes");


const mySqlPool = require("./config/db");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 


app.use("/api/articles", articleRoutes);
app.use("/api/event-partners", eventPartnerRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/event-categories", eventCategoryRoutes);
app.use("/api/event-participants", eventParticipantRoutes);
app.use("/api/articles", articleRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/knowledge-categories", knowledgeCategoryRoutes);
app.use("/api/knowledge", knowledgeRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/applicants", applicantRoutes);
app.use("/api/auth", authRoutes);


const port = process.env.PORT || 8000;

// Connect to MySQL and start server
mySqlPool.query('SELECT 1').then(() => {
    console.log('MySQL DB Connected');
    app.listen(port, () => {
        console.log(`Server Running on port ${port}`);
    });
}).catch((error) => {
    console.log(error);
});