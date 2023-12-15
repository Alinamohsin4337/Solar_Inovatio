import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import backgroundImg from "../images/windmill.jpg";
import { headingStyle } from "./theme";

const Cards = () => {
  const testimonialStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    paddingTop: "20px",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
    margin: "0 auto",
    marginTop: "-15px",
  };

  return (
    <Container fluid>
      <div className="text-center py-5">
        <h2 className="d-inline" style={headingStyle}>
          Chi Siamo
        </h2>
      </div>
      <Row className="py-5">
        {[1, 2, 3].map((index) => (
          <Col key={index} xs={12} sm={12} md={12} lg={4}>
            <Card
              style={{
                marginBottom: "20px",
                border: "none",
                background: "#f2f2f2",
              }}
            >
              <div
                style={{
                  width: "70%",
                  margin: "0 auto",
                  position: "relative",
                }}
              >
                <img
                  src={backgroundImg}
                  alt={`Overlay ${index}`}
                  style={imgStyle}
                  className="img-fluid"
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center">Card Title</Card.Title>
                <Card.Text className="text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div style={testimonialStyle}>
        <div className="d-flex align-items-center">
          <FaQuoteLeft size={30} className="pb-2" style={{ color: "#777" }} />
          <h5 className="m-0 mx-2">
            Phasellus auctor maximus pretium. Nulla id urna accumsan, efficitur
          </h5>
          <FaQuoteRight size={30} className="pb-2" style={{ color: "#777" }} />
        </div>

        <h5 className="my-3">
          Leo molestie venenatis. Mauris lacinia scelerisque massa a finibus.
          Sed a ultrices neque. Duis nec
        </h5>
        <h5 className="my-2">
          Duis nec est scelerisque, vestibulum mauris ac, efficitur lorem. Nam{" "}
        </h5>
        <h5 className="my-2" style={{ color: "#8bc34a" }}>
          - Cristian Testoni -
        </h5>
      </div>
    </Container>
  );
};

export default Cards;
