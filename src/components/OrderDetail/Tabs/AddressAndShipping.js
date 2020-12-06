import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import Select from "react-select";

const countryOptions = [
  { value: 'GB', label: 'United Kingdom (GB)' },
  { value: 'US', label: 'United States (US)' },
  { value: 'AU', label: 'Australia (AU)' },
  { value: 'CA', label: 'Canada (CA)' },
]

const v3shippingOptions = [
  { label: "Budget", value: 0 },
  { label: "Standard", value: 1 },
  { label: "Express", value: 2 },
  { label: "Overnight", value: 3 }
];

export const AddressAndShipping = () => {
  return (
    <div class="sub-component">
      <Form>
        <Form.Row>
          <legend>Recipient</legend>

          <Form.Group as={Col}>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value="John Smith" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value="hello@example.com" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" value="07987654321" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Telephone Number</Form.Label>
            <Form.Control type="text" value="0800 00 1066" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <legend>Address</legend>

          <Form.Group as={Col}>
            <Form.Label>Line 1</Form.Label>
            <Form.Control type="text" value="115 Creative Quarter" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Line 2</Form.Label>
            <Form.Control type="text" value="8a Morgan Arcade" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Town &#47; City</Form.Label>
            <Form.Control type="text" value="Cardiff" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>State &#47; County</Form.Label>
            <Form.Control type="text" value="South Glamorgan" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Postcode</Form.Label>
            <Form.Control type="text" value="CF10 1AF" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Destination Country</Form.Label>
            <Select options={countryOptions} defaultValue={{ value: 'GB', label: 'United Kingdom (GB)' }} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Shipping Method</Form.Label>
            <Select options={v3shippingOptions} defaultValue={{ label: "Standard", value: 1 }} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Button block type="submit" variant="outline-info">Save</Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}