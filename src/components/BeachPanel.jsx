import React, { useState } from "react";
import "../css/beachpanel.css";
import one from '../assets/1.png';
import two from '../assets/2.png';

const BeachPanel = ({ selectedBeach, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedBeach.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedBeach.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`beach-panel ${selectedBeach ? "open" : ""}`}>
      {/* Panel Header */}
      <div className="beach-panel-header">
        <h2>{selectedBeach?.name}</h2>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>

      {/* Panel Body */}
      <div className="beach-panel-body">
        {/* Description */}
        <p className="beach-description">{selectedBeach?.description}</p>

        {/* Key Info */}
        <div className="key-info">
          <div className="info-item">📍 Location: {selectedBeach?.location}</div>
          <div className="info-item">🌡 Weather: {selectedBeach?.weather}</div>
          <div className="info-item">🏖 Popularity: {selectedBeach?.popularity}</div>
        </div>

        {/* Image Carousel */}
        <div className="image-carousel">
          <button className="carousel-btn" onClick={handlePrevious}>
            ⬅
          </button>
          <img
            src={selectedBeach?.images[currentImageIndex]}
            alt={selectedBeach?.name}
            className="carousel-image"
          />
          <button className="carousel-btn" onClick={handleNext}>
            ➡
          </button>
        </div>

        {/* Things To Do Section */}
        <div className="things-to-do">
          <h3>Things to Do 🗺</h3>
          <ul>
            <li>🏊 Swimming</li>
            <li>🚤 Boating</li>
            <li>🍴 Local Cuisine</li>
            <li>🌅 Sunset Watching</li>
          </ul>
        </div>

        {/* Fun Fact Box */}
        <div className="fun-fact">
          🌟 <strong>Fun Fact:</strong> This beach is known for its golden sands and rare sea turtles!
        </div>

        {/* Open 360 View Button */}
        <div className="open-folder">
          <a
            href="/setumu2/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="open-folder-btn"
          >
            🌐 Explore in 360°
          </a>
        </div>

        {/* Visit Now Button */}
        <div className="visit-now">
          <a
            href={selectedBeach?.direction} // Link to Google Map direction
            target="_blank"
            rel="noopener noreferrer"
            className="visit-now-btn"
          >
            📍 Visit Now!
          </a>
        </div>
      </div>
    </div>
  );
};



export default BeachPanel;
