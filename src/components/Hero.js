import React from "react";
import { Container } from "react-bootstrap";
import backgroundImg from "../images/windmill.jpg";

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    content: '""',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  const textStyle = {
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
  };

  const containerStyle = {
    position: "relative",
    height: "80vh",
    maxWidth: "100%",
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div>
      <Container style={containerStyle}>
        <div style={textStyle}>
          <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>
            || tuo accesso al sole
          </h1>
          <p style={{ fontSize: "1.3rem" }} className="pt-3">
            Sistemi fotovoltaici intelligenti ad uso residenziale, anche in
            assenza di tetto. La tua fonte d'energia, gratuita e sostenibile.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
