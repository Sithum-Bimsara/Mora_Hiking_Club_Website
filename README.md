# Mora Hiking Club Website

## ✍️ : Set Up Gmail Authentication

To send emails using **Nodemailer**, we need to configure Gmail authentication. Follow these steps carefully:

1. **Go to your Google Account**  Manage Account  Security 
2. **Enable 2-Step Verification**  (Mandatory for App Passwords)
3. **Create an App Password** :
   - Scroll down to **App Passwords** (Search if necessary )
   - Click **Generate App Password**
   - Enter the **app name** (e.g., "Nodemailer")
   - Copy the **generated password** 

📌 **What is an App Password?**
An **App Password** is a unique code that allows less secure apps (like our Node.js server) to access your Gmail without using your main password. It ensures security while allowing email automation. 

---

##  ✍️ : Setup your .env file as this is , 
```
DB_HOST='localhost'
DB_USER='root'
DB_PASSWORD='your_password_here'
DB_NAME='mora_hiking_club'
PORT=8080

EMAIL_USER=your_email.address
EMAIL_PASS=Your_App_Password

JWT_SECRET=your_secret
JWT_EXPIRES_IN=1h 

```



## Project Structure

```
Mora_Hiking_Club_Website/
│── backend/
│ 
│   ├── config/
│   │   ├── db.js                 # Database connection
│   ├── controllers/
│   │   ├── authController.js      # Authentication logic
│   │   ├── userController.js      # User-related functions
│   │   ├── eventController.js     # Event-related logic
│   │   ├── articleController.js   # Articles and comments
│   │   ├── feedbackController.js  # Feedback management
│   ├── models/
│   │   ├── knowledgeModel.js      # Knowledge and categories
│   │   ├── eventModel.js          # Events and categories
│   │   ├── memberModel.js         # Members and applicants
│   │   ├── articleModel.js        # Articles and comments
│   │   ├── partnerModel.js        # Partners and event partners
│   │   ├── feedbackModel.js       # Feedbacks
│   ├── routes/
│   │   ├── authRoutes.js          # Login, register, logout
│   │   ├── userRoutes.js          # User routes
│   │   ├── eventRoutes.js         # Event management
│   │   ├── articleRoutes.js       # Articles & comments
│   │   ├── feedbackRoutes.js      # Feedback management
│   ├── middlewares/
│   │   ├── authMiddleware.js      # Token verification
│   │   ├── adminMiddleware.js     # Admin role verification
│   ├── utils/
│   │   ├── helpers.js             # Utility functions
├── server.js                     # Express server setup
├── package.json
├── .env
│
│
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
```
