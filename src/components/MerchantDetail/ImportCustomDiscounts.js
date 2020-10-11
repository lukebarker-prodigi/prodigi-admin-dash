import React from 'react';
import { Button } from "react-bootstrap";

export default class ImportCustomDiscounts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="component">
        <h5>Import Custom Discount Prices</h5>
        <Button block variant="outline-info">Click here to import discount prices for this merchant</Button>
      </div>
    );
  }
}