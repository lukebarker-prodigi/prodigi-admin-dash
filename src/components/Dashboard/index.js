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
      <div class="page">
        <Row>
          <Col style={{ width: "50%" }}><Sales/></Col>
          <Col style={{ width: "50%" }}><ProductionOrders/></Col>
        </Row>
        <Row>
          <Col style={{ width: "40%" }}><Actions/></Col>
          <Col style={{ width: "60%" }}><ScheduledTasks/></Col>
        </Row>
      </div>
    );
  }
}