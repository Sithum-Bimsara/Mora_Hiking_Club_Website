import React from "react";
import { Link } from "react-router-dom";  
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";  

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo-container">
        <img src={logo} alt="MÓRA HIKING CLUB Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <Link to="/" className="active">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/hikes">Hikes</Link>
        <Link to="/knowledge">Knowledge</Link>
        <Link to="/admin">admin</Link>
      </nav>
      <div className="auth-buttons">
        <Link to="/signup" className="signup-button">Sign Up</Link>
        <Link to="/login" className="login-button">Login</Link>
      </div>
    </header>
  );
};

export default Navbar;
