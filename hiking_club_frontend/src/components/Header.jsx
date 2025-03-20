import React from "react";
import { Link, useLocation } from "react-router-dom";  
import "../styles/Header.css";
import logo from "../assets/images/logo.png";  
import userPhoto from "../assets/images/1.jpg";  

const Header = () => {
  const location = useLocation(); // Get the current location (path)

  // Function to check if the current link is the active page
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <header className="header">
      <div className="logo-container">
        {/* Wrap logo inside Link to navigate to homepage */}
        <Link to="/">
          <img src={logo} alt="MÓRA HIKING CLUB Logo" className="logo" />
        </Link>
      </div>

      <nav className="nav-links">
        {/* Add active class dynamically based on current path */}
        <Link to="/" className={isActive("/")}>Home</Link>
        <Link to="/about" className={isActive("/about")}>About Us</Link>
        <Link to="/articles" className={isActive("/articles")}>Articles</Link>
        <Link to="/hikes" className={isActive("/hikes")}>Hikes</Link>
        <Link to="/knowledge" className={isActive("/knowledge")}>Knowledge</Link>
        <Link to="/admindashboard" className={isActive("/admindashboard")}>Admin Dashboard</Link>
      </nav>
      
      <Link to="/profile" className="profile">
        <img src={userPhoto} alt="User Profile" className="avatar" /> 
        <div className="user-info">
          <span className="name">User</span>
          <span className="email">user@gmail.com</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
