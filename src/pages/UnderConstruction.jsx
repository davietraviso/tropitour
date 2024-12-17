import React from "react";
import beachIcon from "../assets/tropitour.png";
import umbrellaIcon from "../assets/umbrella.png";
import starfishIcon from "../assets/starfish.png";
import Sidebar from "../components/Sidebar";

const UnderConstruction = () => {
  return (
    <>
    <Sidebar/>
        <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#f4f9ff",
        backgroundImage:
          "linear-gradient(to bottom, #dff5ff, #a3e4f8, #67c9e8)",
        color: "#20516d",
        textAlign: "center",
        padding: "0 20px",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      {/* Main Content */}
      <div>
        <img
          src={beachIcon}
          alt="Beach Icon"
          style={{
            width: "300px",
            marginBottom: "20px",
            // animation: "float 3s ease-in-out infinite",
          }}
        />
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "10px",
          }}
        >
          Maaf, Website Sedang Dalam Pengembangan
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "30px",
          }}
        >
          Kami sedang berusaha memberikan pengalaman terbaik untuk Anda!
        </p>
      </div>

      {/* Decorative Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <img
          src={umbrellaIcon}
          alt="Umbrella Icon"
          style={{
            width: "80px",
            animation: "float 3.5s ease-in-out infinite",
          }}
        />
        <img
          src={starfishIcon}
          alt="Starfish Icon"
          style={{
            width: "70px",
            animation: "float 3.5s ease-in-out infinite",
          }}
        />
      </div>

      {/* Responsive CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 1.5rem;
            }

            p {
              font-size: 1rem;
            }

            img {
              width: 60px;
            }
          }
        `}
      </style>
    </div>
    </>

    
  );
};

export default UnderConstruction;
