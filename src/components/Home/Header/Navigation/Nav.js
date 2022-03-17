import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../../../actions/actions";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
const Navigation = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer);
  const changeCounter = () => {
    dispatch(increment(1));
  };
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            width="100"
            height="100"
          ></img>
          <Navbar.Brand href="#home">Game News Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};
export default Navigation;
