import React from "react";
import { Row, Col } from "react-bootstrap";
import { InnerDetail } from "./InnerDetail";
import { TopLevelDetail } from "./TopLevelDetail";

export default class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="page">
        <Row>
          <Col>
            <TopLevelDetail />
            <InnerDetail />
          </Col>
        </Row>
      </div>
    );
  }
}