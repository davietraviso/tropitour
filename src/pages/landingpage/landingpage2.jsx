import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import bg1 from "./img/360-earth.png";
import tropilogo from "../../assets/tropitour.png";
import Sidebar from "../../components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/animate.css"
import "./css/owl.carousel.min.css"
import "./css/all.css"
import "./css/flaticon.css"
import "./css/themify-icons.css"
import "./css/nice-select.css"
import "./css/magnific-popup.css"
import "./css/slick.css"
import "./css/style.css"
import aboutimg from "./img/about_img.png"
import three_1 from "./img/360_1.png"
import three_2 from "./img/360_2.png"
import three_3 from "./img/360_3.png"
import three_4 from "./img/360_4.png"
import sejiwa1 from "./img/pantai/sejiwa1.jpg"
import paser2 from "./img/pantai/paser2.png"
import gaseng3 from "./img/pantai/gaseng3.jpg"
import setumu5 from "./img/pantai/setumu5.png"
import plase from "./img/plase_details_1.png"
import pleas_beach from "./img/pleas_beach.png"
import overlay from "./img/overlay_2.png"

export const LandingPage2 = () => {
  const navigate = useNavigate();

  const handleNavigateToMap = () => {
    navigate("/tropitour-map");
  };


  return (
    <div>
      <Sidebar/>
      <header className="main_menu home_menu">
        <Container>
          <Row className="align-items-center">
            <Col lg={12}>
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">
                  <img
                    style={{ width: "110px", height: "auto" }}
                    src={tropilogo}
                    alt="logo"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="menu_icon">
                    <i className="fas fa-bars"></i>
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse main-menu-item"
                  id="navbarSupportedContent"
                >
                  {/* Add navigation links here */}
                </div>
                <Button
                  className="btn_1 d-none d-lg-block"
                  style={{ margin: "10px" }}
                  onClick={handleNavigateToMap}
                >
                  Eksplorasi Sekarang
                </Button>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>

      <section className="banner_part">
        <Container style={{ paddingTop: "50px" }}>
          <Row className="row_banner align-items-center">
            <Col lg={7}>
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h5>Ayo Eksplorasi Virtual</h5>
                  <h1>Ragam Pantai di Tanjung Siambang</h1>
                </div>
              </div>
            </Col>
            <Col
              lg={5}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img src={bg1} className="earth" alt="360-earth" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="feature_part padding_top">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7">
              <div className="feature_img">
                <img src={aboutimg} alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="feature_part_text">
                <img
                  src={three_1}
                  style={{ width: "80px", height: "auto" }}
                  alt="#"
                />
                <h2>Tropitour</h2>
                <p>
                  Memberikan anda pengalaman baru dalam mengunjungi tempat wisata
                  anda, sekaligus memberikan pilihan spot wisata yang dapat dijelajahi
                  sepuasnya.
                </p>
                <span>Kapan lagi dapat menikmati virtual tour?</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tour_package section_padding">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="section_tittle text-center">
                <img
                  src={three_2}
                  style={{ width: "80px", height: "auto" }}
                  alt="#"
                />
                <h2>Spot Wisata Populer</h2>
                <p>
                  Kunjungi Pantai-Pantai di Tanjung Siambang, Tanjungpinang, Kepulauan
                  Riau <br />
                  Dan nikmati sensasi liburan yang tak terlupakan.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6">
              <div className="tour_package_cotent owl-carousel">
                <div className="single_tour_package">
                  <img
                    src={sejiwa1}
                    style={{ width: "400px", height: "auto" }}
                    alt=""
                  />
                  <div className="tour_pack_content">
                    <h4>Pantai Sejiwa</h4>
                    <p>Pantai mini namun ramai pengunjung.</p>
                    <div className="tour_content_rating">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                      </ul>
                      <a href="/sejiwa/index.html" className="btn1">
                        Kunjungi Sekarang
                      </a>
                    </div>
                  </div>
                </div>
                <div className="single_tour_package">
                  <img
                    src={paser2}
                    style={{ width: "400px", height: "auto" }}
                    alt=""
                  />
                  <div className="tour_pack_content">
                    <h4>Pantai Pase Putih</h4>
                    <p>Sesuaikan dengan namanya, pantai ini memiliki pasir yang sangat putih.</p>
                    <div className="tour_content_rating">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                      </ul>
                      <a href="/paseputih/index.html" className="btn1">
                        Kunjungi Sekarang
                      </a>
                    </div>
                  </div>
                </div>
                <div className="single_tour_package">
                  <img
                    src={gaseng3}
                    style={{ width: "400px", height: "auto" }}
                    alt=""
                  />
                  <div className="tour_pack_content">
                    <h4>Pantai Gasing</h4>
                    <p>Pantai yang luas, nan cocok dijadikan lokasi acara.</p>
                    <div className="tour_content_rating">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                      </ul>
                      <a href="/gasing/index.html" className="btn1">
                        Kunjungi Sekarang
                      </a>
                    </div>
                  </div>
                </div>
                <div className="single_tour_package">
                  <img
                    src={setumu5}
                    style={{ width: "400px", height: "auto" }}
                    alt=""
                  />
                  <div className="tour_pack_content">
                    <h4>Pantai Setumu</h4>
                    <p>
                      Primadona wisata pantai di Pulau Dompak. <br />
                      Akan tau saat anda mengunjunginya.
                    </p>
                    <div className="tour_content_rating">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-star"></i>
                          </a>
                        </li>
                      </ul>
                      <a href="/setumu2/index.html" className="btn1">
                        Kunjungi Sekarang
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xl-3 offset-lg-1 col-sm-6">
              <div className="tour_pack_content">
                <img
                  src={three_3}
                  style={{ width: "80px", height: "auto" }}
                  alt="#"
                />
                <h2>360 Derajat</h2>
                <p>
                  Mau berkunjung tapi terlalu banyak pilihan? <br />
                  Atau pilih-pilih? <br />
                  Coba virtual tour kami sekarang
                </p>
                <a onClick={handleNavigateToMap} className="btn_1">
                  Ayo Coba
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="place_details section_padding">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-md-6 col-lg-6">
              <div className="place_detauls_text">
                <div className="row justify-content-center">
                  <div className="col-lg-8 col-xl-6">
                    <div className="place_details_content">
                      <img
                        src={three_4}
                        style={{ width: "80px", height: "auto" }}
                        alt="#"
                      />
                      <h2>Nikmati Keindahan Pantai Pulau Dompak Secara Virtual!</h2>
                      <p>
                        Dengan teknologi virtual tour 360°, kami membawa keajaiban
                        pantai-pantai ini langsung ke layar Anda. Dari pasir putih yang
                        halus hingga air laut yang jernih, rasakan pengalaman
                        seolah-olah Anda sedang berjalan di sepanjang garis pantai.
                      </p>
                      <span>
                        Ciptakan Kenangan Tak Terlupakan, Mulai dari Kunjungan Virtual
                        ut
                      </span>
                    </div>
                  </div>
                </div>
                <img src={plase} alt="#" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="place_details_img">
                <img src={pleas_beach} alt="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="view_all_btn">
          <a onClick={handleNavigateToMap} className="view_btn">
            Lihat Semuanya
          </a>
        </div>
      </section>

      <section className="cta_part section_padding">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 col-xl-7">
              <div className="cta_text text-center">
                <h5>Bergabung dengan Newsletter Kami</h5>
                <h2>
                  Mari Berlangganan untuk <br />
                  Mendapatkan Informasi Terbaru
                </h2>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan alamat email"
                    aria-label="Recipient's username with two button addons"
                    aria-describedby="button-addon4"
                  />
                  <div className="input-group-append" id="button-addon4">
                    <a href="#" className="subs_btn">
                      Langganan Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Additional sections here */}

      <footer className="footer_part">
        <div className="container">
          <div className="row">
            <div className="col-sm-7 col-lg-6">
              <div className="single_footer_part">
                <h4>Tentang Tropitour</h4>
                <p>
                  Sebagai bagian dari inisiatif untuk mempromosikan pariwisata lokal,
                  Tropitour dirancang untuk mengenalkan pesona pantai-pantai Pulau
                  Dompak ke seluruh Indonesia. Melalui pendekatan yang modern dan
                  interaktif, Tropitour membantu wisatawan mengeksplorasi destinasi
                  indah ini dan merencanakan kunjungan mereka. Kami percaya bahwa
                  setiap pantai di Pulau Dompak memiliki cerita yang layak untuk
                  dibagikan.
                </p>
              </div>
            </div>

            <div className="col-sm-7 col-lg-6">
              <div className="single_footer_part">
                <h4>Newsletter</h4>
                <p>
                  Informasi-informasi teraktual yang dikumpulkan langsung dari
                  lokasinya, disatukan pada newsletter kami.
                </p>
                <div id="mc_embed_signup">
                  <form
                    target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get"
                    className="subscribe_form relative mail_part"
                  >
                    <input
                      type="email"
                      name="email"
                      id="newsletter-form-email"
                      placeholder="Alamat Email"
                      className="placeholder hide-on-focus"
                      onFocus={(e) => (e.target.placeholder = "")}
                      onBlur={(e) => (e.target.placeholder = " Email Address ")}
                    />
                    <button
                      type="submit"
                      name="submit"
                      id="newsletter-submit"
                      className="email_icon newsletter-submit button-contactForm"
                    >
                      <i className="far fa-paper-plane"></i>
                    </button>
                    <div className="mt-10 info"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <img src={overlay} alt="#" className="footer_overlay" />
      </footer>

    </div>
  );
};

