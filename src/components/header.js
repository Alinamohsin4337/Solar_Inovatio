import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaLeaf } from "react-icons/fa";
import { textStyle, theme } from "./theme";
import styled from "styled-components";

const GreenIcon = styled.div`
  color: ${theme.color};
  display: flex;
  align-items: center;
  padding-right: 5px;
`;

const GreenButton = styled(Button)`
  background-color: ${theme.color};
  color: white;
  border-color: ${theme.color};

  &:hover {
    background-color: #689f38;
    border-color: #689f38;
  }
`;

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-white pb-0">
        <Container>
          <Navbar.Brand href="#home" className="mr-auto" style={textStyle}>
            <FaLeaf size={30} style={{ color: theme.color }} className="me-2" />
            solar inovatio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                href="#phone"
                className="pt-2 pe-5 d-flex align-items-center"
                style={textStyle}
              >
                <GreenIcon>
                  <FaPhone />
                </GreenIcon>
                0235194420
              </Nav.Link>
              <Nav.Link
                href="#mail"
                className="pt-2 pe-5 d-flex align-items-center"
                style={textStyle}
              >
                <GreenIcon>
                  <FaEnvelope />
                </GreenIcon>
                info@solarinnovatio.com
              </Nav.Link>
              <Nav.Link href="#contact">
                <GreenButton>Contact Us</GreenButton>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr />
    </>
  );
};

export default Header;
