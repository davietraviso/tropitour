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

        {/* Add a button to open the HTML file */}
        <div className="open-folder">
          <a
            href="/setumu2/index.html"
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Prevents security vulnerabilities
            className="open-folder-btn"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "#20516d",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
              marginTop: "20px",
              textAlign: "center",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#101b3b";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#20516d";
            }}
          >
            Open Folder
          </a>
        </div>

        
      </div>

    </div>
  );
};

export default BeachPanel;
