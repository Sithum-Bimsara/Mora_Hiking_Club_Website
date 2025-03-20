import React, { useState } from "react";
import { Link } from "react-router-dom";  
import "../styles/Header.css";
import logo from "../assets/images/logo.png";  

const Header1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="MÓRA HIKING CLUB Logo" className="logo" />
        </Link>
      </div>

      {/* Menu Toggle for Mobile */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="/" className="active">Home</a>
        <a href="/about">About Us</a>
        <a href="/articles">Articles</a>
        <a href="/hikes">Hikes</a>
        <a href="/knowledge">Knowledge</a>
      </nav>
      
      {/* Authentication Links */}
      <div className="auth-links">
        <Link to="/login" className="login">Login</Link>
        <Link to="/register" className="signup">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header1;
