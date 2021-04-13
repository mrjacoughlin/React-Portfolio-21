import React from "react";
// import BtnBtn from "../components/Button/BtnBtn";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BackgroundOne from "../img/img-intro.jpeg";
import Carousel from "../components/Carousel";
import Divider from "../components/Divider";
import Technologies from "./Technologies";
import ContactMe from "./ContactMe";
// import Projects from "./Projects.js";
// import BackgroundTwo from "../img/galaxyunsplash.jpg";
// import CarouselFade from "../components/Carousel";
// import Button from "react-bootstrap/Button";
import LoginModal from "../components/Modal/LoginModal";

import "../Styles/home.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import { Jumbotron } from "react-bootstrap";

function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col size="md-12">
            <Hero backgroundImage={BackgroundOne}>
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h1 className="title mb-3">Full Stack Web Developement</h1>
                  <br />
                  <LoginModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  <a
                    className="btn btn-outline-light btn-lg m-2"
                    href="/contact-me"
                    role="button"
                  >
                    Get In Touch
                  </a>
                  <a
                    className="btn btn-outline-light btn-lg m-2"
                    href="/projects"
                    role="button"
                  >
                    Preview My Projects
                  </a>
                  <OverlayTrigger
                    placement="right"
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        If you would like access to the full site please login
                        with the user name & password provided
                      </Tooltip>
                    }
                  >
                    <a
                      href="#"
                      className="btn btn-outline-light btn-lg m-2"
                      role="button"
                      onClick={() => setModalShow(true)}
                    >
                      Login
                    </a>
                  </OverlayTrigger>
                </div>
              </div>
            </Hero>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
