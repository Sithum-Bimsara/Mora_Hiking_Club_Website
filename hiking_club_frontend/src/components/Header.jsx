import React from "react";
import { Link } from "react-router-dom";  
import "../styles/Header.css";
import logo from "../assets/images/logo.png";  
import userPhoto from "../assets/images/1.jpg";  

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="MÓRA HIKING CLUB Logo" className="logo" />
      </div>
      <nav className="nav-links">
        <a href="/" className="active">Home</a>
        <a href="#">About Us</a>
        <a href="#">Articles</a>
        <a href="/hikes">Hikes</a>
        <a href="#">Knowledge</a>
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
