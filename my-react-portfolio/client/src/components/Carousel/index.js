import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import POne from "../../img/img-project1.jpeg";
import PTwo from "../../img/img-project2.jpeg";
import PThree from "../../img/JJWAhomePage.jpeg";

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={POne}
          alt="Remote Education Resource"
        />
        <Carousel.Caption>
          <h3>Remote Education Resource</h3>
          <p>
            I worked with my team to design this Multi-page website to help
            parents cope with the challenges of remote education. This
            Application allows the User to search for educational resources
            using Education Data Portal and YouTube Data APIs. The User can
            search for schools in their area by State and Zip, while also
            selecting specific criteria, such as YouTube channels: Khan Academy,
            Smithsonian and more.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={PTwo} alt="JWAJ Banking App" />
        <Carousel.Caption>
          <h3>JWAJ Banking App</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={PThree}
          alt="JJWA Banking Wealth App"
        />
        <Carousel.Caption>
          <h3>JJWA Banking Wealth App</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;
