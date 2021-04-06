import React, { Component } from "react";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Col from "../components/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Linkedin from "../img/linkedin.jpg";

function ContactMe() {
  return (
    <div>
      <Navbar />

      <Col size="md-2">
        <Card style={{ backgroundColor: "dark", width: "20rem" }}>
          <Card.Header>Check out Mylinked Profile</Card.Header>

          <Card.Img style={{ width: "20rem" }} src={Linkedin}></Card.Img>
          <Card.Title>
            Click on the Link below and check out my Linked in Profile
          </Card.Title>
          <Button>Click here!!</Button>
        </Card>
      </Col>
      <Footer />
    </div>
  );
}

export default ContactMe;
