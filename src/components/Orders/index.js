import React from "react";
import { Row, Col } from "react-bootstrap";
import FilterForm from "./FilterForm";
import OrdersTable from "./OrdersTable";

export default class Orders extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="page">
        <Row>
          <Col><FilterForm /></Col>
        </Row>

        <Row>
          <Col><OrdersTable /></Col>
        </Row>
      </div>
    );
  }
}