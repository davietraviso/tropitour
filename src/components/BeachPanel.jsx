import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
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
        <h2 className="font-panel">{selectedBeach?.name}</h2>
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
          <div className="info-item">📍 Lokasi: {selectedBeach?.location}</div>
          {/* <div className="info-item">🌡 Weather: {selectedBeach?.weather}</div> */}
          <div className="info-item">🏖 Popularitas: {selectedBeach?.popularity}</div>
        </div>

        {/* Image Carousel */}
        <div className="image-carousel">
          <Carousel>
            {selectedBeach?.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="carousel-image"
                  style={{
                    // width: "100%",
                    height: "200px",
                    width: "300px",
                    objectFit: "cover",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Things To Do Section
        <div className="things-to-do">
          <h3>Things to Do </h3>
          <ul>
            <li>🏊 Swimming</li>
            <li>🚤 Boating</li>
            <li>🍴 Local Cuisine</li>
            <li>🌅 Sunset Watching</li>
          </ul>
        </div> */}

        {/* Things to do */}
        <div className="things-to-do">
          <p><strong>Things to Do 🗺:</strong></p>
          <ul>
            {selectedBeach?.thingsToDo?.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
          
        </div>

        {/* Fun Fact Box */}
        <div className="fun-fact">
          🌟 <p><strong>Fun Fact:</strong> {selectedBeach?.funFact}</p>
        </div>

        {/* Links */}
        {/* <div className="beach-links">
          <a href={selectedBeach?.link360} target="_blank" rel="noopener noreferrer">
          🌐 Explore in 360°
          </a>
          <a href={selectedBeach?.visitNow} target="_blank" rel="noopener noreferrer">
          📍 Visit Now!
          </a>
        </div> */}

        {/* Open 360 View Button */}
        <div className="open-folder">
          <a href={selectedBeach?.link360} className="open-folder-btn" target="_blank" rel="noopener noreferrer">
          🌐 Jelajahi secara 360°
          </a>
        </div>

        {/* Visit Now Button */}
        <div className="visit-now">
         <a href={selectedBeach?.visitNow} className="visit-now-btn" target="_blank" rel="noopener noreferrer">
          📍 Kunjungi Sekarang!
          </a>
        </div>

        
      </div>
    </div>
  );
};



export default BeachPanel;
