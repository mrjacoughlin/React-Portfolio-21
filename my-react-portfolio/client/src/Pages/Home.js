import React from "react";
// import BtnBtn from "../components/Button/BtnBtn";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Nav />

      <Container>
        <Hero backgroundImage="../img/img-intro.jpeg">
          {/* <Row>
            <Col size="md-6 text-center">
              <h1 className="heading slide-right"> Full Stack Web Developer</h1>
            </Col>
          </Row> */}
        </Hero>
      </Container>

      <Footer />
    </div>
  );
}

export default Home;
