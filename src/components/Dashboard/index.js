import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Actions from './Actions';
import ProductionOrders from './ProductionOrders';
import Sales from './Sales';
import ScheduledTasks from './ScheduledTasks';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Row className="border border-dark">
          <Col className="border border-dark" style={{ width: "50%" }}><Sales/></Col>
          <Col className="border border-dark" style={{ width: "50%" }}><ProductionOrders/></Col>
        </Row>
        <Row>
          <Col className="border border-dark" style={{ width: "50%" }}><Actions/></Col>
          <Col className="border border-dark" style={{ width: "50%" }}><ScheduledTasks/></Col>
        </Row>
      </div>
    );
  }
}