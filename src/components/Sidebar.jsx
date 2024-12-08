import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: isOpen ? 0 : "-250px",
          height: "100%",
          width: "250px",
          backgroundColor: "#101b3b",
          color: "#fff",
          transition: "left 0.3s ease",
          zIndex: 1000,
        }}
      >
        <div style={{ padding: "20px" }}>
          <h2 style={{marginTop:'50px'}}>Menu</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "15px" }}>Home</li>
            <li style={{ marginBottom: "15px" }}>About</li>
            <li style={{ marginBottom: "15px" }}>Contact</li>
          </ul>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 1100,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          
        }}
      >
        <i
          className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}
          style={{
            fontSize: "40px",
            color: isOpen ? "#fff" : "#20516d", // Inverts the color when the sidebar is open
          }}
        ></i>
      </button>
    </>
  );
};

export default Sidebar;
