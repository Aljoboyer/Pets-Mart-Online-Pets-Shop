import React from 'react';
import { Col, Row } from 'react-bootstrap';
import daysone from '../../../Images/new/daysone.png'
import daysfour from '../../../Images/new/daysfour.png'
import dayseven from '../../../Images/new/dayseven.png'
import dayslast from '../../../Images/new/dayslast.png'

const RightFood = () => {
    return (
        <Row className='container-fluid my-4 right_row'>
            <Row className='d-flex justify-content-center text-center my-4'>
                <Col lg={7} md={10} sm={12}>
                  <h1 className='regularcolor regulartext fw-bold fs-1'>Found the right food fast? Now take it slow.</h1>
                  <p className='regularcolor'>The first thing you want is for your pet to eat well. The last thing you want to do is <br /> rush it. Help prevent tummy troubles by introducing their new food gradually.</p>
                </Col>
            </Row>
            <Row className='my-4 g-2 gap-2 container text-center justify-content-center p-4 '>
              <Col className='right_food_colam allform' lg={3} md={6}  sm={12}>
                  <img src={daysone} alt="" />
                  <h4 className='fw-bold my-2 regularcolor'>Days 1-3</h4>
                  <h4 className='fw-bold my-2'>25% new food</h4>
              </Col>
              <Col className='right_food_colam allform' lg={3} md={6}  sm={12}>
                 <img src={daysfour} alt="" />
                  <h4 className='fw-bold my-2 regularcolor'>Days 4-6</h4>
                  <h4 className='fw-bold my-2'>50% new food</h4>
              </Col>
              <Col className='right_food_colam allform' lg={3} md={6}  sm={12}>
              <img src={dayseven} alt="" />
                  <h4 className='fw-bold my-2 regularcolor'>Days 7-9</h4>
                  <h4 className='fw-bold my-2'>75% new food</h4>
              </Col>
              <Col className='right_food_colam allform' lg={3} md={6}  sm={12}>
              <img src={dayslast} alt="" />
                  <h4 className='fw-bold my-2 regularcolor'>Days 11</h4>
                  <h4 className='fw-bold my-2'>100% new food</h4>
              </Col>
            </Row>
        </Row>
    );
};

export default RightFood;