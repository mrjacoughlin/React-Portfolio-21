import React from "react";
// import BtnBtn from "../components/Button/BtnBtn";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import "../Styles/home.css";

function Home() {
  return (
    <div>
      <Nav />
      <Container>
        <Row>
          <Col size="md-12">
            <Hero backgroundImage="../img/img-intro.jpeg">
              <h2>Full stack Web Developer</h2>
            </Hero>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Home;
