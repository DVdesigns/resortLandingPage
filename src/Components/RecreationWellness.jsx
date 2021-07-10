import React from 'react';
import ReactDOM from 'react-dom';
import './RecreationWellness.css';
import {
  HashRouter,
  Route,
  Switch,
  Link, NavLink
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

import pic1 from "./ImageGrid/Pic1.png";
import pic2 from "./ImageGrid/Pic2.png";
import pic3 from "./ImageGrid/pic3.png";
import pic4 from "./ImageGrid/pic4.png";
import pic5 from "./ImageGrid/pic5.png";
import pic6 from "./ImageGrid/pic5.png";
import pic7 from "./ImageGrid/pic7.png";
import pic8 from "./ImageGrid/pic8.png";
import pic9 from "./ImageGrid/pic9.png";
import pic10 from "./ImageGrid/pic10.png";
import pic11 from "./ImageGrid/pic11.png";
import pic12 from "./ImageGrid/pic12.png";



function RecreationWellness(){

return (

<div>
<Container>
<Form className="leftandright formDisplay">
  <Row><Col><Form.Group controlId="formBasicEmail">
    <h1>
      Join our email list to keep up with LOGO HOTEL events
    </h1>
    <Form.Control type="email" placeholder="Enter email" />
    <p>
      We'll never share your email with anyone else.
    </p>

  </Form.Group>
</Col></Row>
</Form>
</Container>

<div class="photoMargins">
<Container class="leftandright">
<Row >

  <Col class="col-sm-4">
    <div class="imagePadding"><Image src={pic1} fluid /></div>
    <div class="imagePadding"><Image src={pic2} fluid /></div>
    <div class="imagePadding"><Image src={pic3} fluid /></div>
    <div class="imagePadding"><Image src={pic4} fluid /></div>
  </Col>

  <Col class="col-sm-4">
    <div class="imagePadding"><Image src={pic5} fluid /></div>
    <div class="imagePadding"><Image src={pic6} fluid /></div>
    <div class="imagePadding"><Image src={pic7} fluid /></div>
  </Col>

  <Col class="col-sm-4">
    <div class="imagePadding"><Image src={pic8} fluid /></div>
    <div class="imagePadding"><Image src={pic9} fluid /></div>
    <div class="imagePadding"><Image src={pic11} fluid /></div>
    <div class="imagePadding"><Image src={pic12} fluid /></div>
  </Col>

</Row>
</Container>
</div>
</div>

)

}

export default RecreationWellness;
