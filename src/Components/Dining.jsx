import React from 'react';
import ReactDOM from 'react-dom';
import "./Dining.css";
import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import DiningSection from "../ComponentPages/Dining.jsx";

import pic1 from "./dining1.png";
import pic3 from "./dining3.png";
import pic2 from "./dining2.png";
import pic4 from "./dining4.png";

function Dining() {
  return (
    <div class="diningLeft diningsDisplay">
      <Container fluid>
      <Row >
        <Col class="col-lg-6">
          <Carousel fade>
            <Carousel.Item  interval={2000}>
              <Image className="img-responsive" src={pic1} alt="First slide" fluid />
            </Carousel.Item>
            <Carousel.Item  interval={2000}>
              <Image className="img-responsive" src={pic2} alt="Second slide" fluid />
              </Carousel.Item>
            <Carousel.Item interval={2000}>
              <Image className="img-responsive" src={pic3} alt="Third slide" fluid />
            </Carousel.Item>
          </Carousel>
       </Col>
     <Col class="col-lg-6">
        <NavLink to="/Dining"><h1> World Class Dining </h1></NavLink>
        <br />
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <NavLink to="/Dining"><h1>Make a reservation</h1></NavLink>
      </Col>
      </Row>
    </Container>
</div>)}
export default Dining;
