import React, { useState } from "react";
import BeachPanel from "../components/BeachPanel";
import beachIcon from "../assets/beachicon.png"; // Example path for the beach icon
import beachimg from "../assets/beach.png"
import shopIcon from "../assets/shopicon.png"
import { Container } from "react-bootstrap";
import Sidebar from "../components/Sidebar";

export const map = () => {
  const [selectedBeach, setSelectedBeach] = useState(null);

  // Toggle panel when the beach icon is clicked
  const handleBeachClick = (beach) => {
    if (selectedBeach && selectedBeach.name === beach.name) {
      setSelectedBeach(null); // Close panel if the same beach is clicked again
      resetViewport(); // Restore pinch-to-zoom capability
    } else {
      setSelectedBeach(beach); // Open panel for the clicked beach
      resetZoom(); // Reset zoom when a panel opens
    }
  };
  
  const resetZoom = () => {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    metaViewport.setAttribute(
      "content",
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    );
  };
  
  const resetViewport = () => {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    metaViewport.setAttribute(
      "content",
      "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
    );
  };
  

  const handleClosePanel = () => {
    setSelectedBeach(null);
    resetViewport();
  };

  return (
    <div>
        <Sidebar/>
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
                <div className="beach-banner" >
                  <h1 style={{paddingTop:'15px'}}> 
                    Selamat Datang di<br />
                    <span>Area Wisata Tanjung Siambang</span>
                  </h1>
                </div>

                <Container className="penjelasan_container2 ">
                    {/* Map Section */}
                    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
                        {/* Individual Beach Icons */}
                        <button
                          className="beach-icon beach-tanjung-siambang"
                          onClick={() =>
                            handleBeachClick({
                              name: "Pantai Tanjung Siambang",
                              description: "A beautiful beach with white sands.",
                              images: ["https://via.placeholder.com/300x200"],
                              buttonText: "Ayo cek 360 derajat nya!",
                              location: "puta"
                            })
                          }
                        >
                          <img 
                            className="beachIcon"
                            src={beachIcon}
                            alt="Pantai Tanjung Siambang"
                            style={{ width: "90px", height: "70px" }}
                          />
                        </button>

                        <button
                          className="beach-icon beach-b"
                          onClick={() =>
                            handleBeachClick({
                              name: "Beach B",
                              description: "A secluded beach with clear waters.",
                              images: ["https://via.placeholder.com/300x200"],
                            })
                          }
                        >
                          <img
                            className="beachIcon"
                            src={beachIcon}
                            alt="Beach B"
                            style={{ width: "90px", height: "70px" }}
                          />
                        </button>

                        <button
                          className="beach-icon beach-c"
                          onClick={() =>
                            handleBeachClick({
                              name: "Beach C",
                              description: "A secluded beach with clear waters.",
                              images: ["https://via.placeholder.com/300x200"],
                            })
                          }
                        >
                          <img
                            className="beachIcon"
                            src={beachIcon}
                            alt="Beach C"
                            style={{ width: "90px", height: "70px" }}
                          />
                        </button>

                        <button
                          className="beach-icon beach-d"
                          onClick={() =>
                            handleBeachClick({
                              name: "Beach D",
                              description: "A secluded beach with clear waters.",
                              images: ["https://via.placeholder.com/300x200"],
                            })
                          }
                        >
                          <img
                            className="beachIcon"
                            src={beachIcon}
                            alt="Beach D"
                            style={{ width: "90px", height: "70px" }}
                          />
                        </button>

                        <button
                          className="beach-icon beach-e"
                          onClick={() =>
                            handleBeachClick({
                              name: "Beach E",
                              description: "A secluded beach with clear waters.",
                              images: ["https://via.placeholder.com/300x200"],
                            })
                          }
                        >
                          <img
                            className="beachIcon"
                            src={beachIcon}
                            alt="Beach E"
                            style={{ width: "90px", height: "70px" }}
                          />
                        </button>

                        <button
                          className="beach-icon beach-f"
                          onClick={() =>
                            handleBeachClick({
                              name: "Beach F",
                              description: "A secluded beach with clear waters.",
                              images: ["https://via.placeholder.com/300x200"],
                            })
                          }
                        >
                          <img
                            className="beachIcon"
                            src={beachIcon}
                            alt="Beach F"
                            style={{ width: "90px", height: "70px" }}
                          />
                        </button>

                        <button
                          className="beach-icon beach-g"
                          onClick={() =>
                            handleBeachClick({
                              name: "Beach G",
                              description: "A secluded beach with clear waters.",
                              images: ["https://via.placeholder.com/300x200"],
                            })
                          }
                        >
                          <img
                            className="beachIcon"
                            src={beachIcon}
                            alt="Beach G"
                            style={{ width: "90px", height: "70px" }}
                          />
                        </button>

                        <button
                          className="beach-icon shop-a"
                          onClick={() =>
                            handleBeachClick({
                              name: "Shop A",
                              description: "A secluded beach with clear waters.",
                              images: ["https://via.placeholder.com/300x200"],
                            })
                          }
                        >
                          <img
                            className="beachIcon"
                            src={shopIcon}
                            alt="Shop A"
                            style={{ width: "90px", height: "70px" }}
                          />
                        </button>
                    </div>

                    {/* Side Panel */}
                    <BeachPanel
                        selectedBeach={selectedBeach}
                        onClose={handleClosePanel}
                    />
                </Container>
            </div>      
        </section>
    </div>
  );
};
