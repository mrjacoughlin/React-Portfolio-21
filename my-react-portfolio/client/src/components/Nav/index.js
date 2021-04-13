import React from "react";
import Container from "../Container";
import "./style.css";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";

function Navbar() {
  return (
    <div>
      <Container>
        <Nav varient="pills" defaultActiveKey="/home" as="ul">
          {" "}
          <Nav.Item as="li">
            <Nav.Link eventKey="1" href="/home">
              My Portfolio
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Projects" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1" disabled>
              Project1
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" disabled>
              Project2
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3" disabled>
              Project3
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.4" disabled>
              Project4
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.5" disabled>
              Project5
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.6" disabled>
              Project6
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.7" disabled>
              Project7
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.8" disabled>
              Project8
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.9" disabled>
              Github Link
            </NavDropdown.Item>
          </NavDropdown>
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
        </Nav>
      </Container>
    </div>
  );
}

export default Navbar;
