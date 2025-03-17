import React, { useEffect } from "react";
import "../styles/Homescreen.css";
import { useNavigate } from 'react-router-dom';

const Homescreen = () => {
  const navigate = useNavigate();

  // Add scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="Homescreen">
      {/* Hero Section */}
      <header className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="../assets/videos/hiking.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <h1 className="hero-title animate-on-scroll">MORA HIKING CLUB</h1>
        <button onClick={() => navigate('/register')} className="cta-button animate-on-scroll">
          Join Us Now
        </button>
        <div className="hike-cards animate-on-scroll">
          <div className="card card-1">
            <p>Explore the latest trails added to our collection.</p>
          </div>
          <div className="card card-2">
            <p>Check out our most popular hiking destinations.</p>
          </div>
          <div className="card card-3">
            <p>Join our upcoming hiking events and meet fellow hikers.</p>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section className="content animate-on-scroll">
        <div className="article">
          <h2>Read about our Articles</h2>
          <button onClick={() => navigate('/articles')} className="tag">Articles</button>
          <div className="article-image"></div>
        </div>

        <div className="knowledge">
          <div className="knowledge-image"></div>
          <h2>Gain Knowledge About Hiking</h2>
          <button onClick={() => navigate('/knowledge')} className="tag">Knowledge</button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials animate-on-scroll">
        <h2>What Our Members Say</h2>
        <div className="testimonial-carousel">
          <div className="testimonial">
            <img src="../assets/images/member1.jpg" alt="Member 1" />
            <p>"Joining the Mora Hiking Club was the best decision I made this year!"</p>
          </div>
          <div className="testimonial">
            <img src="../assets/images/member2.jpg" alt="Member 2" />
            <p>"The hikes are well-organized, and the people are amazing!"</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter animate-on-scroll">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest updates on hikes and events.</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default Homescreen;