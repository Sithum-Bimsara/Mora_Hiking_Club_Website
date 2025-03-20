import React, { useState } from "react";
import { NavLink } from "react-router-dom";  
import "../styles/Header.css";
import logo from "../assets/images/logo.png";  

const Header1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <NavLink to="/">
          <img src={logo} alt="MÓRA HIKING CLUB Logo" className="logo" />
        </NavLink>
      </div>

      {/* Menu Toggle for Mobile */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/articles">Articles</NavLink>
        <NavLink to="/hikes">Hikes</NavLink>
        <NavLink to="/knowledge">Knowledge</NavLink>
      </nav>
      
      {/* Authentication Links */}
      <div className="auth-links">
        <NavLink to="/login" className="login">Login</NavLink>
        <NavLink to="/register" className="signup">Sign Up</NavLink>
      </div>
    </header>
  );
};

export default Header1;
