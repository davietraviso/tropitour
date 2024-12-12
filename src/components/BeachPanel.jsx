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
      <div className="beach-panel-header">
        <h2>{selectedBeach?.name}</h2>
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
      </div>
      <div className="beach-panel-body">
        <p>{selectedBeach?.description}</p>
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

        {/* Open folder button */}
        <div className="open-folder">
          <a
            href="/setumu2/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="open-folder-btn"
          >
            Ayo cek 360 derajat nya!
          </a>
        </div>
      </div>
    </div>
  );
};


export default BeachPanel;
