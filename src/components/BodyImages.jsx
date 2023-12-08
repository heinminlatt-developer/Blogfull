import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import one from "../assets/img/one.png";
import two from "../assets/img/two.png";
import three from "../assets/img/three.png";
import four from "../assets/img/four.png";
import five from "../assets/img/five.png";
import six from "../assets/img/six.png";
import seven from "../assets/img/seven.png";
import eight from "../assets/img/eight.png";
import nine from "../assets/img/nine.png";
import ten from "../assets/img/ten.png";

function BodyImages() {
  return (
    <Container>
      <Col className='colOne'>
        <Row xs={6} md={4}>
          <Image src={one} rounded />
        </Row>
        <Row xs={6} md={4}>
          <Image src={three} rounded />
        </Row>
        <Row xs={6} md={4}>
          <Image src={five} rounded />
        </Row>
        <Row xs={6} md={4}>
          <Image src={seven} rounded />
        </Row>
        <Row xs={6} md={4}>
          <Image src={nine} rounded />
        </Row>
      </Col>
      <Col className='colTwo'>
        <Row xs={6} md={4}>
          <Image src={two} rounded />
        </Row>
        <Row xs={6} md={4}>
          <Image src={four} rounded />
        </Row>
        <Row xs={6} md={4}>
          <Image src={six} rounded />
        </Row>
        <Row xs={6} md={4}>
          <Image src={eight} rounded />
        </Row>
        <Row xs={6} md={4}>
          <Image src={ten} rounded />
        </Row>
      </Col>
    </Container>
  );
}

export default BodyImages;