import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AdminHeader from "./components/AdminHeader";
import MemberHeader from "./components/MemberHeader";
import Header from "./components/Header";
import Homescreen from "./screens/Homescreen";
import "./App.css";
import Hikes from "./screens/Hikes";
import Profile from "./screens/Profile";
import Articles from "./screens/Articles";
import Knowledge from "./screens/Knowledge";
import Login from "./screens/Login";
import Register from "./screens/Register";
import AboutUs from "./screens/AboutUs";
import Footer from "./components/Footer";

// Admin Screens
import AdminArticles from "./screens/AdminArticles";
import AdminKnowledge from "./screens/AdminKnowledge";
import AdminEvents from "./screens/AdminEvents";
import AdminDashboard from "./screens/AdminDashboard";
import SuperAdminDashboard from "./screens/SuperAdminDashboard";
import AdminApplicants from "./screens/AdminApplicants";

// New HikeDetails Component
import HikeDetails from "./screens/HikeDetails";

// Layout Component
function Layout() {
  const location = useLocation();
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, [location.pathname]);

  // Determine which header to show
  let HeaderComponent = Header;
  if (role === "super_admin" || role === "admin") {
    HeaderComponent = AdminHeader;
  } else if (role === "member") {
    HeaderComponent = MemberHeader;
  }

  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/hikes" element={<Hikes />} />
        <Route path="/hike-details/:id" element={<HikeDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Admin Routes */}
        <Route path="/AdminArticles" element={<AdminArticles />} />
        <Route path="/AdminKnowledge" element={<AdminKnowledge />} />
        <Route path="/AdminEvents" element={<AdminEvents />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/SuperAdminDashboard" element={<SuperAdminDashboard />} />
        <Route path="/AdminApplicants" element={<AdminApplicants />} />
      </Routes>
      <Footer />
    </>
  );
}

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
