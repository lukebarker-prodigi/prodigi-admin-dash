import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

export default class FilterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component">
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="e.g. John Smith" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCompany">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="e.g. Prodigi Group" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="e.g. hello@example.com" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBillingCurrency">
              <Form.Label>Billing Currency</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option value="">Choose...</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="ASD">AUD</option>
                <option value="JPY">JPY</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formGridAdmin">
              <Form.Label>Is Admin?</Form.Label>
              <Form.Control type="checkbox" defaultValue="unchecked" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Button block type="submit" variant="outline-info">Filter</Button>
          </Form.Row>
        </Form>
      </div>
    );
  }
}