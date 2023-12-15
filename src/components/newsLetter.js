import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import backgroundImg from "../images/windmill.jpg";
import styled from "styled-components";
import { FaLocationArrow } from "react-icons/fa";

const Newsletter = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    position: "relative",
  };
  const GreenButton = styled(Button)`
    background-color: #8bc34a;
    color: white;
    border-color: #8bc34a;

    &:hover {
      background-color: #689f38;
      border-color: #689f38;
    }
  `;

  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    content: '""',
    backgroundColor: "rgba(139, 195, 74, 0.9)",
    height: "100%",
  };

  const textStyle = {
    color: "white",
  };

  const containerStyle = {
    position: "relative",
    height: "100%",
    maxWidth: "100%",
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div>

      <Container style={containerStyle}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6} className="p-5">
            <div style={textStyle} className="px-5">
              <h2>Newsletter</h2>
              <h5>Your newsletter description goes here.</h5>
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6} className="p-5">
            <Form>
              <Row className="mb-3">
                <Col xs={12} sm={12} md={8} className="mb-3 mb-md-0">
                  <div className="input-group pt-lg-3">
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      style={{
                        borderTopLeftRadius: "20px",
                        borderBottomLeftRadius: "20px",
                      }}
                    />
                    <GreenButton
                      style={{
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "20px",
                      }}
                    >
                      <FaLocationArrow />
                    </GreenButton>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newsletter;
