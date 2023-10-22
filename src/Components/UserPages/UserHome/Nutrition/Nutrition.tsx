import React from 'react';
import { Col, Row } from 'react-bootstrap';
import longivity from '../../../../Images/new/longevity.png';
import vitality from '../../../../Images/new/vitality.png';
import teeth from '../../../../Images/new/teeth-and-bones.png';
import skin from '../../../../Images/new/skin-and-shiny-coat.png';
import immune from '../../../../Images/new/immune-system.png';
import healthy from '../../../../Images/new/healthy-weight.png';

const Nutrition = () => {
    return (
        <Row className='container mx-auto g-4 mt-4 mb-4'>
            <h2 className='text-center fw-bold regulartext mt-4 '>Giving pets a taste of their full potential, one bite at a time</h2>
            <small className='text-center mb-4'>When your pet eats the right food, <br /> you may start to notice these six long-term health and wellness outcomes.</small>
            <Col lg={4} md={6} sm={12}>
                <img src={longivity} alt="" />
                <h5 className='fw-bold regularcolor my text-center-'>Longevity</h5>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <img src={vitality} alt="" />
            <h5 className='fw-bold regularcolor my text-center-'>Vitality</h5>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <img src={teeth} alt="" />
            <h5 className='fw-bold regularcolor my text-center-'>Strong Teeth and Bones</h5>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <img src={skin} alt="" />
            <h5 className='fw-bold regularcolor my text-center-'>Healthy Skin and Shiny Coat</h5>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <img src={immune} alt="" />
            <h5 className='fw-bold regularcolor my text-center-'>Strong Immune System</h5>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <img src={healthy} alt="" />
            <h5 className='fw-bold regularcolor my text-center-'>Healthy Weight</h5>
            </Col>
        </Row>
    );
};

export default Nutrition;