import React from "react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import CarouselFade from "../components/Carousel";
import Container from "../components/Container";
import Divider from "../components/Divider";
import Row from "../components/Row";
import Col from "../components/Col";
function Projects() {
  return (
    <div>
      <Navbar />

      <Container style={{ backgroundColor: "black" }}>
        <Divider>
          <h3 className="text-white">My Projects With More to Come!</h3>
        </Divider>
        <Row>
          <Col size="md-12">
            <CarouselFade />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Projects;
