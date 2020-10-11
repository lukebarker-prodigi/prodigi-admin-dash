import React from 'react';
import { Row, Col } from "react-bootstrap";

import CreateMerchantTransaction from './CreateMerchantTransaction';
import ImportCustomDiscounts from './ImportCustomDiscounts';

export default class MerchantActions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="component">
        <h4>Other Actions</h4>
        <CreateMerchantTransaction />
        <ImportCustomDiscounts />
      </div>
    );
  }
}