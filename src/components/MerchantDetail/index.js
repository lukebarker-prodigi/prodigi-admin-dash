import React from 'react';
import { Row, Col } from "react-bootstrap";

import AccountDetails from './AccountDetails';
import ProductDiscounts from './ProductDiscounts';
import ShippingDiscounts from './ShippingDiscounts';
import TransactionHistory from './TransactionHistory';
import MerchantActions from './MerchantActions';

export default class MerchantDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="page">
        <Row>
          <Col><AccountDetails /></Col>
        </Row>
        <Row>
          <Col><MerchantActions /></Col>
        </Row>
        <Row>
          <Col>
            <TransactionHistory />
            <ProductDiscounts />
          </Col>
        </Row>
        <Row>
          <Col><ShippingDiscounts /></Col>
        </Row>
      </div>
    );
  }
}