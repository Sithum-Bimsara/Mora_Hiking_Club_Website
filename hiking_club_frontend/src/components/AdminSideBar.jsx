import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import "../styles/AdminSideBar.css";

const AdminSideBar = ({ onMenuSelect }) => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const menuItems = [
    { name: "Dashboard", path: "/AdminDashboard" },
    { name: "Applicants", path: "/AdminApplicants" },
    { name: "Event", path: "/AdminEvents" },
    { name: "Articles", path: "/AdminArticales" },
    { name: "Knowledge", path: "/AdminKnowledge" },
  ];

  const handleClick = (item) => {
    navigate(item.path);
    if (onMenuSelect) onMenuSelect(item.name);
  };

  return (
    <div className="sidebar">
      <h2 className="logo">MORA Hiking Club</h2>
      <nav className="menu">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`menu-item ${
              location.pathname === item.path ? "active-item" : ""
            }`}
            onClick={() => handleClick(item)}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default AdminSideBar;
