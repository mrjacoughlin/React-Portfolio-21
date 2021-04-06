import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalOne(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Remote Learning Resource
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Helping Parents & Students Thrive in an Online Environment</h4>
          <p>
            I worked with my team to design this Multi-page website to help
            parents cope with the challenges of remote education. This
            Application allows the User to search for educational resources
            using Education Data Portal and YouTube Data APIs. The User can
            search for schools in their area by State and Zip, while also
            selecting specific criteria, such as YouTube channels: Khan Academy,
            Smithsonian and more.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="link"
            href="https://dmaysteinman.github.io/Remote-Education-Resource/"
          >
            Check out the Site
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalOne;
