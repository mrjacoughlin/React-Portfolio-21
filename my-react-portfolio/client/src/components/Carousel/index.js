import { React } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import POne from "../../img/Project-1.jpeg";
import PTwo from "../../img/project2.png";
import PThree from "../../img/img-Engine.jpeg";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
// import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
// import ModalOne from "../Modal/ModalOne";
// import ModalPTwo from "../Modal/ModalPTwo";
// import Overlay from "react-bootstrap/Overlay";

function CarouselFade() {
  // const [show, setShow] = useState(false);
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <Carousel>
              <Carousel.Item interval={10000}>
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-4 text-top">
                    <h2 className="text-white">Remote Education Resource</h2>
                    <p className="text-white">
                      I worked with my team to design this Multi-page website to
                      help parents cope with the challenges of remote education.
                      This Application allows the User to search for educational
                      resources using Education Data Portal and YouTube Data
                      APIs. The User can search for schools in their area by
                      State and Zip, while also selecting specific criteria,
                      such as YouTube channels: Khan Academy, Smithsonian and
                      more.
                    </p>
                    <Button
                      href="https://dmaysteinman.github.io/Remote-Education-Resource/"
                      disabled
                    >
                      Click Here to go to deployed Site
                    </Button>
                  </div>
                  <div class="col-md-4 ripple">
                    <img
                      id="p-1"
                      src={POne}
                      alt="porject-1"
                      class="img-fluid rounded "
                    />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <div class="row justify-content-center align-items-center">
                  <div class="col-md-4 text-right">
                    <h2 className="text-white">JWAJ Banking App</h2>
                    <p className="text-white">
                      {" "}
                      Working with my team, we created an easy-to-use online
                      banking app that features login functionality and
                      server-side account storage. We used Passport for Password
                      encryption, UUID to generate unique ID, and utilized
                      MYSQLas well as Sequilized and Workbench. The name of this
                      app is a combination of the first letter of everyone’s
                      name who collaborated on this project.
                    </p>
                    <Button href="https://jwajbank.herokuapp.com/ " disabled>
                      Click Here to go to deployed Site
                    </Button>
                  </div>
                  <div class="col-md-4 pt-5 ripple">
                    <img src={PTwo} alt="porject-2" class="img-fluid rounded" />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={10000}>
                <div class="row justify-content-center align-items-center pb-5">
                  <div class="col-md-4 text-right">
                    <h2 className="text-white">Team Profile Generator</h2>
                    <p className="text-white">
                      I created this Node.js command line application that
                      gathers employee information. In this example, the
                      employees are from a software engineering team. The
                      application generates an HTML webpage that displays a
                      summary for each employee. Since testing is key in making
                      code maintainable, you’ll see that there is a unit test
                      for every part of the code to ensure it passes each test
                      before deployment.
                    </p>
                    <Button
                      href="https://mrjacoughlin.github.io/Template-Engine-Employee-Summary/"
                      disabled
                    >
                      Click Here to go to deployed Site
                    </Button>
                    {/* <a
                      class="btn btn-link"
                      type="button"
                      href=""
                      target="_blank"
                      data-mdb-ripple-color="dark"
                    >
                      Click Here to go to Deployed Site
                    </a> */}
                  </div>
                  <div class="col-md-4 pt-5 ripple">
                    <img
                      src={PThree}
                      alt="porject-3"
                      class="img-fluid rounded"
                    />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CarouselFade;
