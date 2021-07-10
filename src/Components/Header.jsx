import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Switch,
  Link, NavLink
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


// Sizing options
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';

// canvas NPM package for pretty graphics --> https://www.npmjs.com/package/canvas - INSTALLED
// CSS style
import "./Header.css";

// import essential page links
import Intro from "../ComponentPages/Intro.jsx";
import Booking from "../ComponentPages/Bookings.jsx";
import RecreationWellness from "../ComponentPages/RecreationWellness.jsx";
import Dining from "../ComponentPages/Dining.jsx";
import Reviews from "../ComponentPages/Reviews.jsx";

//import image

//import fdl from "../Assets/fluerdelis3.png";

/*
<Col><NavLink to="/Dining">Go to Dining </NavLink></Col>
<Col><NavLink to="/reviews">Go to Reviews </NavLink></Col>
<Col><NavLink to="/rec">Go to Recereation from Header</NavLink></Col>
<Col><NavLink to="/booking"> Go to Booking from Header </NavLink></Col>
*/



function Header() {
  return (
<div class="sticky">
  <Container>

    <Row>
    <Col>
    <Navbar.Brand> <NavLink to="/"> THE LOGO HOTEL </NavLink></Navbar.Brand>
    </Col>
    </Row>

    <Row className="navBarStyle">
      <Col><NavLink to="/Dining"> Dining + Events </NavLink></Col>
      <Col><NavLink to="/reviews"> Our Story </NavLink></Col>
      <Col><NavLink to="/rec"> Wellness + Recereation </NavLink></Col>
      <Col><NavLink to="/booking"> Booking + Reservations </NavLink></Col>
    </Row>


  </Container>
</div>
  )
}

export default Header;
