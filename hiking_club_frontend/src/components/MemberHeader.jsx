import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle
import userPhoto from "../assets/images/1.jpg";  

const MemberHeader = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="MÓRA HIKING CLUB Logo" className="logo" />
      </div>

      {/* Hamburger Menu Icon
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div> */}

      <nav className={`nav-links`}>
        <a href="/" className="active">Home</a>
        <a href="/about">About Us</a>
        <a href="/articles">Articles</a>
        <a href="/hikes">Hikes</a>
        <a href="/knowledge">Knowledge</a>
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

export default MemberHeader;
