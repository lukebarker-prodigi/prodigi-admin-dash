import React from "react";
import { Row, Col, Nav, Tab } from "react-bootstrap";
import { AddressAndShipping, TransactionHistory, OrderLogs, LabOrderItems } from "./Tabs";

export const InnerDetail = () => {
  return (
    <div class="component">
      <Tab.Container defaultActiveKey="addressAndShipping">
        <Row>
          <Col>
            <Nav variant="tabs" fill justify>
              <Nav.Item>
                <Nav.Link eventKey="addressAndShipping"><span>ADDRESS &amp; SHIPPING</span></Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="labOrders"><span>LAB ORDERS</span></Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="transactionHistory"><span>TRANSACTION HISTORY</span></Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="orderLogs"><span>ORDER LOGS</span></Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="orderIssues"><span>RECORDED ISSUES</span></Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="addressAndShipping">
                <span><AddressAndShipping /></span>
              </Tab.Pane>

              <Tab.Pane eventKey="labOrders">
                <span><LabOrderItems /></span>
              </Tab.Pane>

              <Tab.Pane eventKey="transactionHistory">
                <span><TransactionHistory /></span>
              </Tab.Pane>

              <Tab.Pane eventKey="orderLogs">
                <span><OrderLogs /></span>
              </Tab.Pane>

              <Tab.Pane eventKey="orderIssues">
                <span>RECORDED ISSUES</span>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}