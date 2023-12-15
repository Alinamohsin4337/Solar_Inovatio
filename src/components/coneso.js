import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { headingStyle, theme } from "./theme";
import {
  FaBatteryFull,
  FaClock,
  FaLeaf,
  FaList,
  FaMeteor,
  FaShieldVirus,
} from "react-icons/fa";

const Coneso = () => {
  const iconStyle = {
    color: theme.color,
    backgroundColor: "white",
    borderColor: "green",
    borderRadius: "100%",
    border: "3px solid",
    padding: "10px",
    margin: "10px",
  };
  return (
    <Container className="py-lg-5">
      <div className="text-center py-lg-5">
        <h2 className="d-inline" style={headingStyle}>
          Connesso, Intelligente
        </h2>
      </div>
      <Row className=" align-items-center py-5">
        <Col xs={12} md={6}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="py-lg-3 d-flex justify-content-start">
              <div>
                <FaLeaf size={50} style={iconStyle} className="me-4 mt-3" />
              </div>
              <div>
                <h4>Versatile</h4>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>
            </div>
            <div className="py-lg-3 d-flex justify-content-start">
              <div>
                <FaMeteor size={50} style={iconStyle} className="me-4 mt-3" />
              </div>
              <div>
                <h4>Automatizato</h4>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>
            </div>
            <div className="py-lg-3 d-flex justify-content-start">
              <div>
                <FaShieldVirus
                  size={50}
                  style={iconStyle}
                  className="me-4 mt-3"
                />
              </div>
              <div>
                <h4>Effucentia</h4>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="py-lg-3 d-flex justify-content-start">
              <div>
                <FaBatteryFull
                  size={50}
                  style={iconStyle}
                  className="me-4 mt-3"
                />
              </div>
              <div>
                <h4>Automatizato</h4>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>
            </div>
            <div className="py-lg-3 d-flex justify-content-start">
              <div>
                <FaList size={50} style={iconStyle} className="me-4 mt-3" />
              </div>
              <div>
                <h4>Connesso</h4>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>
            </div>
            <div className="py-lg-3 d-flex justify-content-start">
              <div>
                <FaClock size={50} style={iconStyle} className="me-4 mt-3" />
              </div>
              <div>
                <h4>Resistente</h4>

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Coneso;
