import React from 'react';
import { Col, Row } from "react-bootstrap";
import FilterForm from './FilterForm';
import MerchantsTable from './MerchantsTable';

export default class Merchants extends React.Component {
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
          <Col><MerchantsTable /></Col>
        </Row>
      </div>
    );
  }
}