import React from "react";
import "../styles/Homescreen.css";
import { useNavigate } from 'react-router-dom';

const Homescreen = () => {
  const navigate = useNavigate();

  return (
    <div className="Homescreen">
      {/* Hero Section */}
      <header className="hero">
        <h1 style={{ height: '300px', fontSize: '80px' }}>MORA HIKING CLUB</h1>
        <div style={{ height: '300px' }} className="hike-cards">
          <div style={{ height: '300px', width: '300px' }} className="card">New hikes</div>
          <div style={{ height: '300px', width: '300px' }} className="card">Hikes</div>
          <div style={{ height: '300px', width: '300px' }} className="card"></div>
        </div>
      </header>

      {/* Content Section */}
      <section className="content">
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
    </div>
  );
};

export default Homescreen;
