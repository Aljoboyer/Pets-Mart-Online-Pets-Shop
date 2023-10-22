import React from 'react';
import { Col, Row } from 'react-bootstrap';
import free from '../../../../Images/new/freesame.png';
import delivery from '../../../../Images/new/hp-shop-your-way-rd.png';
import curbside from '../../../../Images/new/curbside.png';

const WhatUrPetNeed = () => {
    return (
        <Row className="container mx-auto g-2 p-4 mt-4">
            <h3 className='regulartext regularcolor fw-bold text-center mt-4 mb-4'>What your pet needs, when they need it.</h3>
          <Col className='d-flex mt-4' lg={4} md={6} sm={12}>
              <img src={free} alt="" />
              <div className='text-center ms-2'><h5>Free Same-Day Delivery</h5>
              <p>Order by 2pm local time to get free delivery on orders $35+ today.</p></div>
          </Col>
          <Col className='d-flex mt-4' lg={4} md={6} sm={12}>
          <img src={delivery} alt="" />
              <div className='text-center ms-2'><h5>Repeat Delivery</h5>
              <p>35% off your first order plus 5% off all future orders.</p></div>
          </Col>
          <Col className='d-flex mt-4' lg={4} md={6} sm={12}>
          <img src={curbside} alt="" />
         <div className='text-center ms-2'> <h5>Curbside Pickup</h5>
              <p>15% off your online order of $50+. Available at most locations.</p></div>
          </Col>
        </Row>
    );
};

export default WhatUrPetNeed;