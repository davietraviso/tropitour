import React from "react";
import "../css/aboutus.css"; // Import stylesheet for styling
import { FaUniversity, FaMapMarkerAlt, FaLightbulb, FaHandsHelping } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const AboutUs = () => {
  return (
    <>
        <Sidebar/>
        <div className="about-container">
        <div className="about-header">
            <h1 className="title">Tentang Kami</h1>
            <p className="subtitle">Virtual Tour Tanjung Siambang</p>
        </div>

        <div className="about-content">
            <div className="info-section">
            <FaUniversity className="icon" />
            <h2>Kami Siapa?</h2>
            <p>
                Kami adalah mahasiswa <strong>Universitas Maritim Raja Ali Haji</strong> (UMRAH),
                dari <strong>Fakultas Teknik & Teknologi Kemaritiman</strong> (FTTK). Kami ditugaskan
                dalam mata kuliah <strong>Masyarakat Cerdas</strong> yang berfokus pada penerapan teknologi.
            </p>
            </div>

            <div className="info-section">
            <FaMapMarkerAlt className="icon" />
            <h2>Lokasi & Area Wisata</h2>
            <p>
                Tugas ini berlokasi di <strong>Pulau Dompak, Tanjungpinang</strong>, Kepulauan Riau, Indonesia.
                Kami mengambil area wisata <strong>Pantai Tanjung Siambang</strong>, sebuah destinasi yang indah namun belum banyak terekspos.
            </p>
            </div>

            <div className="info-section">
            <FaLightbulb className="icon" />
            <h2>Tujuan Kami</h2>
            <p>
                Berdasarkan laporan dan informasi dari pihak setempat dan warga mengenai masalah turisme,
                kami mencoba memberikan solusi dengan ide <strong>Virtual Tour</strong>. Dengan ini, calon
                pengunjung dapat melihat kondisi pantai dalam format <strong>360 derajat</strong> sebelum berkunjung.
            </p>
            </div>

            <div className="info-section">
            <FaHandsHelping className="icon" />
            <h2>Dukungan & Kolaborasi</h2>
            <p>
                Para pelaku usaha dan pengelola wisata di area ini sangat mendukung ide kami. Kami berharap
                inovasi ini dapat menarik lebih banyak pengunjung dan membantu perkembangan ekonomi lokal.
            </p>
            </div>
        </div>

        <footer className="about-footer">
            <p>🌊 &copy; 2024 Virtual Tour Tanjung Siambang | Dikerjakan oleh Mahasiswa UMRAH</p>
        </footer>
        </div>
    
    </>
  );
};

export default AboutUs;
