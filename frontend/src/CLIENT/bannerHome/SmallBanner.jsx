import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./smallbanner.css";

const SmallBanner = () => {
  return (
    <div className="div-with-background border mt-5">
      <Container>
        <Row className="quote-container mt-5 me-1">
          <h1 className="text-color">"Happiness is only real when shared"</h1>
          <p className="text-color">― Jon Krakauer, Into the Wild</p>
        </Row>
      </Container>
    </div>
  );
};

export default SmallBanner;
