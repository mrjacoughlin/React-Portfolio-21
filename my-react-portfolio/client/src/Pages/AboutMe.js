import React from "react";

import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import { Button } from "react-bootstrap";
// import Nav from "../components/Nav";
function ContactMe() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-4">
            <h1 className="text-center"> About Me</h1>
            <h3 className="text-center"> Full Stack Web Designer</h3>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <p className="lh-lg">
              Front-end web developer leveraging a background to build a more
              intuitive user experience on the web. Recently earned a
              certificate in full stack development from the University of New
              Hampshire, with newly developed skills in JavaScript, CSS,
              React.js, Mongodb, Express, Node and responsive web design. Pride
              myself as an innovative problem solver passionate about developing
              apps, with a focus on mobile-first design and development. With
              each project, my aim is to best engage my audience for an
              impactful user experience. I applied aspects of UX and agile
              development in a recent projects.
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <Button>Download My Ressume</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactMe;
