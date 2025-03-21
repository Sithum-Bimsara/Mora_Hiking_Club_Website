import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle

const Header2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="MÓRA HIKING CLUB Logo" className="logo" />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="/" className="active">Home</a>
        <a href="/about">About Us</a>
        <a href="/articles">Articles</a>
        <a href="/hikes">Hikes</a>
        <a href="/knowledge">Knowledge</a>
      </nav>

      <div className={`auth-links ${menuOpen ? "open" : ""}`}>
        <Link to="/login" className="login">Login</Link>
        <Link to="/register" className="signup">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header2;
