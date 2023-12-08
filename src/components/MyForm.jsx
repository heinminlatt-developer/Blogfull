import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import one from "../assets/img/one.png";
import two from "../assets/img/two.png";
import three from "../assets/img/three.png";
import eng from "../assets/img/eng.png";
import engdown from "../assets/img/engdown.png";
import ten from "../assets/img/ten.png";

function MyForm() {
  return (
    <div>
      <h1>Hein Min Latt</h1>
      <Container className="formContainer">
        <Row className="formRowContainer">
          <Col xs={6} md={4}>
            <Image src={two} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src={three} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src={one} rounded />
          </Col>
        </Row>
        <Row className="formRowContainer">
          <Col xs={6} md={4}>
            <Image src={engdown} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src={eng} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src={ten} rounded />
          </Col>
        </Row>
      </Container>
      <div className="formContainer">
        <h1>Sign up for the newsletter</h1>
        <p>If you want relevant updates occasionally, sign up for the <br/>private newsletter. Your email is never shared. </p>
        <div className="formInput">
          <Form.Control size="lg" type="text" placeholder="Large text" />
        </div>
        <div className="formButton">
          <Button variant="primary">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default MyForm;
