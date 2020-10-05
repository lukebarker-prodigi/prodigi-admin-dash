import React from "react";
import { Button, Row, Col } from "react-bootstrap";

export default class Actions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{margin: "20px"}}>
        <h4 style={{marginBottom: "20px"}}>Actions</h4>
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
          <Col><Button block variant="outline-info">Load all Merchant Discount Prices</Button></Col>
        </Row>
      </div>
    );
  }
}