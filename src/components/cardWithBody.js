import React from "react";
import { headingStyle, theme, commonCardStyle, textStyle } from "./theme";
import { Card, Col, Container, Row } from "react-bootstrap";
import wimdmill from "../images/windmill.jpg";
import { FaBatteryEmpty, FaMale, FaArrowRight } from "react-icons/fa";
const CardWithBody = () => {
  const listStyle = {
    color: " grey",

    fontFamily: "Arial, sans-serif",
  };
  const iconStyle = {
    color: theme.color,
    backgroundColor: "#f5f5f5",
    borderRadius: "100px",
    padding: "10px",
    margin: "10px",
  };
  return (
    <Container fluid className="py-5">
      <div className="text-center py-5">
        <h2 className="d-inline" style={headingStyle}>
          Scegili il tuo SIRE
        </h2>
      </div>
      <Row className="px-5">
        <Col xs={12} sm={12} md={12} lg={6}>
          <Card className="mx-md-4 my-3" style={commonCardStyle}>
            <Card.Img variant="top" src={wimdmill} />
            <Card.Body>
              <Card.Title style={{ color: theme.color }}>
                S.I.R.E Direct
              </Card.Title>
              <Card.Text style={textStyle}>
                {" "}
                <FaArrowRight size={20} style={{ paddingRight: "5px" }} />
                Sistema Plugin
              </Card.Text>
              <Card.Text style={textStyle}>
                <FaArrowRight size={20} style={{ paddingRight: "5px" }} />
                bulk card's content of the card's content
              </Card.Text>
              <Card.Text style={textStyle}>
                <FaArrowRight size={20} style={{ paddingRight: "5px" }} />
                bulk of the card's content
              </Card.Text>
              <Card.Text style={textStyle}>
                <FaArrowRight size={20} style={{ paddingRight: "5px" }} />
                bulk of the card's content
              </Card.Text>
              <Card.Text style={textStyle}>
                <FaArrowRight size={20} style={{ paddingRight: "5px" }} />
                bulk of the card's content
              </Card.Text>
              <Card.Text className="fw-bold">
                CONSIGLIATO PER: <br />
                <FaBatteryEmpty size={70} style={iconStyle} />
                <FaMale size={70} style={iconStyle} />
              </Card.Text>
              <Card.Title>Scopri le carratteristiche techniche</Card.Title>
              <ul
                className="text-left"
                style={{ paddingLeft: "20px", marginTop: "10px" }}
              >
                <li style={{ color: theme.color }}>
                  <span style={listStyle}>Scopri le carratteristiche</span>
                </li>
                <li style={{ color: theme.color }}>
                  <span style={listStyle}>Scopri le carratteristiche</span>
                </li>
                <li style={{ color: theme.color }}>
                  <span style={listStyle}>Scopri le carratteristiche</span>
                </li>
                <li style={{ color: theme.color }}>
                  <span style={listStyle}>Scopri le carratteristiche</span>
                </li>
                <li style={{ color: theme.color }}>
                  <span style={listStyle}>Scopri le carratteristiche</span>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6}>
          <Card className="mx-md-4 my-3" style={commonCardStyle}>
            <Card.Img variant="top" src={wimdmill} />
            <Card.Body>
              <Card.Title style={{ color: theme.color }}>
                S.I.R.E Direct
              </Card.Title>
              <Card.Text style={textStyle}>
                {" "}
                <FaArrowRight size={20} style={{ paddingRight: "5px" }} />
                Sistema Plugin
              </Card.Text>
              <Card.Text style={textStyle}>
                <FaArrowRight size={20} style={{ paddingRight: "5px" }} />
                bulk card's content of the card's content
              </Card.Text>
              <Card.Text style={textStyle}>
                <FaArrowRight size={20} style={{ paddingRight: "5px" }} />
                bulk of the card's content
              </Card.Text>
              <Card.Text style={textStyle}>
                <FaArrowRight size={20} style={{ paddingRight: "5px" }} />
                bulk of the card's content
              </Card.Text>
              <Card.Text style={textStyle}>
                <FaArrowRight size={20} style={{ paddingRight: "5px" }} />
                bulk of the card's content
              </Card.Text>
              <Card.Text className="fw-bold">
                CONSIGLIATO PER: <br />
                <FaBatteryEmpty size={70} style={iconStyle} />
                <FaMale size={70} style={iconStyle} />
              </Card.Text>
              <Card.Title>Scopri le carratteristiche techniche</Card.Title>
              <ul
                className="text-left"
                style={{ paddingLeft: "20px", marginTop: "10px" }}
              >
                <li style={{ color: theme.color }}>
                  <span style={listStyle}>Scopri le carratteristiche</span>
                </li>
                <li style={{ color: theme.color }}>
                  <span style={listStyle}>Scopri le carratteristiche</span>
                </li>
                <li style={{ color: theme.color }}>
                  <span style={listStyle}>Scopri le carratteristiche</span>
                </li>
                <li style={{ color: theme.color }}>
                  <span style={listStyle}>Scopri le carratteristiche</span>
                </li>
                <li style={{ color: theme.color }}>
                  <span style={listStyle}>Scopri le carratteristiche</span>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardWithBody;
