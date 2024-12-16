import React from "react";
import beachIcon from "../assets/beachicon.png";
import shopIcon from "../assets/shopicon.png";

const Legend = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.9)", // Transparan putih
        borderRadius: "10px",
        padding: "10px 15px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontSize: "14px",
        color: "#333",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px 0",
          fontSize: "16px",
          color: "#20516d",
          textAlign: "center",
          borderBottom: "2px solid #00d9ff",
          paddingBottom: "5px",
        }}
      >
        Legend
      </h3>
      {/* Legend Items */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
        <img
          src={beachIcon}
          alt="Pantai"
          style={{ width: "24px", height: "24px", marginRight: "8px" }}
        />
        <span>= Pantai</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={shopIcon}
          alt="Restoran"
          style={{ width: "24px", height: "24px", marginRight: "8px" }}
        />
        <span>= Restoran</span>
      </div>
    </div>
  );
};

export default Legend;
