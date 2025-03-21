import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";  
import "../styles/AdminSideBar.css";

const AdminSideBar = ({ onMenuSelect }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    setRole(localStorage.getItem("role"));  // Update role if it changes
  }, [location.pathname]);

  // Dynamically set the first menu item based on role
  const menuItems = [
    { name: "Members", path: role === "super_admin" ? "/SuperAdminDashboard" : "/AdminDashboard" },
    { name: "Applicants", path: "/AdminApplicants" },
    // { name: "Event", path: "/AdminEvents" },
    // { name: "Articles", path: "/AdminArticles" },
    // { name: "Knowledge", path: "/AdminKnowledge" },
  ];

  const handleClick = (item) => {
    navigate(item.path);
    if (onMenuSelect) onMenuSelect(item.name);
  };

  return (
    <div className="sidebar">
      <nav className="menu">
        <div className="menu-back">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`menu-item ${location.pathname === item.path ? "active-item" : ""}`}
              onClick={() => handleClick(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default AdminSideBar;
