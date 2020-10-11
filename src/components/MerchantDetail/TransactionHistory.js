import React from 'react';
import { Table } from "react-bootstrap";

export default class TransactionHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="component">
        <h4>Transaction History</h4>
        <Table bordered hover className="needs-y-scroll">
          <thead>
            <tr class="table-primary">
              <th>Id</th>
              <th>Date</th>
              <th>Description</th>
              <th>Id</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-secondary">
              <td>23456789</td>
              <td>08/10/2020 14:50:02</td>
              <td>Order id 12345678, LabOrder id 1234567</td>
              <td>-28.6082</td>
            </tr>
            <tr class="table-secondary">
              <td>23456790</td>
              <td>08/10/2020 14:50:02</td>
              <td>Order id 12345678, LabOrder id 1234567</td>
              <td>-28.6082</td>
            </tr>
            <tr class="table-secondary">
              <td>23456791</td>
              <td>08/10/2020 14:50:02</td>
              <td>Order id 12345678, LabOrder id 1234567</td>
              <td>-28.6082</td>
            </tr>
            <tr class="table-secondary">
              <td>23456792</td>
              <td>08/10/2020 14:50:02</td>
              <td>Order id 12345678, LabOrder id 1234567</td>
              <td>-28.6082</td>
            </tr>
            <tr class="table-secondary">
              <td>23456793</td>
              <td>08/10/2020 14:50:02</td>
              <td>Order id 12345678, LabOrder id 1234567</td>
              <td>-28.6082</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}