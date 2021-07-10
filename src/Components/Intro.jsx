import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import pic1 from './lobbyCouple.jpg';
import pic2 from './pool.jpg';
import pic3 from './poolModel.jpg';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';

function Example(props)
{
return (
      // put carosel in box and change the color to Rose Ebony
<Carousel fade>
<Carousel.Item interval={2000}>
  <img
    className="d-block w-100 img-responsive"
    src = {pic1}
    alt="First slide"
  />
  <Carousel.Caption>
    <h3>5 Star Amenities</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={2000}>
  <img
    className="d-block w-100 img-responsive"
    src = {pic2}
    alt="Second slide"
  />

  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={2000}>
  <img
    className="d-block w-100 img-responsive"
    src = {pic3}
    alt="Third slide"
  />

  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>
    )
}
export default Example;
