import React, { useState } from "react";

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
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Bantu Data Baru
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Nama:</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Subyek:</label>
          <input
            type="text"
            name="subyek"
            value={formData.subyek}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Koordinat:</label>
          <input
            type="text"
            name="koordinat"
            value={formData.koordinat}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Unggah Foto:</label>
          <input
            type="file"
            name="foto"
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Keterangan:</label>
          <textarea
            name="keterangan"
            value={formData.keterangan}
            onChange={handleChange}
            rows="5"
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            backgroundColor: "#101b3b",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BantuDataBaru;
