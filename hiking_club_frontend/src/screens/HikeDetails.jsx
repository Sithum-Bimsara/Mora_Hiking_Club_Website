import React from "react";
import "../styles/HikeDetails.css";
import img from "../assets/images/peacock-hill.jpg"
import { PersonX } from "react-bootstrap-icons";

const HikeDetails = () => {
  return (
    <div className="hikeDetail-card ">
      <img
        src={img}
        alt="Peacock Hill Hike"
        className="w-full h-60 object-cover rounded-md"
        
      />
      <div className="hikeDetail-info mt-4">
        <h3 className="text-xl font-bold">Peacock Hill</h3>
        <p className="text-gray-700 mt-2">
        If you are an avid hiker and hungry for the best panoramic views, Monaragala also known as Peacock Hill is definitely the place to be. Located just 45 mins away from our property, the peak of this hill is about 200 m above the city of Pussellawa and is an easy hike to conquer.
        Reach the top and you’ll be rewarded with one of the most amazing views in Sri Lanka. Take in the mesmerising view of Piduruthalagala, Ambuluwawa, Bible Rock, Gampola Town, Nawalapitiya Town, and Kotmale reservoir. The views are even better when the mist sets in bringing in a mystique vibe! Not to mention, it provides a beautiful backdrop for awesome photographs as well.
        </p>
        <div className="mt-4">
          <p className="font-medium">📅 Date: <span className="text-gray-600">April 15, 2025</span></p>
          <p className="font-medium">⏰ Time: <span className="text-gray-600">6:30 AM - 12:00 PM</span></p>
          <p className="font-medium">💲 Fee: <span className="text-gray-600">$15 per person</span></p>
        </div>
        <button className="mt-4 px-6 py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default HikeDetails;
