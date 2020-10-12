import React from "react";
import { Table } from "react-bootstrap";

export default class Orders extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="component">
        <h4>Orders</h4>
        <Table bordered hover className="needs-y-scroll">
          <thead>
            <tr className="table-primary">
              <th>Order ID</th>
              <th>Version</th>
              <th>Status</th>
              <th>Merchant</th>
              <th>Destination Country</th>
              <th>SKUs</th>
              <th>Artwork Thumbnails</th>
              <th>Preferred Shipping Method</th>
              <th>Shipment Count</th>
              <th>Created</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-secondary">
              <td><a href="/order/1234567" target="_blank">1234567</a></td>
              <td>300</td>
              <td>Submitted</td>
              <td>Wayfair</td>
              <td>United Kingdom (UK)</td>
              <td>SKU-1, SKU-2, SKU-3</td>
              <td>some images TODO</td>
              <td>Express</td>
              <td>3</td>
              <td>12/10/2020 22:19:03</td>
              <td>12/10/2020 23:02:46</td>
            </tr>

            <tr className="table-secondary">
              <td><a href="/order/1234567" target="_blank">1234567</a></td>
              <td>300</td>
              <td>Submitted</td>
              <td>Wayfair</td>
              <td>United Kingdom (UK)</td>
              <td>SKU-1, SKU-2, SKU-3</td>
              <td>some images TODO</td>
              <td>Express</td>
              <td>3</td>
              <td>12/10/2020 22:19:03</td>
              <td>12/10/2020 23:02:46</td>
            </tr>
          </tbody>
        </Table>

        <p>TODO: Add pagination!</p>
      </div>
    );
  }
}