import React from "react";
import { Col, Form } from "react-bootstrap";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

const options = [
  { label: 'Thing 1', value: 1},
  { label: 'Thing 2', value: 2},
];

const processingTypeOptions = [
  { label: "Errored", value: "Errored" },
  { label: "Need Completing", value: "NeedCompleting" },
  { label: "Need Processing", value: "NeedProcessing" },
  { label: "Stuck in 'Awaiting Submit'", value: "StuckInAwaitingSubmit" },
];

const labNameOptions = [
  { label: "Farnham", value: "Farnham" },
  { label: "Alton", value: "Alton" },
  { label: "Jondo", value: "Jondo" },
  { label: "Print Geek", value: "PrintGeek" },
  { label: "TShirt & Sons", value: "TShirtAndSons" },
  { label: "Venlo", value: "Venlo" },
  { label: "Graphik Dimensions", value: "GraphikDimensions" },
  { label: "Bay Photo", value: "BayPhoto" },
  { label: "IDT", value: "IDT" },
  { label: "WPAPS", value: "WPAPS" },
  { label: "Dtg2Go", value: "Dtg2Go" }
];

const merchantOptions = [
  { label: "Wayfair", value: "Wayfair" },
  { label: "Red Bubble", value: "RedBubble" },
  { label: "Fy!", value: "Fy" },
  { label: "The Night Sky", value: "TheNightSky" },
  { label: "Under Lucky Stars", value: "UnderLuckyStars" },
  { label: "The Book of Everyone", value: "TheBookofEveryone" },
  { label: "Flutterbox Ltd.", value: "FlutterboxLtd" }
];

const productCategoryOptions = [
  { label: "Prints", value: "Prints" },
  { label: "Framed", value: "Framed" },
  { label: "Canvas (Stretched)", value: "CanvasStretched" },
  { label: "Canvas (Rolled)", value: "CanvasRolled" },
  { label: "Apparel", value: "Apparel" },
  { label: "Homewares", value: "Homewares" },
  { label: "Technology", value: "Technology" },
  { label: "Other", value: "Other" }
];

const destinationCountryOptions = [
  { label: "United Kingdom (GB)", value: "GB" },
  { label: "United States (US)", value: "US" },
  { label: "Australia (AU)", value: "AU" },
  { label: "Spain (ES)", value: "ES" },
  { label: "Germany (DE)", value: "DE" },
];

const v3shippingOptions = [
  { label: "Budget", value: 0 },
  { label: "Standard", value: 1 },
  { label: "Express", value: 2 },
  { label: "Overnight", value: 3 }
];

export default class FilterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="component">
        <h4>Filters</h4>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridProcessingType">
              <Form.Label>Processing Type</Form.Label>
              <ReactMultiSelectCheckboxes options={processingTypeOptions} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLabName">
              <Form.Label>Lab Name</Form.Label>
                <ReactMultiSelectCheckboxes options={labNameOptions} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMerchant">
              <Form.Label>Merchant</Form.Label>
              <ReactMultiSelectCheckboxes options={merchantOptions} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridProductCategory">
              <Form.Label>Product Category</Form.Label>
                <ReactMultiSelectCheckboxes options={productCategoryOptions} />
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridDestinationCountry">
              <Form.Label>Destination Country</Form.Label>
                <ReactMultiSelectCheckboxes options={destinationCountryOptions} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridV2Shipping">
              <Form.Label>Shipping Method (V2)</Form.Label>
                <ReactMultiSelectCheckboxes options={options} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridV3Shipping">
              <Form.Label>Global Shipping Method (V3)</Form.Label>
                <ReactMultiSelectCheckboxes options={v3shippingOptions} />
            </Form.Group>
          </Form.Row>
        </Form>
      </div>
    );
  }
}