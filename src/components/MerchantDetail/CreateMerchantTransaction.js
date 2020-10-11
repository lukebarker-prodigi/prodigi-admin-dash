import React, { useState } from 'react';
import { Row, Col, Button, Form, Modal } from "react-bootstrap";

const getTransactionTypeLabelText = () => getTransactionTypeLabelElement().innerHTML;

const getTransactionTypeLabelElement = () => {
  var labelElement = document.querySelectorAll(
    'label[for="formGridTransactionType"]'
  )[0];

  return labelElement;
}

const onTransactionTypeChange = (e) => {
  var labelElement = getTransactionTypeLabelElement();
  labelElement.innerHTML =
    labelElement.innerHTML === "Charge" ? "Refund" : "Charge";
};

function ConfirmNewTransactionModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button block variant="outline-info" onClick={handleShow}>Create Transaction</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm New Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Charge £123.45 for "some reason"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default class CreateMerchantTransaction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="component">
        <h5>Create Merchant Transaction</h5>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridTransactionAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" min="0" step="0.01" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridTransactionDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridTransactionType">
              <Form.Label for="xxx">Transaction Type</Form.Label>
              <Form.Switch on label="Charge" onChange={onTransactionTypeChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridSubmit">
              <ConfirmNewTransactionModal />
            </Form.Group>
          </Form.Row>
        </Form>
      </div>
    );
  }
}