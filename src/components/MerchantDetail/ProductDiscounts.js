import React from 'react';
import { Table } from "react-bootstrap";

export default class ProductDiscounts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="component">
        <h4>Product Discounts</h4>
        <Table bordered hover className="needs-y-scroll">
          <thead>
            <tr class="table-primary">
              <th>Product SKU</th>
              <th>Original Price</th>
              <th>Discount Price</th>
              <th>Discount %</th>
              <th>Currency</th>
              <th>Created</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-secondary">
              <td>GLOBAL-CAN-12X12-IMA-US1</td>
              <td>20.00</td>
              <td>15.00</td>
              <td>25%</td>
              <td>USD</td>
              <td>01/01/1970</td>
              <td>01/01/1970</td>
            </tr>
            <tr class="table-secondary">
              <td>GLOBAL-CAN-8X12-WHI-PRODIGI_GB2	</td>
              <td>15.00</td>
              <td>13.50</td>
              <td>10%</td>
              <td>GBP</td>
              <td>01/01/1970</td>
              <td>01/01/1970</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}