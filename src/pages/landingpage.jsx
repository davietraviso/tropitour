import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import bg1 from "../assets/landscape.png"
import tropilogo from '../assets/tropitour.png'
import Sidebar from '../components/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import img from '../assets/greedy.png'


export const landingpage = () => {

const navigate = useNavigate();
const handleNavigateToMap  = () => {
    navigate("/tropitour-map"); 
};

const handleNavigateToAbout  = () => {
    navigate("/tentang-kami"); 
};

const tours = [
    { id: 1, title: "Pantai Mutun", location: "Kab. Lampung Selatan", image: <img src={img} alt="" /> },
    { id: 2, title: "Pantai Trikora", location: "Kab. Bintan", image: img },
    { id: 3, title: "Pantai Nongsa", location: "Kota Batam", image: img },
    { id: 4, title: "Pantai Tanjung Siambang", location: "Pulau Dompak", image: img }
  ];

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

        {/* Section for Virtual Tours */}
      <section className="tour-section" style={{ backgroundColor: "#f0f8ff", padding: "50px 0" }}>
      <Container>
        <h2 style={{ textAlign: "center", color: "#20516d", marginBottom: "30px" }}>Daftar Virtual Tour</h2>
        <Row>
          {tours.map((tour) => (
            <Col key={tour.id} md={3} className="mb-4">
              <Card style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>
                <Card.Img variant="top" src={tour.img} alt={tour.title} style={{ borderRadius: "10px 10px 0 0" }} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "18px", fontWeight: "bold", color: "#20516d" }}>{tour.title}</Card.Title>
                  <Card.Text style={{ fontSize: "14px", color: "#666" }}>{tour.location}</Card.Text>
                  <Button variant="primary" style={{ backgroundColor: "#20516d", borderColor: "#20516d" }}>Lihat Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    </div>
  )
}
