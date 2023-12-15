import React from "react";
import { commonCardStyle, headingStyle, textStyle, theme } from "./theme";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import {
  FaBatteryEmpty,
  FaMinus,
  FaPhone,
  FaPlus,
  FaVoicemail,
} from "react-icons/fa";
import styled from "styled-components";
const textFreStyle = {
  color: "#333333",
  fontSize: "15px",
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
const Frequently = () => {
  return (
    <Container fluid className="mt-2 ">
      <div className="text-center py-5">
        <h2 className="d-inline" style={headingStyle}>
          Frequently Asked
        </h2>
      </div>
      <Card body className="mx-5 my-3 " style={commonCardStyle}>
        <Card.Title className="mb-0" style={textFreStyle}>
          <FaMinus size={12} className="me-2" /> Dove Si Monta S.I.R.E
        </Card.Title>
        <Card.Body className="mt-0">
          This is some text within a card body.
        </Card.Body>
      </Card>
      <Card body className="mx-5 my-3" style={commonCardStyle}>
        <Card.Title style={textFreStyle}>
          <FaPlus size={12} className="me-2" /> Dove Si Monta S.I.R.E
        </Card.Title>
      </Card>
      <Card body className="mx-5 my-3" style={commonCardStyle}>
        <Card.Title style={textFreStyle}>
          <FaPlus size={12} className="me-2" /> Dove Si Monta S.I.R.E
        </Card.Title>
      </Card>
      <Card body className="mx-5 my-3" style={commonCardStyle}>
        <Card.Title style={textFreStyle}>
          <FaPlus size={12} className="me-2" /> Dove Si Monta S.I.R.E
        </Card.Title>
      </Card>
      <Card body className="mx-5 my-3" style={commonCardStyle}>
        <Card.Title style={textFreStyle}>
          <FaPlus size={12} className="me-2" /> Dove Si Monta S.I.R.E
        </Card.Title>
      </Card>
      <Card body className="mx-5 my-3" style={commonCardStyle}>
        <Card.Title style={textFreStyle}>
          <FaPlus size={12} className="me-2" /> Dove Si Monta S.I.R.E
        </Card.Title>
      </Card>
      <div className="text-center my-5 ">
        <GreenButton>Collegati al sole</GreenButton>
      </div>
      <div className="text-center ">
        <h2 className="d-inline" style={headingStyle}>
          CONTATTACI
        </h2>
      </div>
      <Row className="px-5">
        <Col xs={12} sm={12} md={12} lg={4}>
          <Card className="my-5">
            <Card.Body className="py-4 ">
              <Card.Text className="px-2 d-flex " style={textStyle}>
                <div style={{ alignSelf: "flex-start" }}>
                  <FaBatteryEmpty
                    size={43}
                    style={{ color: theme.color }}
                    className="me-4"
                  />
                </div>
                <div>
                  Bulk of the card's content. the bulk of the card's
                  content.Bulk of the card's
                </div>
              </Card.Text>
              <Card.Text className="px-2 d-flex " style={textStyle}>
                <div style={{ alignSelf: "flex-start" }}>
                  <FaVoicemail
                    size={43}
                    style={{ color: theme.color }}
                    className="me-4"
                  />
                </div>
                <div className="pt-2">Email @emial.com</div>
              </Card.Text>
              <Card.Text className="px-2 d-flex pt-3 " style={textStyle}>
                <div style={{ alignSelf: "flex-start" }}>
                  <FaPhone
                    size={30}
                    style={{ color: theme.color }}
                    className="me-4"
                  />
                </div>
                <div className="pt-2">0300765778</div>
              </Card.Text>
              <hr />
              <Card.Text style={textStyle}>
                Bulk of the card's content. the bulk of the card's content.Bulk
                of the card's
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={8}>
          <Card className="my-5">
            <Card.Body className="py-5">
              <div>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="firstName">
                        <Form.Control
                          type="text"
                          placeholder="Enter your first name"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="lastName">
                        <Form.Control
                          type="text"
                          placeholder="Enter your last name"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your message"
                    />
                  </Form.Group>

                  <div className="float-end">
                    <GreenButton>Collegati al sole</GreenButton>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Frequently;
