// Footer.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Col>
          <Row md={7}>
            <p>&copy; 2023 Your Company Name</p>
          </Row>
          <Row md={4} className="text-right">
            <p>Contact: your.email@example.com</p>
          </Row>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
