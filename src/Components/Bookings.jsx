import React from 'react';
import ReactDOM from 'react-dom';
import './Booking.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pic1 from "./villa.png";
import pic2 from "./room.png";

function Booking() {
  return (
<div className="bookingContent">
<Container>
      <Row>
        <Col class="col-lg">
          <Image className="putToStart" src={pic2} alt="room" fluid />
        </Col>
        <Col class="col-lg">
        <h1>Book Now</h1>
        <p>
        Ut congue sem a risus lobortis, vel vulputate mauris dignissim. Curabitur suscipit urna ipsum,
        dignissim tincidunt. Fusce convallis purus nisl, eu pretium velit ullamcorper a.
      </p></Col>
      </Row>
      <Row>

      </Row>
</Container>
</div>
)
}

export default Booking;
