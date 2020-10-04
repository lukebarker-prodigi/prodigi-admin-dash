import React from 'react';
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image
} from 'react-bootstrap';

export default class ProdigiAdminRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home"><Image src={window.location.origin + "/prodigi-logo.png"} alt="Prodigi Admin Dashboard" height="64px"></Image></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/merchant">Merchants</Nav.Link>
            <Nav.Link href="/order">Orders</Nav.Link>
            <Nav.Link href="/invoice">Invoices</Nav.Link>
            <Nav.Link href="/issue">Issues</Nav.Link>
            <Nav.Link href="/sku">Magic SKU Box</Nav.Link>
            <Nav.Link href="/allocation">PBAS</Nav.Link>
            <Nav.Link href="/report">CS Reports</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Order ID/etc." className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}