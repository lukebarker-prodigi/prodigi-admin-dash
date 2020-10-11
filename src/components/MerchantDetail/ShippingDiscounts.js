import React from 'react';
import { Table } from "react-bootstrap";

export default class ShippingDiscounts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="component">
        <h4>Shipping Discounts</h4>
        <Table bordered hover className="needs-y-scroll">
          <thead>
            <tr class="table-primary">
              <th>Lab Name</th>
              <th>Lab Alias</th>
              <th>Destination Country</th>
              <th>Global Shipping Method</th>
              <th>Description</th>
              <th>Currency</th>
              <th>Product Category</th>
              <th>Original Charge</th>
              <th>Discount Charge</th>
              <th>Discount %</th>
              <th>Original +1 Charge</th>
              <th>Discount +1 Charge</th>
              <th>+1 Discount %</th>
              <th>Max Size (mm)</th>
              <th>Max Size (inches)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-secondary">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}