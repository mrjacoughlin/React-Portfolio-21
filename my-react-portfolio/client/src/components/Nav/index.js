import React from "react";
import Container from "../Container";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown } from "react-bootstrap";

function Nav() {
  return (
    <div>
      <Container>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          varient="dark"
          fixed="top"
        >
          <Navbar.Brand href="/home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link eventKey="1" href="/about-me">
                About Me
              </Nav.Link>
              <Nav.Link eventKey="2" href="/technologies">
                {" "}
                Technologies
              </Nav.Link>
              <Nav.Link eventKey="3" href="/contact-me">
                Contact Me
              </Nav.Link>
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Nav;
