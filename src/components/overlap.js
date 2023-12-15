import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import React from "react";
import background from "../images/backsatground.jpg";
import sat from "../images/sat.jpg";
import solar from "../images/solar.jpg";
import "../App.css";
import { headingStyle, textStyle } from "./theme";

const Overlap = () => {
  const imgStyle = {
    width: "40%",
    height: "40vh",
    borderRadius: "5px",
  };

  const overlayImgStyle = {
    width: "40%",
    borderRadius: "5px",
    position: "absolute",
    left: "0",
    bottom: "0",
    transform: "translateY(140px) translateX(121px)",
    paddingLeft: "10px",
    transition: "transform 0.5s ease",
    height: "40vh",
  };
  return (
    <Container
      fluid
      style={{ backgroundImage: `url(${background})`, height: "95vh" }}
      className="my-5"
    >
      <Row>
        <Col
          xs={12}
          md={6}
          style={{ position: "relative" }}
          className="ps-lg-5"
        >
          <Image
            src={sat}
            rounded
            fluid
            style={imgStyle}
            className="mt-5 ms-lg-2"
          />
          <Image
            src={solar}
            rounded
            fluid
            style={{
              ...imgStyle,
              ...overlayImgStyle,
              marginBottom: "50px",
              marginLeft: "20px",
            }}
          />
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center ps-0 my-5"
        >
          <h1 style={{ color: "#8bc34a" }} className="ps-3 pt-5">
            S.I.R.E
          </h1>
          <div className="py-1 ps-1">
            <h2 className="d-inline ps-2" style={headingStyle}>
              Connesso, Intelligente
            </h2>
          </div>
          <div>
            <p style={textStyle} className="pt-4 ps-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum industry.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Overlap;
