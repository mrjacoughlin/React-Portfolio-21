import React from "react";
// import BtnBtn from "../components/Button/BtnBtn";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BackgroundOne from "../img/img-intro.jpeg";
import BackgroundTwo from "../img/galaxyunsplash.jpg";
import CarouselFade from "../components/Carousel";
import Button from "react-bootstrap/Button";
import LoginModal from "../components/Modal/LoginModal";

import "../Styles/home.css";
import { Jumbotron } from "react-bootstrap";

function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Navbar />
      <Row>
        <Col size="md-12">
          <Hero backgroundImage={BackgroundOne}>
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white">
                <h1 class="mb-3">Full Stack Web Developement</h1>

                <a
                  className="btn btn-outline-light btn-lg m-2"
                  role="button"
                  onClick={() => setModalShow(true)}
                >
                  Login
                </a>
                <LoginModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <a
                  class="btn btn-outline-light btn-lg m-2"
                  href="/contact-me"
                  role="button"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </Hero>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Home;
