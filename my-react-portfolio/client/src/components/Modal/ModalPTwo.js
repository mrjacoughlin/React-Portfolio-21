import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalPTwo(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>JWAJ Banking App</h4>
          <p>
            Working with my team, we created an easy-to-use online banking app
            that features login functionality and server-side account storage.
            We used Passport for Password encryption, UUID to generate unique
            ID, and utilized MYSQLas well as Sequilized and Workbench. The name
            of this app is a combination of the first letter of everyone’s name
            who collaborated on this project.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" href="https://jwajbank.herokuapp.com/ ">
            Check out the Site
          </Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalPTwo;
