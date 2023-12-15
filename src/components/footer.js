import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Grey from "../images/grey.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLeaf,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
  FaVoicemail,
} from "react-icons/fa";
import { theme } from "./theme";

const Footer = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Grey})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    content: '""',
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  };

  const textStyle = {
    color: "white",
  };
  const listStyle = {
    paddingBottom: "8px",
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
      <Container style={containerStyle} className="p-5">
        <Row>
          <Col xs={12} sm={12} md={12} lg={3} className="p-lg-5">
            <div>
              <h5 style={textStyle}>
                <FaLeaf
                  size={30}
                  style={{ color: theme.color }}
                  className="me-2"
                />
                solar inovatio
              </h5>
              <p style={textStyle} className="pt-3">
                Sistemi fotovoltaici intelligenti ad uso residenziale, anche in
                assenza di tetto. La tua fonte d'energia, gratuita e
                sostenibile.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={3} className="p-lg-5">
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={listStyle}>
                <h5>Quick Links</h5>
              </li>
              <li style={listStyle}>
                <span>Home</span>
              </li>
              <li style={listStyle}>
                <span>Chi Siamo</span>
              </li>
              <li style={listStyle}>
                <span>S.I.R.E</span>
              </li>
              <li style={listStyle}>
                <span>Sire Features</span>
              </li>
              <li style={listStyle}>
                <span>Why Sire?</span>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={12} lg={2} className="p-lg-5">
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={listStyle}>
                <h5>Useful Links</h5>
              </li>
              <li style={listStyle}>
                <span>Home</span>
              </li>
              <li style={listStyle}>
                <span>Chi Siamo</span>
              </li>
              <li style={listStyle}>
                <span>S.I.R.E</span>
              </li>
              <li style={listStyle}>
                <span>Sire Features</span>
              </li>
              <li style={listStyle}>
                <span>Why Sire?</span>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className="p-lg-5">
            <ul style={{ listStyle: "none", padding: 0 }} className="ps-lg-5">
              <li style={listStyle}>
                <h4>Contact Us</h4>
              </li>
              <li style={{ ...listStyle, paddingBottom: "20px" }}>
                <FaLocationArrow size={25} style={{ paddingRight: "8px" }} />
                Sistemi fotovoltaici intelligenti ad usasffd fdsfsdf
              </li>
              <li style={{ ...listStyle, paddingBottom: "20px" }}>
                <FaVoicemail size={30} style={{ paddingRight: "8px" }} />
                Email@email.com
              </li>

              <li style={listStyle}>
                <FaPhone size={30} style={{ paddingRight: "8px" }} />
                9876655677
              </li>
            </ul>
          </Col>
          <hr style={textStyle} />
        </Row>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={listStyle}>All Rights Reserved</p>
          <div style={{ display: "flex" }}>
            <FaFacebook
              size={30}
              style={{ ...listStyle, paddingRight: "8px" }}
            />
            <FaInstagram
              size={30}
              style={{ ...listStyle, paddingRight: "8px" }}
            />
            <FaTwitter
              size={30}
              style={{ ...listStyle, paddingRight: "8px" }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
