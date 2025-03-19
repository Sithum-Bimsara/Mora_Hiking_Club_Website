import React, { useState, useEffect } from "react";
import "../styles/Slideshow.css";
import Arangala from "../assets/images/pastevents/Arangala.jpg";
import Cykel from "../assets/images/pastevents/Cykel.jpg";
import Galkothkanda from "../assets/images/pastevents/Galkothkanda.jpg";
import Hawagala from "../assets/images/pastevents/Hawagala.jpg";
import Hunnasgiriya from "../assets/images/pastevents/Hunnasgiriya.jpg";
import Manigala from "../assets/images/pastevents/Manigala.jpg";
import Namakdanne from "../assets/images/pastevents/Namakdanne.jpg";
import PeacockHill from "../assets/images/pastevents/PeacockHill.jpg";
import RappleRush from "../assets/images/pastevents/RappleRush.jpg";

const images = [Arangala, Cykel, Galkothkanda, Hawagala, Hunnasgiriya, Manigala,Namakdanne,PeacockHill,RappleRush];




const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="slideshow-container">
      <div className="slideshow">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}

        {/* Navigation buttons */}
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>

        {/* Dots Indicators */}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slideshow;
