mora-hiking/
│── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js                 # Database connection
│   │   ├── controllers/
│   │   │   ├── authController.js      # Authentication logic
│   │   │   ├── adminController.js     # Admin management (two levels)
│   │   │   ├── userController.js      # User-related functions
│   │   │   ├── eventController.js     # Event-related logic
│   │   │   ├── articleController.js   # Articles and comments
│   │   │   ├── feedbackController.js  # Feedback management
│   │   ├── models/
│   │   │   ├── knowledgeModel.js      # Knowledge and categories
│   │   │   ├── eventModel.js          # Events and categories
│   │   │   ├── memberModel.js         # Members and applicants
│   │   │   ├── articleModel.js        # Articles and comments
│   │   │   ├── partnerModel.js        # Partners and event partners
│   │   │   ├── feedbackModel.js       # Feedbacks
│   │   ├── routes/
│   │   │   ├── authRoutes.js          # Login, register, logout
│   │   │   ├── adminRoutes.js         # Admin functionalities (Level 1 & 2)
│   │   │   ├── userRoutes.js          # User routes
│   │   │   ├── eventRoutes.js         # Event management
│   │   │   ├── articleRoutes.js       # Articles & comments
│   │   │   ├── feedbackRoutes.js      # Feedback management
│   │   ├── middlewares/
│   │   │   ├── authMiddleware.js      # Token verification
│   │   │   ├── adminMiddleware.js     # Admin role verification
│   │   ├── utils/
│   │   │   ├── helpers.js             # Utility functions
│   │   ├── app.js                     # Express server setup
│   ├── package.json
│   ├── .env
│   ├── README.md
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── UserDashboard.jsx
│   │   │   ├── EventList.jsx
│   │   │   ├── ArticleList.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── AdminPanel.jsx
│   │   ├── utils/
│   │   │   ├── api.js                  # API call functions
│   │   ├── App.js
│   ├── package.json
│   ├── .env
│   ├── README.md
