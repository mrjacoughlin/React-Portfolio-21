import React from "react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import CarouselFade from "../components/Carousel";
import Container from "../components/Container";

function Projects() {
  return (
    <div>
      <Navbar />
      <Container>
        <CarouselFade />
      </Container>
      <Footer />
    </div>
  );
}

export default Projects;
