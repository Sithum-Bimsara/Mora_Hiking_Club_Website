import React from "react";
import { Link } from "react-router-dom";  
import "../styles/Header.css";
import logo from "../assets/images/logo.png";  
import userPhoto from "../assets/images/1.jpg";  

const Header = () => {
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
