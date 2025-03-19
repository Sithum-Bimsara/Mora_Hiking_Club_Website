import React from "react";
import { Link } from "react-router-dom";  
import "../styles/Header.css";
import logo from "../assets/images/logo.png";  

const Header1 = () => {
  return (
    <header className="header">
      <div className="logo-container">
        {/* Wrap logo inside Link to navigate to homepage */}
        <Link to="/">
          <img src={logo} alt="MÓRA HIKING CLUB Logo" className="logo" />
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/" className="active">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/hikes">Hikes</Link>
        <Link to="/knowledge">Knowledge</Link>
      </nav>
      
      <div className="auth-links">
        <Link to="/login" className="login">Login</Link>
        <Link to="/register" className="signup">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header1;
