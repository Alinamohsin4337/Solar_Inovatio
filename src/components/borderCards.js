import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { theme, headingStyle, textStyle } from "./theme";
import { FaBatteryEmpty, FaWarehouse, FaBuilding, FaSun } from "react-icons/fa";
import styled from "styled-components";
const dashedCardStyle = {
  borderTop: `2px solid ${theme.color}`,
  borderBottom: `2px dashed ${theme.color}`,
  borderLeft: `2px dashed ${theme.color}`,
  borderRight: `2px dashed ${theme.color}`,
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
  padding: "20px",
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

const BorderCard = () => {
  return (
    <Container fluid style={{ backgroundColor: "#f5f5f5" }} className="py-5">
      <div className="text-center py-5">
        <h2 className="d-inline" style={headingStyle}>
          Scegili il tuo SIRE
        </h2>
      </div>
      <Row className="px-5">
        <Col xs={12} sm={12} md={12} lg={3}>
          <Card
            className="d-flex justify-content-around my-5"
            style={{
              ...dashedCardStyle,

              backgroundColor: "#fff",
              borderColor: "#8bc34a",
            }}
          >
            <Card.Body className="text-center">
              <FaBatteryEmpty size={30} style={{ color: theme.color }} />
              <Card.Title className="text-center px-3 pt-2">
                Richiedi un Preventio
              </Card.Title>
              <Card.Text className="text-center px-5" style={textStyle}>
                the bulk of the card's content. the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={3}>
          <Card
            className="d-flex justify-content-around my-5"
            style={{
              ...dashedCardStyle,
              backgroundColor: "#fff",
              borderColor: "grey",
            }}
          >
            <Card.Body className="text-center ">
              <FaBuilding size={30} style={{ color: "grey" }} />
              <Card.Title className="text-center pt-2 px-3">
                Verfica la compatibilita
              </Card.Title>
              <Card.Text className="text-center px-5" style={textStyle}>
                the bulk of the card's content. the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={3}>
          <Card
            className="d-flex justify-content-around my-5"
            style={{
              ...dashedCardStyle,
              backgroundColor: "#fff",
              borderColor: "black",
            }}
          >
            <Card.Body className="text-center ">
              <FaWarehouse size={30} style={{ color: "black" }} />

              <Card.Title className="text-center pt-2 px-3">
                Richiedi un Preventio
              </Card.Title>
              <Card.Text className="text-center px-5" style={textStyle}>
                the bulk of the card's content. the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={3}>
          <Card
            className="d-flex justify-content-around my-5"
            style={{
              ...dashedCardStyle,
              borderColor: "yellow",
              backgroundColor: "#fff",
            }}
          >
            <Card.Body className="text-center ">
              <FaSun size={30} style={{ color: "yellow" }} />
              <Card.Title className="text-center pt-2 px-3">
                Verfica la compatibilita
              </Card.Title>
              <Card.Text className="text-center px-5" style={textStyle}>
                the bulk of the card's content. the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="text-center ">
        <GreenButton>Collegati al sole</GreenButton>
      </div>
    </Container>
  );
};

export default BorderCard;
