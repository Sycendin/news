import React, { Fragment } from "react";

import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
const Navigation = () => {
  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ marginBottom: 10 }}
      >
        <Container>
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="logo"
            width="50"
            height="50"
          ></img>

          <Navbar.Brand style={{ marginLeft: 10 }}>
            {" "}
            <Nav.Link style={{ color: "white" }} href="/news/">
              Game News Site
            </Nav.Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">News</Nav.Link>
              <Nav.Link href="#pricing">Reviews</Nav.Link>
              <NavDropdown title="More" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Terms</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};
export default Navigation;