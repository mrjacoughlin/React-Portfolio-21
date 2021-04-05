import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import POne from "../../img/Project-1.jpeg";
import PTwo from "../../img/img-project2.jpeg";
import PThree from "../../img/JJWAhomePage.jpeg";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "react-bootstrap/Card";
import Button from "../Button";
import CenteredModal from "../Modal/index";

function CarouselFade() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Container>
        <Row>
          <Col size="sx-8">
            <Carousel fade>
              <Carousel.Item>
                <Card style={{ width: "60rem" }}>
                  <Card.Header>Remote Learning Resource</Card.Header>
                  <Card.Img src={POne}></Card.Img>
                  <Card.Title>
                    Helping Parents & Students Thrive in an Online Environment
                  </Card.Title>
                </Card>
                <Card>
                  <CenteredModal />
                </Card>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CarouselFade;
