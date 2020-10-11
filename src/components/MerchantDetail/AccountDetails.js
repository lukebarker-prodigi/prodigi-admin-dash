import React from 'react';
import { Row, Col, Button, Form } from "react-bootstrap";

import CreateMerchantTransaction from "./CreateMerchantTransaction";
import ImportCustomDiscounts from "./ImportCustomDiscounts";

export default class AccountDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="component">
        <h4>Merchant Details</h4>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value="John Smith" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value="hello@example.com" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" value="Prodigi Group" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridBillingCurrency">
              <Form.Label>Billing Currency</Form.Label>
              <Form.Control as="select" defaultValue="GBP">
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="ASD">AUD</option>
                <option value="JPY">JPY</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridUninvoicedBalance">
              <Form.Label>Uninvoiced Balance</Form.Label>
              <Form.Control readOnly type="text" value="-1234.56" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridUnpaidInvoices">
              <Form.Label>Unpaid Invoices</Form.Label>
              <Form.Control readOnly type="text" value="1234.56" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridVatNumber">
              <Form.Label>Customer VAT Number</Form.Label>
              <Form.Control type="text" value="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridProdigiClientCode">
              <Form.Label>Prodigi Client Code</Form.Label>
              <Form.Control type="text" value="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridInvoiceFrequency">
              <Form.Label>Invoice Frequency</Form.Label>
              <Form.Control as="select" defaultValue="PerOrder">
                <option value="Monthly">Monthly</option>
                <option value="Weekly">Weekly</option>
                <option value="Daily">Daily</option>
                <option value="PerOrder">Per Order</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPaymentMethod">
              <Form.Label>Payment Method</Form.Label>
              <Form.Control as="select" defaultValue="PerOrder">
                <option value="StripePayment">Stripe Payment</option>
                <option value="StripeSubscription">Stripe Subscription</option>
                <option value="GoCardless">GoCardless</option>
                <option value="BACS">BACS</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridChargeVat" className="form-group-checkbox">
              <Form.Label>Charge VAT?</Form.Label>
              <Form.Control type="checkbox" defaultValue="unchecked" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridProdigiInvoice" className="form-group-checkbox">
              <Form.Label>Use Prodigi Invoice?</Form.Label>
              <Form.Control type="checkbox" defaultValue="unchecked" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAdmin" className="form-group-checkbox">
              <Form.Label>Has Admin Status?</Form.Label>
              <Form.Control type="checkbox" defaultValue="unchecked" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridUpdate">
              <Button block type="submit" variant="outline-info">Update Merchant</Button>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridUpdate">
              <Button block variant="outline-danger">Delete Merchant</Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </div>
    );
  }
}