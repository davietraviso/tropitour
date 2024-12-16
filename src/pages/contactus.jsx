import React from "react";
import "../css/contactus.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const ContactUs = () => {
  return (
    <>
        <Sidebar/>
        <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
            <h1>Hubungi Kami</h1>
            <p>Kami siap membantu Anda dengan informasi wisata Pantai Tanjung Siambang!</p>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
            <div className="info-item">
            <FaEnvelope className="icon" />
            <p>Email: <a href="mailto:info@tanjungsiambang.com">info@tanjungsiambang.com</a></p>
            </div>
            <div className="info-item">
            <FaPhoneAlt className="icon" />
            <p>WhatsApp: <a href="tel:+6281234567890">+62 812-3456-7890</a></p>
            </div>
            <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <p>Lokasi: Pulau Dompak, Tanjungpinang, Kepulauan Riau</p>
            </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form" style={{marginBottom:'40px'}}>
            <h2>Kirim Pesan</h2>
            <form>
            <div className="form-group">
                <label htmlFor="email">Email Anda</label>
                <input type="email" id="email" placeholder="Masukkan email Anda" required />
            </div>
            <div className="form-group">
                <label htmlFor="message">Pesan Anda</label>
                <textarea id="message" rows="5" placeholder="Tulis pesan Anda di sini..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">
                <FaPaperPlane className="btn-icon" /> Kirim Pesan
            </button>
            </form>
        </div>

        {/* Footer */}
        <footer className="contact-footer">
            <p>&copy; 2024 Virtual Tour Tanjung Siambang | Hubungi kami kapan saja!</p>
        </footer>
        </div>
    
    </>
  );
};

export default ContactUs;
