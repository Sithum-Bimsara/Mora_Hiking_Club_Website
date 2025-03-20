import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Hikes.css";

const Hikes = () => {
  const navigate = useNavigate();

  const handleHikeClick = (id) => {
    navigate(`/hike-details/${id}`); // Navigate to the HikeDetails page with the hike ID
  };

  return (
    <div className="hikes-container">
      <h1 style={{ fontSize: "50px" }} className="hikes-title">
        Hikes
      </h1>

      <div className="section">
        <h2>Available Hikes</h2>
        <div className="hike-card large" onClick={() => handleHikeClick(1)}>
          <div className="hike-image"></div>
          <div className="hike-info">
            <h3>Peacock Hill</h3>
            <p>
              Hiking is a healthy way of taking long, vigorous walks in nature
              for fun. Put on some sturdy shoes and bring along your water
              bottles — let's go hiking! We usually reserve the term 'hiking'
              for walks in the countryside.
            </p>
          </div>
        </div>
      </div>

      {/* Previous Hikes Section */}
      <div className="section">
        <h2>Previous Hikes</h2>
        <div className="previous-hikes">
          <div className="hike-card small" onClick={() => handleHikeClick(2)}>
            <div className="hike-image"></div>
          </div>
          <div className="hike-card small">
            <div className="hike-image"></div>
          </div>
          <div className="hike-card small">
            <div className="hike-image"></div>
          </div>
          <div className="hike-card small">
            <div className="hike-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hikes;