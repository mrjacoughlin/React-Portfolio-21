import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-black">
      <div class="container">
        <a class="navbar-brand " href="/">
          Portfolio 2021
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"></li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#tech-info">
                Technologies
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact-me">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
