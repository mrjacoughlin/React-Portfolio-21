import React from "react";
import { NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Container from "../Container";

import "./style.css";

function Navbar() {
  return (
    <div>
      <Container>
        <Nav varient="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="1" href="/home">
              {" "}
              My Portfolio
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2" href="/about-me">
              {" "}
              About Me
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3" href="/technologies">
              {" "}
              Technologies
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4" href="/contact-me">
              {" "}
              Contact Me
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Projects" id="nav-dropdown">
            <NavDropdown.Item eventKey="5.1">Project 1</NavDropdown.Item>
            <NavDropdown.Item eventKey="5.2">Project 2</NavDropdown.Item>
            <NavDropdown.Item eventKey="5.3">Project 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </div>
  );
}

export default Navbar;
