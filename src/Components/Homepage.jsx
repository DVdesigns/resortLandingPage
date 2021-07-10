import React, {Component} from "react";
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dining from "./Dining.jsx";
import Header from "./Header.jsx";
import Example from "./Intro.jsx";
import Booking from "./Bookings.jsx";
import RecreationWellness from "./RecreationWellness.jsx";
import Footer from "./Footer.jsx";

function Homepage(){
  return (
  <div>
  <Header />
  <Example />
  <Dining />
  <Booking />
  <RecreationWellness />
  <Footer />
  </div>
)
}
export default Homepage;
