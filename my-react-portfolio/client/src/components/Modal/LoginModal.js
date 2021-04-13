import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function LoginModal(props) {
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
            PLease Enter The Password Provided
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label> User Name</Form.Label>
            <Form.Control type="username" placeholder=" Enter Username" />
          </Form.Group>
          <Form.Group>
            <Form.Label> Password</Form.Label>
            <Form.Control type="password" placeholder=" Enter Password" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
          <Button onClick={props.onHide} disabled>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LoginModal;
