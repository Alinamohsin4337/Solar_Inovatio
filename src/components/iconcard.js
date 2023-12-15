import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { headingStyle, theme } from "./theme";
import { FaHandPaper, FaCar, FaBuilding } from "react-icons/fa";

const commonCardStyle = {
  border: `2px solid white`,
  borderRadius: "10px",
  boxShadow: `0 4px 8px rgba(0, 0, 0, 0.4)`,
};

const IconCard = () => {
  return (
    <Container fluid>
      <div className="text-center py-5">
        <h2 className="d-inline" style={headingStyle}>
          Perche S.I.R.E
        </h2>
      </div>
      <Row className="px-5">
        <Col xs={12} sm={12} md={12} lg={4}>
          <Card
            className="d-flex justify-content-around my-5"
            style={{
              ...commonCardStyle,
              backgroundColor: "#fff",
            }}
          >
            <Card.Body className="text-center">
              <FaHandPaper size={80} style={{ color: theme.color }} />
              <Card.Title className="text-center pt-5">Card Title</Card.Title>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <Card
            className="d-flex justify-content-around my-5"
            style={{
              ...commonCardStyle,
              backgroundColor: "#fff",
            }}
          >
            <Card.Body className="text-center">
              <FaCar size={80} style={{ color: theme.color }} />
              <Card.Title className="text-center pt-5">Card Title</Card.Title>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <Card
            className="d-flex justify-content-around my-5"
            style={{
              ...commonCardStyle,
              backgroundColor: "#fff",
            }}
          >
            <Card.Body className="text-center">
              <FaBuilding size={80} style={{ color: theme.color }} />
              <Card.Title className="text-center pt-5">Card Title</Card.Title>
              <Card.Text className="text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default IconCard;
