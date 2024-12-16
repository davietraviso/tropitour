import React, { useState } from "react";
import Sidebar from "./Sidebar";
import styles from "../css/BantuDataBaru.module.css";

const BantuDataBaru = () => {
  const [formData, setFormData] = useState({
    nama: "",
    subyek: "",
    koordinat: "",
    keterangan: "",
    foto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Data submitted successfully!");
  };

  return (
    <>
      <Sidebar />
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Bantu Data Baru</h2>
        <form onSubmit={handleSubmit}>
          {/* Nama */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Nama:</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          {/* Subyek */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Subyek:</label>
            <input
              type="text"
              name="subyek"
              value={formData.subyek}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          {/* Koordinat */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Koordinat:</label>
            <input
              type="text"
              name="koordinat"
              value={formData.koordinat}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          {/* Unggah Foto */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Unggah Foto:</label>
            <input
              type="file"
              name="foto"
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          {/* Keterangan */}
          <div className={styles.inputGroup}>
            <label className={styles.label}>Keterangan:</label>
            <textarea
              name="keterangan"
              value={formData.keterangan}
              onChange={handleChange}
              className={styles.textarea}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default BantuDataBaru;
