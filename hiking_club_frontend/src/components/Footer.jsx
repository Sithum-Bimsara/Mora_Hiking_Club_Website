import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaClock, FaTiktok, FaYoutube } from "react-icons/fa";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
    <div className="logo-section">
      <h1 className="logo">MORA <span>HIKING CLUB</span></h1>
      <div className="social-icons">
        <a href="https://www.facebook.com/MoraHikingClub" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/morahiking/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/mora-hiking-club/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.tiktok.com/@morahiking?_t=ZT-8uo9RpeJ79O&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>

        <a href="https://www.youtube.com/@MoraHikingClub" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
      </div>
    </div>

      <div className="footer-links">
        <h3>Club</h3>
        <ul>
          <li><Link to="/" className="footer-link">Home</Link></li>
          <li><Link to="/knowledge" className="footer-link">Knowledge</Link></li>
          <li><Link to="/articles" className="footer-link">Articles</Link></li>
          <li><Link to="/about" className="footer-link">About Us</Link></li>
        </ul>
      </div>

      <div className="contact-info">
        <h3>Contact</h3>
        <p>Phone: +669 4398 4920</p>
        <p>Email: morahikingclub@gmail.com</p>
        <p>Address: Mora Hiking Club
University of Moratuwa,
Katubedda 10400,
Sri Lanka.</p>
        <p><FaClock /> Sat - Fri (9.00am - 9.00pm)</p>
      </div>
    </footer>
  );
};

export default Footer;