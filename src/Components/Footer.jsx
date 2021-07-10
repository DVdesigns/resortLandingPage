import React from "react";
import ReactDOM from "react-dom";
import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';




// Sizing options
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import "./Footer.css";

function Footer() {
  return (<div class="sticky">
    <Container>
      <Row>
        <Col>
          <Navbar.Brand>
            <NavLink to="/">
              THE LOGO HOTEL
            </NavLink>
          </Navbar.Brand>
        </Col>
      </Row>

      <Row className="navBarStyle">
        <Col>
          <NavLink to="/">
            About
          </NavLink>
        </Col>
        <Col>
          <NavLink to="/">
            Contact
          </NavLink>
        </Col>
        <Col>
          <NavLink to="/">
            Careers
          </NavLink>
        </Col>
        <Col>
          <NavLink to="/">
            Legal</NavLink>
        </Col>

      </Row>

    </Container>

  </div>)
}

export default Footer;
