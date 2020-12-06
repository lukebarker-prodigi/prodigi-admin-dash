import React, { useState } from "react";
import { Accordion, Row, Col, Nav, Tab, Card, Image, Form, ListGroup, Button, ButtonGroup } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faThumbsUp } from "@fortawesome/free-solid-svg-icons"

const labOrderStatusOptions = [
  { label: "None", value: 0 },
  { label: "Complete", value: 1 },
  { label: "Resubmitted", value: 2 },
  { label: "Cancelled", value: 3 },
  { label: "Submitted to third party", value: 4 },
  { label: "Error submitting to third party", value: 5 },
  { label: "Awaiting Submit", value: 6 },
  { label: "Queued for Submit", value: 7 },
  { label: "Awaiting pick-up by lab", value: 8 },
  { label: "Printed in store", value: 9 },
  { label: "On Hold", value: 10 },
];

const farnhamLabOrder = {
  id: 4208547,
  status: "Complete",
  trackingUrl: "https://farn.ham/tracking/tRaCkInGnUmBeR123",
  trackingNumber: "tRaCkInGnUmBeR123",
  created: "11:23 on 19/10/2020",
  lastUpdated: "18:58 on 20/10/2020",
  estimatedDelivery: "20/10/2020",
  shipping: "Not enough data to determine",
  orderItems: [
    {
      id: 14208547,
      parentLabOrderId: 4208547,
      itemTypeSku: "GLOBAL-GRE-MOH-6X4-BLA",
      copies: 5,
      thumbnailUrl: "https://picsum.photos/150/75",
      status: "OK",
      statusCssClass: "success",
      description: "A single 6x4\" greetings card printed on Mohawk 324gsm card - includes a blank envelope to address to recipient - can be printed inside & outside.",
      attributes: {
        paperType: "mohawk superfine",
        substrateWeight: "324gsm"
      },
      assets: [
        {
          id: 666,
          name: "default",
          thumbnailUrl: "https://picsum.photos/150/75",
          statusCssClass: "success",
          status: "Print Ready",
          originalPixelWidth: 20585,
          originalPixelHeight: 7730,
          originalDpi: 118,
          transformedPixelWidth: 4937,
          transformedPixelHeight: 1854,
          dpi: 300
        }
      ]
    }
  ]
};

const printGeekLabOrder = {
  id: 4208548,
  status: "Complete",
  trackingUrl: "https://print.geek/tracking/tRaCkInGnUmBeR123",
  trackingNumber: "tRaCkInGnUmBeR123",
  created: "11:23 on 19/10/2020",
  lastUpdated: "18:58 on 20/10/2020",
  estimatedDelivery: "20/10/2020",
  shipping: "Not enough data to determine",
  orderItems: [
    {
      id: 14208548,
      parentLabOrderId: 4208548,
      itemTypeSku: "GLOBAL-POS-20x10",
      copies: 1,
      thumbnailUrl: "https://picsum.photos/150/75",
      status: "Not Yet Downloaded",
      statusCssClass: "warning",
      description: "A 20 x 10\" classic poster print with fancy art paper and metallic luster laser ink.",
      attributes: {
        paperType: "mohawk superfine",
        substrateWeight: "324gsm"
      },
      assets: [
        {
          id: 777,
          name: "default",
          thumbnailUrl: "https://picsum.photos/150/75",
          statusCssClass: "warning",
          status: "Not Transformed Yet",
          originalPixelWidth: 20585,
          originalPixelHeight: 7730,
          originalDpi: 118,
          transformedPixelWidth: 4937,
          transformedPixelHeight: 1854,
          dpi: 300
        }
      ]
    },
    {
      id: 14208549,
      parentLabOrderId: 4208548,
      itemTypeSku: "GLOBAL-TEE",
      copies: 2,
      thumbnailUrl: "https://picsum.photos/75/100",
      status: "Errored",
      statusCssClass: "danger",
      description: "A unisex t-shirt, Bella+Canvas 3001",
      attributes: {
        colour: "gold",
        size: "medium"
      },
      assets: [
        {
          id: 888,
          name: "front",
          thumbnailUrl: "https://picsum.photos/75/100",
          statusCssClass: "success",
          status: "Print Ready",
          originalPixelWidth: 20585,
          originalPixelHeight: 7730,
          originalDpi: 118,
          transformedPixelWidth: 4937,
          transformedPixelHeight: 1854,
          dpi: 300
        },
        {
          id: 999,
          name: "back",
          thumbnailUrl: "https://picsum.photos/75/100",
          statusCssClass: "danger",
          status: "Error Transforming Asset",
          originalPixelWidth: 7730,
          originalPixelHeight: 20585,
          originalDpi: 118,
          transformedPixelWidth: 1854,
          transformedPixelHeight: 4937,
          dpi: 300
        }
      ]
    }
  ]
};

const OrderItemAsset = ({asset}) => {
  return (
    <Card className="order-item-asset" id={`order-item-asset-${asset.id}`}>
      <Accordion.Toggle as={Card.Header} eventKey={asset.id}>
        <Row>
          <Col>
            <h4>
              <span><FontAwesomeIcon icon={faThumbsUp} color="seagreen" />&nbsp;</span>
              <Image src={asset.thumbnailUrl} height="48px" />
              &nbsp;
              <strong class="badge badge-secondary">
                {`"${asset.name}"`}
              </strong>
            </h4>
          </Col>

          <Col md="auto"></Col>

          <Col xs lg="5" className="text-right">
            <ButtonGroup>
              <Button variant="outline-info" disabled={false}>Force Re-download of Asset</Button>
              <Button variant="outline-info" disabled={false}>Re-transform Asset</Button>
              <Button variant="outline-info" disabled={false}>Replace Asset</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey={asset.id}>
        <Card.Body>
          <p>Asset Status: <strong class={`badge badge-${asset.statusCssClass}`}>{asset.status}</strong></p>
          <p>Original Artwork Dimensions: {`${asset.originalPixelWidth} x ${asset.originalPixelHeight} pixels | ${asset.originalDpi} Dpi`}</p>
          <p>Print Ready Artwork Dimensions: {`${asset.transformedPixelWidth} x ${asset.transformedPixelHeight} pixels | ${asset.dpi} Dpi`}</p>
          <h5>Downloadable Artwork URLs</h5>
          <ButtonGroup>
            <Button variant="outline-info" disabled={false}>Original Asset</Button>
            <Button variant="outline-info" disabled={false}>Downloaded Asset</Button>
            <Button variant="outline-info" disabled={false}>Print Ready Asset</Button>
          </ButtonGroup>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};


const OrderItemAssetList = ({assets}) => {
  const orderItemAssetsAsComponents = assets.map((ass) =>
    <OrderItemAsset asset={ass} />
  );

  return (
    <Accordion class="order-item-asset-list">{orderItemAssetsAsComponents}</Accordion>
  );
};

const OrderItem = ({orderItem}) => {
  return (
    <Card className="order-item" id={`order-item-${orderItem.id}`}>
      <Accordion.Toggle as={Card.Header} eventKey={orderItem.id}>
        <Row>
          <Col>
            <h4>
              <span><FontAwesomeIcon icon={faThumbsUp} color="seagreen" />&nbsp;</span>
              <Image src={orderItem.thumbnailUrl} height="48px" />
              &nbsp;
              <strong class="badge badge-secondary">
                {`${orderItem.itemTypeSku}`}
              </strong>
            </h4>
          </Col>

          <Col md="auto"></Col>

          <Col xs lg="1">
            <Form.Check className={`order-item-checkbox lab-order-${orderItem.parentLabOrderId}`} defaultValue="unchecked" />
          </Col>
        </Row>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey={orderItem.id}>
        <Card.Body>
          <p>Item Status: <strong class={`badge badge-${orderItem.statusCssClass}`}>{orderItem.status}</strong></p>
          <p>Copies: <strong class="badge badge-secondary">{`x ${orderItem.copies}`}</strong></p>
          <p>Description: {orderItem.description}</p>
          <p>Attributes: <pre style={{ overflowY: "scroll", height: "96px" }}>{ JSON.stringify(orderItem.attributes, null, 2) }</pre></p>
          <h4>Assets</h4>
          <OrderItemAssetList assets={orderItem.assets} />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

const OrderItemList = ({orderItems}) => {
  const orderItemsAsComponents = orderItems.map((oi) =>
    <OrderItem orderItem={oi} />
  );

  return (
    <Accordion class="order-item-list">{orderItemsAsComponents}</Accordion>
  );
};

const LabOrderDetail = ({labOrder}) => {
  const copyLabOrderIdAndToast = (e) => {
    navigator.clipboard.writeText(e.currentTarget.id);
    toast("Copied lab order ID to clipboard!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  return (
    <div class="lab-order-detail sub-component">
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Lab Order Id</Form.Label>
            <Form.Control readOnly type="text" value={labOrder.id} />
            <Button onClick={copyLabOrderIdAndToast} class="badge" id={labOrder.id}>
              <strong><FontAwesomeIcon icon={faCopy} /> Copy</strong>
            </Button>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Status</Form.Label>
            <Select options={labOrderStatusOptions} defaultValue={{ label: "Complete", value: 1 }} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Tracking URL</Form.Label>
            <Form.Control type="text" value={labOrder.trackingUrl} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Tracking Number</Form.Label>
            <Form.Control type="text" value={labOrder.trackingNumber} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Creation Date</Form.Label>
            <Form.Control readOnly type="text" value={labOrder.created} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Update</Form.Label>
            <Form.Control readOnly type="text" value={labOrder.lastUpdated} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Estimated Delivery</Form.Label>
            <Form.Control readOnly type="text" value={labOrder.estimatedDelivery} />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Shipping</Form.Label>
            <Form.Control readOnly type="text" value={labOrder.shipping} />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Button block variant="outline-info">Save</Button>
          </Form.Group>
        </Form.Row>
      </Form>
      <OrderItemList orderItems={labOrder.orderItems} />
    </div>
  );
};

export const LabOrderItems = () => {
  return (
    <div class="sub-component">
      <ToastContainer />
      <Tab.Container defaultActiveKey="farnham">
        <Row>
          <Col>
            <Nav variant="tabs" fill justify>
              <Nav.Item>
                <Nav.Link eventKey="farnham"><span>Farnham</span></Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="printGeek"><span>Print Geek</span></Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Tab.Content>
              <Tab.Pane eventKey="farnham">
                <span><LabOrderDetail labOrder={farnhamLabOrder} /></span>
              </Tab.Pane>

              <Tab.Pane eventKey="printGeek">
                <span><LabOrderDetail labOrder={printGeekLabOrder} /></span>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};