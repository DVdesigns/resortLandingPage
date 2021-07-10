import './Review.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  NavLink
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


import ReviewsSection from "../ComponentPages/Reviews.jsx";

function Reviews(){

return (
  <div >
  <h1><NavLink to="/reviews"> Go to Reviews from Reviews</NavLink></h1>
  <h1> Reviews and photos Info Section </h1>
  Simple sliding picutures of food in one half of div, other half a mini div with lorem ipsum about the DINING and a reservation button
  </div>
)
}

export default Reviews;
