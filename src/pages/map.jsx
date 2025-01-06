import React, { useState } from "react";
import BeachPanel from "../components/BeachPanel";
import beachIcon from "../assets/beachicon.png"; // Example path for the beach icon
import beachimg from "../assets/beach.png"
import shopIcon from "../assets/shopicon.png"
import { Container } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import Legend from "../components/MapLegend";

import berkah1 from "../assets/pantai/berkah1.jpg"
import berkah2 from "../assets/pantai/berkah2.png"
import berkah3 from "../assets/pantai/berkah3.png"

import gaseng1 from "../assets/pantai/gaseng1.jpg"
import gaseng2 from "../assets/pantai/gaseng2.jpg"
import gaseng3 from "../assets/pantai/gaseng3.jpg"
import gaseng4 from "../assets/pantai/gaseng4.jpg"

import ica1 from "../assets/pantai/ica1.png"
import ica2 from "../assets/pantai/ica2.jpg"
import ica3 from "../assets/pantai/ica3.jpg"
import ica4 from "../assets/pantai/ica4.jpg"
import ica5 from "../assets/pantai/ica5.jpg"
import ica6 from "../assets/pantai/ica6.jpg"

import nabila1 from "../assets/pantai/nabila1.jpg"
import nabila2 from "../assets/pantai/nabila2.jpg"
import nabila3 from "../assets/pantai/nabila3.jpg"
import nabila4 from "../assets/pantai/nabila4.jpg"
import nabila5 from "../assets/pantai/nabila5.jpg"
import nabila6 from "../assets/pantai/nabila6.jpg"

import paser1 from "../assets/pantai/paser1.png"
import paser2 from "../assets/pantai/paser2.png"
import paser3 from "../assets/pantai/paser3.png"
import paser4 from "../assets/pantai/paser4.png"

import sejiwa1 from "../assets/pantai/sejiwa1.jpg"
import sejiwa2 from "../assets/pantai/sejiwa2.jpg"
import sejiwa3 from "../assets/pantai/sejiwa3.jpg"
import sejiwa4 from "../assets/pantai/sejiwa4.jpg"
import sejiwa5 from "../assets/pantai/sejiwa5.jpg"
import sejiwa6 from "../assets/pantai/sejiwa6.jpg"

import sejuta1 from "../assets/pantai/sejuta1.jpg"
import sejuta2 from "../assets/pantai/sejuta2.png"
import sejuta3 from "../assets/pantai/sejuta3.png"
import sejuta4 from "../assets/pantai/sejuta4.jpg"

import setumu1 from "../assets/pantai/setumu1.jpg"
import setumu2 from "../assets/pantai/setumu2.jpg"
import setumu3 from "../assets/pantai/setumu3.png"
import setumu4 from "../assets/pantai/setumu4.png"
import setumu5 from "../assets/pantai/setumu5.png"
import setumu6 from "../assets/pantai/setumu6.png"


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
        <Legend/>
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
                              name: "Pantai Tanjung Setumu",
                              description: "Pantai paling populer di pulau Dompak yang cocok menjadi tempat melihat sunset. 🌅",
                              images: [setumu1, setumu2, setumu3, setumu4, setumu5, setumu6],
                              location: "Tanjung Siambang, Dompak",
                              weather: "Sunny",
                              // popularity: "Tinggi",
                              thingsToDo: ["🏊‍♂️ Berenang", "🥘 Bersantap kuliner", "🌅 Lihat sunset"],
                              funFact: "Jalan perjalanan ke sini memang kurang menyenangkan, namun pemandangannya enggak berkhianat deh! Jangan lupa kunjungi restorannya, ya!",
                              link360: "/setumu2/index.html",
                              visitNow: "https://maps.app.goo.gl/KBgxGrf1DRmQUSvB6",
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
                              name: "Pantai Sejiwa",
                              description: "Pantai mini dengan popularitas tinggi.",
                              images: [sejiwa1, sejiwa2, sejiwa3, sejiwa4, sejiwa5, sejiwa6],
                              location: "Tanjung Siambang, Dompak",
                              weather: "Sunny",
                              // popularity: "Tinggi",
                              thingsToDo: ["🧘‍♀️ Bersantai", "☕ Ngopi", "🎤 Karaokean", "🛶 Mendayung Kano"],
                              funFact: "Walau pantainya kecil, tapi tiap weekend selalu dibooking lho! Jadi yang hendak berkunjung, hendaklah berkabar dulu ya!",
                              link360: "/sejiwa/index.html",
                              visitNow: "https://maps.app.goo.gl/4iC353iz36fnqerX6",
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
                              name: "Pantai Nabila",
                              description: "Pantai dengan langganan tempat untuk buka bersama saat bulan Ramadhan.",
                              images: [nabila1, nabila2, nabila3, nabila4, nabila5, nabila6],
                              location: "Tanjung Siambang, Dompak",
                              weather: "Sunny",
                              // popularity: "Sedang",
                              thingsToDo: ["🏊‍♂️ Berenang",  "🧘‍♀️ Bersantai", "⚽ Bermain Bola"],
                              funFact: "Satu-satunya pantai di Tanjung Siambang yang memiliki lapangan!",
                              link360: "/nabila/index.html",
                              visitNow: "https://maps.app.goo.gl/T3JUAi1hUrRYVi8n6",
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
                              name: "Pantai Pase Putih",
                              description: "Pantai strategis yang menjiwai namanya sendiri.",
                              images: [paser1, paser2, paser3, paser4],
                              location: "Tanjung Siambang, Dompak",
                              weather: "Sunny",
                              // popularity: "Tinggi",
                              thingsToDo: ["🧘‍♀️ Bersantai", "🎣 Memancing", "🏊‍♂️ Berenang", "🥘 Santap Kuliner"],
                              funFact: "Sesuai namanya, pasir di pantai ini sangat putih lho! Dan juga ada restoran di sini.",
                              link360: "/paseputih/index.html",
                              visitNow: "https://maps.app.goo.gl/NYN5nHx6phB6WYxPA",
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
                              name: "Pantai Berkah",
                              description: "Pantai mini namun super bersih.",
                              images: [berkah1, berkah2, berkah3],
                              location: "Tanjung Siambang, Dompak",
                              weather: "Sunny",
                              // popularity: "Sedang",
                              thingsToDo: ["🧘‍♀️ Bersantai", "🏊‍♂️ Berenang"],
                              funFact: "Pengelola pantai di sini tinggal di pantai nya juga, jadi kalau ada keperluan, sangat fast respond!",
                              link360: "/berkah/index.html",
                              visitNow: "https://maps.app.goo.gl/rJuccy5ddshJuzRD9",
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
                              name: "Pantai Sejuta Pasir",
                              description: "Pantai dengan pondok-pondok paling estetik.",
                              images: [sejuta1, sejuta2, sejuta3, sejuta4],
                              location: "Tanjung Siambang, Dompak",
                              weather: "Sunny",
                              // popularity: "Sedang",
                              thingsToDo: ["🧘‍♀️ Bersantai", "🏊‍♂️ Berenang"],
                              funFact: "Pondok di sini sangat rapi penempatannya, sehingga terlihat lebih menarik.",
                              link360: "/sejuta/index.html",
                              visitNow: "https://maps.app.goo.gl/1d1vuEk7FbmCj9J79",
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
                              name: "Pantai Gaseng",
                              description: "Pantai yang sangat tertata rapi dan penuh akan kejutan.",
                              images: [gaseng1, gaseng2, gaseng3, gaseng4],
                              location: "Tanjung Siambang, Dompak",
                              weather: "Sunny",
                              // popularity: "Tinggi",
                              thingsToDo: ["🎉 Gathering", "🏊‍♂️ Berenang", "🧘‍♀️ Bersantai"],
                              funFact: "Dengan area yang cukup luas, pantai ini cocok menjadi lokasi gathering ramai-ramai.",
                              link360: "/gaseng/index.html",
                              visitNow: "https://maps.app.goo.gl/8kaWaX68VLYvKCFw7",
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
                              name: "Rumah Makan Ica",
                              description: "Restoran Seafood yang menawarkan bermacam-macam kuliner.",
                              location: "yyo mama",
                              images: [ica1, ica2, ica3, ica4, ica5, ica6],
                              location: "Tanjung Siambang, Dompak",
                              weather: "Sunny",
                              // popularity: "Medium",
                              thingsToDo: ["🥘 Santap Kuliner", "🧘‍♀️ Bersantai" ],
                              funFact: "This beach is named after the Sejiwa coral formation.",
                              link360: "/rm_ica2/index.html",
                              visitNow: "https://maps.app.goo.gl/Mm7B7pXGMHUC2aci6",
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
