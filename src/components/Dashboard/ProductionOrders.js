import React from "react";
import { Table } from "react-bootstrap";

export default class ProductionOrders extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component">
        <h4>
          <span>Production Orders</span>
        </h4>
        <Table bordered hover>
          <tr class="table-primary">
            <td>Orders in Progress</td>
            <th>21064</th>
          </tr>
          <tr class="table-warning">
            <td>Orders that need Processing</td>
            <th>18</th>
          </tr>
          <tr class="table-secondary">
            <td>Old Orders</td>
            <th>2290</th>
          </tr>
          <tr class="table-danger">
            <td>Errored Orders</td>
            <th>34</th>
          </tr>
        </Table>
        <h4>
          <span>Today's Top Stats</span>
        </h4>
        <Table bordered hover>
          <tr class="table-secondary">
            <td>Most Popular Lab</td>
            <th>Alton</th>
          </tr>
          <tr class="table-secondary">
            <td>Most Popular Product Category</td>
            <th>Framed</th>
          </tr>
          <tr class="table-secondary">
            <td>Most Popular Merchant</td>
            <th>Jigglypuff Ltd.</th>
          </tr>
        </Table>
      </div>
    );
  }
}