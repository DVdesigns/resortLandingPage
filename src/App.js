
import './App.css';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import BookingSection from "./ComponentPages/Bookings.jsx";
import RecreationWellnessSection from "./ComponentPages/RecreationWellness.jsx";
import DiningSection from "./ComponentPages/Dining.jsx";
import ReviewsSection from "./ComponentPages/Reviews.jsx";
import Homepage from "./Components/Homepage.jsx";

const Random404  = () => (
  <div>
  A Random 404 page
  </div>
)

const testHomepage = () => <Homepage />;

function App() {
  return (
    <HashRouter basename='/'>
    <Switch>
      <Route exact path= "/" component={testHomepage} />
      <Route path="/dining" component={DiningSection} />
    <Route path="/reviews" component={ReviewsSection} />
    <Route path="/rec" component={RecreationWellnessSection} />
    <Route path="/booking" component={BookingSection} />
    <Route component={Random404} />
    </Switch>
    </HashRouter>
  );
}

export default App;
