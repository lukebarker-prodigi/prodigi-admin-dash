import React from "react";
import { Button, Row, Col } from "react-bootstrap";

export default class Actions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component">
        <h4>Actions</h4>
        <Row>
          <Col><Button block variant="outline-info">Resubmit Errored Orders</Button></Col>
        </Row>
        <Row>
          <Col><Button block variant="outline-info">Download Missing Images</Button></Col>
        </Row>
        <Row>
          <Col><Button block variant="outline-info">Create Merchants on Netsuite</Button></Col>
        </Row>
        <Row>
          <Col><Button block variant="outline-info">Load <strong>ALL</strong> Merchant Discount Prices</Button></Col>
        </Row>
      </div>
    );
  }
}