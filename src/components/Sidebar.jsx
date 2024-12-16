import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhone, FaPlus } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const getPageColor = () => {
    switch (location.pathname) {
      case "/tentang-kami":
      case "/kontak":
        return "#fff"; // Warna putih untuk halaman spesifik
      default:
        return "#20516d"; // Biru tua sebagai warna default
    }
  };

  const menuItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Tentang Kami", path: "/tentang-kami", icon: <FaInfoCircle /> },
    { name: "Hubungi Kami", path: "/kontak", icon: <FaPhone /> },
    { name: "Bantu Data Baru", path: "/bantu-data-baru", icon: <FaPlus /> },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: isOpen ? 0 : "-280px",
          height: "100%",
          width: "250px",
          background: "linear-gradient(to bottom, #0093E9, #80D0C7)",
          color: "#fff",
          transition: "left 0.3s ease",
          zIndex: 1000,
          boxShadow: isOpen ? "5px 0 10px rgba(0, 0, 0, 0.2)" : "none",
        }}
      >
        <div style={{ padding: "20px" }}>
          <h2 style={{ textAlign: "center", margin: "20px 0", color:'whitesmoke' }}>🌴 Menu</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {menuItems.map((item, index) => (
              <li key={index} style={{ margin: "15px 0" }}>
                <Link
                  to={item.path}
                  style={{
                    textDecoration: "none",
                    color: location.pathname === item.path ? "#FFDD67" : "#fff",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "18px",
                    transition: "all 0.3s",
                  }}
                >
                  <span style={{ marginRight: "10px", fontSize: "20px" }}>
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              </li>
            ))}
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
          background: "rgba(0, 147, 233, 0.7)",
          border: "none",
          padding: "10px",
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
          transition: "transform 0.2s",
        }}
      >
        <i
          className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}
          style={{
            fontSize: "24px",
            color: "#fff",
          }}
        ></i>
      </button>
    </>
  );
};

export default Sidebar;
