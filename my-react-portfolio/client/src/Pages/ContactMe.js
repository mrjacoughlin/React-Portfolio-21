// import React, { Component } from "react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Col from "../components/Col";
import Row from "../components/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Linkedin from "../img/linkedin.jpg";
import Github from "../img/GitHub-Mark-120px-plus.png";
import Ressume from "../img/resume.jpg";
// import Jumbotron from "../components/Jumbotron/Index";
import Container from "../components/Container";
import "../Styles/contactMe.css";
import { propTypes } from "react-bootstrap/esm/Image";
import { Media } from "react-bootstrap";

function ContactMe() {
  return (
    <div>
      <Navbar />
      <Container>
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "700px",
          }}
        >
          <Row>
            <h1 className="my-3 text-white">
              If you are interested in learning a little more about me then
              check out the links below
            </h1>
          </Row>
          <br />
          <br />
          <br />

          <Row>
            <Col size="md-4">
              <Card style={{ backgroundColor: "dark", width: "20rem" }}>
                <Card.Header>Check out My Linkedin Profile</Card.Header>

                <Card.Img
                  style={{ width: "20rem", height: "15rem" }}
                  src={Linkedin}
                ></Card.Img>
                <Card.Title>
                  Click on the Link below and check out my Linkedin in Profile
                </Card.Title>
                <Button>Click here!!</Button>
              </Card>
            </Col>
            <Col size="md-4">
              <Card style={{ backgroundColor: "dark", width: "20rem" }}>
                <Card.Header>Check out Github Profile</Card.Header>

                <Card.Img
                  style={{ width: "20rem", height: "15rem" }}
                  src={Github}
                ></Card.Img>
                <Card.Title>
                  Click on the Link below and check out my Github Profile
                </Card.Title>
                <Button>Click here!!</Button>
              </Card>
            </Col>
            <Col size="md-4">
              <Card style={{ backgroundColor: "dark", width: "20rem" }}>
                <Card.Header>Check out My Ressume</Card.Header>

                <Card.Img
                  style={{ width: "20rem", height: "15rem" }}
                  src={Ressume}
                ></Card.Img>
                <Card.Title>
                  Click on the Link below and check out my ressume
                </Card.Title>
                <Button>Click here!!</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default ContactMe;

{
  /* <Container style={(backgroundColor = "black")}>
        <Row>
          <h1 className="text-align-center">
            If you are interested in learning a little more about me then check
            out the links below
          </h1>
        </Row>
        <Row>
          <Col size="md-4">
            <Card style={{ backgroundColor: "dark", width: "20rem" }}>
              <Card.Header>Check out My Linkedin Profile</Card.Header>

              <Card.Img
                style={{ width: "20rem", height: "15rem" }}
                src={Linkedin}
              ></Card.Img>
              <Card.Title>
                Click on the Link below and check out my Linkedin in Profile
              </Card.Title>
              <Button>Click here!!</Button>
            </Card>
          </Col>
          <Col size="md-4">
            <Card style={{ backgroundColor: "dark", width: "20rem" }}>
              <Card.Header>Check out Github Profile</Card.Header>

              <Card.Img
                style={{ width: "20rem", height: "15rem" }}
                src={Github}
              ></Card.Img>
              <Card.Title>
                Click on the Link below and check out my Github Profile
              </Card.Title>
              <Button>Click here!!</Button>
            </Card>
          </Col>
          <Col size="md-4">
            <Card style={{ backgroundColor: "dark", width: "20rem" }}>
              <Card.Header>Check out My Ressume</Card.Header>

              <Card.Img
                style={{ width: "20rem", height: "15rem" }}
                src={Ressume}
              ></Card.Img>
              <Card.Title>
                Click on the Link below and check out my ressume
              </Card.Title>
              <Button>Click here!!</Button>
            </Card>
          </Col>
        </Row>
      </Container> */
}
