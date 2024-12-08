import React, { useState } from "react";
import BeachPanel from "../components/BeachPanel";
import beachIcon from "../assets/beachicon.png"; // Example path for the beach icon
import beachimg from "../assets/beach.png"
import { Container } from "react-bootstrap";

export const map = () => {
  const [selectedBeach, setSelectedBeach] = useState(null);

  // Toggle panel when the beach icon is clicked
  const handleBeachClick = (beach) => {
    if (selectedBeach && selectedBeach.name === beach.name) {
      setSelectedBeach(null); // Close panel if the same beach is clicked again
    } else {
      setSelectedBeach(beach); // Open panel for the clicked beach
    }
  };
  

  const beaches = [
    {
      name: "Pantai Tanjung Siambang",
      description: "A beautiful beach with white sands.",
      images: ["https://via.placeholder.com/300x200"],
      buttonText: "Ayo cek 360 derajat nya!",
      x: "3%", // Horizontal position
      y: "30%", // Vertical position
    },
    {
      name: "Beach B",
      description: "A secluded beach with clear waters.",
      images: ["https://via.placeholder.com/300x200"],
      x: "70%", // Horizontal position
      y: "75%", // Vertical position
    },
  ];
  

  const handleIconClick = (beach) => {
    setSelectedBeach(beach);
  };

  const handleClosePanel = () => {
    setSelectedBeach(null);
  };

  return (
    <div>
        <section>
            <div className="penjelasan w-100 min-vh-100"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage: `url(${beachimg})`, // Correct syntax
                    backgroundSize: "cover",           // Ensures the image covers the whole container
                    backgroundPosition: "center",      // Centers the background image
                    height: "100vh",                   // Makes the container full height
                }}>
                <Container className="penjelasan_container">
                    {/* Map Section */}
                    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
                        {/* Example beach icons */}
                        {beaches.map((beach, index) => (
                            <button
                                key={index}
                                className="beach-icon"
                                style={{
                                position: "absolute",
                                top: beach.y, // Use the y-coordinate
                                left: beach.x, // Use the x-coordinate
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                }}
                                onClick={() => handleBeachClick(beach)}
                            >
                                <img
                                src={beachIcon}
                                alt={beach.name}
                                style={{ width: "90px", height: "70px" }}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Side Panel */}
                    <BeachPanel
                        selectedBeach={selectedBeach}
                        onClose={() => setSelectedBeach(null)}
                    />
                </Container>
            </div>

            {/* Side Panel */}
            <BeachPanel selectedBeach={selectedBeach} onClose={handleClosePanel} />
        </section>
    </div>
  );
};
