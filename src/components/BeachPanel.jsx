import React, { useState } from "react";
import "../css/beachpanel.css";

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
          <button onClick={handlePrevious}>⬅️</button>
          <img
            src={selectedBeach?.images[currentImageIndex]}
            alt={selectedBeach?.name}
          />
          <button onClick={handleNext}>➡️</button>
        </div>

        
      </div>

    </div>
  );
};

export default BeachPanel;
