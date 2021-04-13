import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TechBackground from "../img/img-techno.jpg";
import Container from "../components/Container";

function Technologies() {
  return (
    <div>
      <Nav />
      <Container>
        <Hero backgroundImage={TechBackground}>
          <p className="text-white">
            Within this Full Stack Web developement program, I have created
            applications that utilizes all featured technologies to assist in
            the developement of my applications. Focusing on Project Scope,
            Quality Assured Testing, Responsive design and Depolyment.
          </p>
          <a
            class="btn btn-outline-light btn-lg m-2"
            href="https://nodejs.org/en/about/"
            target="_blank"
            role="button"
          >
            Nodejs
          </a>
          <a
            class="btn btn-outline-light btn-lg m-2"
            href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
            target="_blank"
            role="button"
          >
            HTML 5
          </a>
          <a
            class="btn btn-outline-light btn-lg m-2"
            href="https://www.javascript.com/"
            target="_blank"
            role="button"
          >
            Javascript
          </a>
          <a
            class="btn btn-outline-light btn-lg m-2"
            href="http://www.passportjs.org/"
            target="_blank"
            role="button"
          >
            Passportjs
          </a>
          <a
            class="btn btn-outline-light btn-lg m-2"
            href="https://www.mysql.com/"
            target="_blank"
            role="button"
          >
            MYSQL & Workbench
          </a>
          <a
            class="btn btn-outline-light btn-lg m-2"
            href="https://mdbootstrap.com/"
            target="_blank"
            role="button"
          >
            MDBootstrap
          </a>
          <a
            class="btn btn-outline-light btn-lg m-2"
            href="https://www.heroku.com/"
            target="_blank"
            role="button"
            rel="noreferrer"
          >
            Heroku
          </a>
        </Hero>
      </Container>
      <Footer />
    </div>
  );
}

export default Technologies;
