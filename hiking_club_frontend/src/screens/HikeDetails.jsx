import React from "react";
import "../styles/HikeDetails.css";
import img from "../assets/images/peacock-hill.jpg";

const HikeDetails = () => {
  return (
    <div className="hikeDetail-container">
      <div className="hikeDetail-card">
        <img
          src={img}
          alt="Peacock Hill Hike"
          className="hikeDetail-image"
        />
        <div className="hikeDetail-info">
          <h3>Peacock Hill</h3>
          <p>
            If you are an avid hiker and hungry for the best panoramic views, Monaragala also known as Peacock Hill is definitely the place to be. Located just 45 mins away from our property, the peak of this hill is about 200 m above the city of Pussellawa and is an easy hike to conquer.
            Reach the top and you’ll be rewarded with one of the most amazing views in Sri Lanka. Take in the mesmerising view of Piduruthalagala, Ambuluwawa, Bible Rock, Gampola Town, Nawalapitiya Town, and Kotmale reservoir. The views are even better when the mist sets in bringing in a mystique vibe! Not to mention, it provides a beautiful backdrop for awesome photographs as well.
          </p>
          <div className="details">
            <p><span className="icon">📅</span> Date: <span className="text">April 15, 2025</span></p>
            <p><span className="icon">⏰</span> Time: <span className="text">6:30 AM - 12:00 PM</span></p>
            <p><span className="icon">💲</span> Fee: <span className="text">$15 per person</span></p>
          </div>
          <button className="register-button">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HikeDetails;