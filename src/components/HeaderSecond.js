import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { textStyle } from "./theme";

const HeaderSecond = () => (
  <Navbar
    expand="lg"
    className="bg-white pt-0 d-none d-lg-flex"
    style={{ color: "#d3d3d3", fontSize: "1.2rem" }}
  >
    <Container>
      <Navbar.Brand href="#home" className="px-5" style={{ color: "#8bc34a" }}>
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="#features" className="px-4" style={textStyle}>
            Chi Siamo
          </Nav.Link>
          <Nav.Link href="#pricing" className="px-4" style={textStyle}>
            S.I.R.E
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets" className="px-4" style={textStyle}>
            SIRE Features
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            href="#memes"
            className="px-4"
            style={textStyle}
          >
            Why SIRE?
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            href="#memes"
            className="px-4"
            style={textStyle}
          >
            SIRE Product
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            href="#memes"
            className="px-4"
            style={textStyle}
          >
            How it works?
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default HeaderSecond;
