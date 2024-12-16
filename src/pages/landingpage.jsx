import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import bg1 from "../assets/landscape.png"
import tropilogo from '../assets/tropitour.png'
import Sidebar from '../components/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";


export const landingpage = () => {

const navigate = useNavigate();
const handleNavigateToMap  = () => {
    navigate("/tropitour-map"); 
};

const handleNavigateToAbout  = () => {
    navigate("/tentang-kami"); 
};
  return (
    <div>
        <Sidebar/>
        
        <section className='cont_main' style={{backgroundImage:`url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="penjelasan w-100 min-vh-100 ">
                <Container className='penjelasan_container' style={{display:'flex',alignItems:'center', justifyContent:'center'}} >
                    <div className="penjelasan_wrap" style={{marginTop:'50px'}}>
                        <div className="penjelasan_img" style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
                            <img src={tropilogo} alt="" style={{width:'560px', height:'auto'}}/>
                        </div>
                        <div className="penjelasan_sub" style={{textAlign:'center', fontSize:'25px', color:'#20516d'}}>
                            <p>
                            Rasakan keindahan pantai Tanjung Siambang dengan cara baru! <br /> Jelajahi setiap sudut dalam pengalaman 360° yang imersif bersama <strong>TROPITOUR.</strong>
                            </p>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div
                    className="tombol"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        height: "300px",
                        width: "100%",
                        color: "#101b3b",
                    }}
                    >
                    {/* First Col (Bottom Left) */}
                    <Col className='tombol_col hide-on-mobile' style={{ width: "fit-content" }}>
                        <div style={{ justifyItems: "start" }}>
                        <p
                            onClick={handleNavigateToAbout}
                            style={{
                            border: "2px solid #20516d",
                            textAlign: "center",
                            fontWeight: "bold",
                            padding: "10px",
                            width: "fit-content",
                            borderRadius: "25px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            backgroundColor: "transparent",
                            color: "#20516d",
                            }}
                            // Inline CSS for hover and active effects
                            onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#20516d";
                            e.target.style.color = "#fff";
                            e.target.style.boxShadow = "0 0 10px #20516d";
                            }}
                            onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "#20516d";
                            e.target.style.boxShadow = "none";
                            }}
                            onMouseDown={(e) => {
                            e.target.style.backgroundColor = "#20516d";
                            e.target.style.color = "#fff";
                            }}
                            onMouseUp={(e) => {
                            e.target.style.backgroundColor = "#20516d";
                            e.target.style.color = "#fff";
                            }}
                        >
                            TENTANG KAMI
                        </p>
                        </div>
                    </Col>

                    {/* Second Col (Bottom Right) */}
                    <Col className='tombol_col center-on-mobile' style={{ width: "fit-content" }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            }}>
                        <p
                            onClick={handleNavigateToMap}
                            style={{
                            border: "2px solid #20516d",
                            textAlign: "center",
                            fontWeight: "bold",
                            padding: "10px",
                            width: "fit-content",
                            borderRadius: "25px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            backgroundColor: "transparent",
                            color: "#20516d",
                            }}
                            // Inline CSS for hover and active effects
                            onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#20516d";
                            e.target.style.color = "#fff";
                            e.target.style.boxShadow = "0 0 10px #20516d";
                            }}
                            onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "#20516d";
                            e.target.style.boxShadow = "none";
                            }}
                            onMouseDown={(e) => {
                            e.target.style.backgroundColor = "#20516d";
                            e.target.style.color = "#fff";
                            }}
                            onMouseUp={(e) => {
                            e.target.style.backgroundColor = "#20516d";
                            e.target.style.color = "#fff";
                            }}
                        >
                            JELAJAHI SEKARANG
                        </p>
                        </div>
                    </Col>
                    </div>
                </Container>
            </div>
            
        </section>

    </div>
  )
}
