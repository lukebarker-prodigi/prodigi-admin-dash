import React, { useState } from "react";
import { Button, ListGroup, Col, Form, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const TopLevelDetail = () => {
  const [showCancel, setShowCancel] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  const handleCloseCancel = () => setShowCancel(false);
  const handleShowCancel = () => setShowCancel(true);

  const handleCloseComplete = () => setShowComplete(false);
  const handleShowComplete = () => setShowComplete(true);

  const copyOrderIdAndToast = () => {
    navigator.clipboard.writeText(document.getElementById("orderId").innerText);
    toast("Copied order ID to clipboard!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };
  
  return (
    <div class="component header">
      <ToastContainer />

      <Modal show={showCancel} onHide={handleCloseCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Order Cancellation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to cancel order 4245271?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseCancel}>
            No
          </Button>
          <Button variant="success" onClick={handleCloseCancel}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showComplete} onHide={handleCloseComplete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Order Completion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to complete order 4245271?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseComplete}>
            No
          </Button>
          <Button variant="success" onClick={handleCloseComplete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <Form>
        <Form.Row>
          <ListGroup horizontal as="ul" id="top-level-order-detail-row">
            <ListGroup.Item>
              <span>Order ID: </span>
              <Button onClick={copyOrderIdAndToast} class="badge">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-file-earmark-text-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7 2l.5-2.5 3 3L10 5a1 1 0 0 1-1-1zM4.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <strong id="orderId">4245271</strong>
              </Button>
            </ListGroup.Item>

            <ListGroup.Item>
              <span>Version: </span>
              <strong>300</strong>
            </ListGroup.Item>

            <ListGroup.Item>
              <span>Stripe Charge: </span>
              <strong>
                <a href="https://stripe.com" target="_blank">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box-arrow-up-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                  </svg>
                </a>
              </strong>
            </ListGroup.Item>

            <ListGroup.Item>
              <span>Recipient Email: </span>
              <strong>hello@example.com</strong>
            </ListGroup.Item>

            <ListGroup.Item>
              <span>Merchant: </span>
              <strong>Jigglypuff Ltd.</strong>
            </ListGroup.Item>

            <ListGroup.Item>
              <span>Status: </span>
              <h5><strong class="badge badge-info">Submitted</strong></h5>
            </ListGroup.Item>

            <ListGroup.Item>
              <span>Order Type: </span>
              <strong>Prodigi API</strong>
            </ListGroup.Item>

            <ListGroup.Item>
              <span>Merchant Order ID: </span>
              <strong>ba67fd1c-65cc-42cc-95f0-6619e88f656e</strong>
            </ListGroup.Item>
          </ListGroup>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Button block variant="outline-info" onClick={handleShowComplete}>Complete</Button>
          </Form.Group>

          <Form.Group as={Col}>
            <Button block variant="outline-danger" onClick={handleShowCancel}>Cancel</Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}