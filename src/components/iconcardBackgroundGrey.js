import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { theme, commonCardStyle } from "./theme";
import { FaBatteryEmpty, FaLeaf, FaBuilding, FaList } from "react-icons/fa";

const IconCardBack = () => {
  return (
    <Container fluid style={{ backgroundColor: "#f5f5f5" }}>
      <Row className="px-5">
        <Col xs={12} sm={12} md={12} lg={3}>
          <Card
            className="d-flex justify-content-around my-5"
            style={{
              ...commonCardStyle,
              backgroundColor: "#fff",
            }}
          >
            <Card.Body className="text-center">
              <FaBatteryEmpty size={30} style={{ color: theme.color }} />
              <Card.Title className="text-center pt-2">110%</Card.Title>
              <Card.Text className="text-center">
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={3}>
          <Card
            className="d-flex justify-content-around my-5"
            style={{
              ...commonCardStyle,
              backgroundColor: "#fff",
            }}
          >
            <Card.Body className="text-center">
              <FaBuilding size={30} style={{ color: theme.color }} />
              <Card.Title className="text-center pt-2">65 %</Card.Title>
              <Card.Text className="text-center">
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={3}>
          <Card
            className="d-flex justify-content-around my-5"
            style={{
              ...commonCardStyle,
              backgroundColor: "#fff",
            }}
          >
            <Card.Body className="text-center">
              <FaLeaf size={30} style={{ color: theme.color }} />

              <Card.Text className="text-center pt-3">
                Card Title the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={3}>
          <Card
            className="d-flex justify-content-around my-5"
            style={{
              ...commonCardStyle,
              backgroundColor: "#fff",
            }}
          >
            <Card.Body className="text-center">
              <FaList size={30} style={{ color: theme.color }} />
              <Card.Text className="text-center pt-3">
                Card Title the bulk of the cards content.           </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default IconCardBack;
