import React from "react";
import Container from "../Container";
import "./style.css";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";

function Navbar() {
  return (
    <Container>
      <Nav varient="pills" defaultActiveKey="/home" as="ul">
        {" "}
        My React Portfolio
        <Nav.Item as="li">
          <Nav.Link eventKey="1" href="/home">
            My Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="2" href="/technologies">
            Technologies
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="3" href="/contact-me">
            Contact Me
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Projects" disabled id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Project1</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Project2</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Project3</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Project4</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.5">Project5</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.6">Project6</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.7">Project7</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.8">Project8</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.9">Github Link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Container>
  );
}

export default Navbar;
