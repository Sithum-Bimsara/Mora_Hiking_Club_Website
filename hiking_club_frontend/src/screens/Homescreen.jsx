import React, { useEffect } from "react";
import "../styles/Homescreen.css";
import Slideshow from "../components/Slideshow.jsx";
import { useNavigate } from "react-router-dom";

const Homescreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // Animate numbers if the statistics section is in view
            if (entry.target.classList.contains("statistics")) {
              const counters = entry.target.querySelectorAll(".stat h3");
              counters.forEach((counter) => {
                const target = +counter.getAttribute("data-target");
                const duration = 2000; // 2 seconds
                const start = 0;
                const increment = target / (duration / 16); // 60 frames per second

                const updateCounter = () => {
                  const current = +counter.textContent.replace("+", "");
                  if (current < target) {
                    counter.textContent = Math.ceil(current + increment) + "+";
                    setTimeout(updateCounter, 16);
                  } else {
                    counter.textContent = target + "+";
                  }
                };

                updateCounter();
              });
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="Homescreen">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-overlay"></div>
        <h1 className="hero-title animate-on-scroll">MORA HIKING CLUB</h1>
      </header>

      {/* Statistics Section */}
      <section className="statistics animate-on-scroll">
        <h2 className="stathead">Our Hikes</h2>
        <p className="statpara">Here are some hikes we completed during the last years.</p>
        <div className="stats-container">
          <div className="stat">
            <h3 data-target="75">0+</h3>
            <p>Hikes</p>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <h3 data-target="500">0+</h3>
            <p>Members</p>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <h3 data-target="1000000">0+</h3>
            <p>Steps</p>
          </div>
        </div>
      </section>

      <Slideshow />
    </div>
  );
};

export default Homescreen;