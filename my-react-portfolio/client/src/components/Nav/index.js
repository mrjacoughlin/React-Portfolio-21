import React from "react";
import Container from "../Container";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-grey">
      <Container>
        <a className="navbar-brand " href="/">
          Portfolio 2021
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"></li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tech-info">
                Technologies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact-me">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
