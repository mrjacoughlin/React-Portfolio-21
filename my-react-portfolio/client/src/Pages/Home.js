import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BackgroundOne from "../img/img-intro.jpeg";
import Divider from "../components/Divider";
import AboutMe from "../Pages/AboutMe";
import LoginModal from "../components/Modal/LoginModal";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Nav from "../components/Nav/index";
import "../Styles/home.css";

function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Nav />
      <Container>
        <Row>
          <Col size="md-12">
            <Hero backgroundImage={BackgroundOne}>
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h1 className="title mb-3">Welcome to My Portfolio</h1>
                  <h3>Full Stack We Developer</h3>
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
                      href="/projects"
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
        <Divider>
          <h1>Discovery</h1>
          <h3>
            {" "}
            "The hardest challenge I have faced is finding that uncaught syntax
            error"
          </h3>
          <hr />
        </Divider>
        <Divider />

        <AboutMe />
        <Divider />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
