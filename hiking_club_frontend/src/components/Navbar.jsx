import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">MORA HIKING CLUB</a>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Articles</a></li>
        <li><a href="#">Hikes</a></li>
        <li><a href="#">Knowledge</a></li>
      </ul>

      <div className="profile">
        <a className="login-link" href="/login">Login</a>
        <img src="https://via.placeholder.com/40" alt="User" />
      </div>
    </nav>
  );
}
