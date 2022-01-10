import React from 'react';
import { Col, Row } from 'react-bootstrap';
import catsdog from '../../../../Images/new/catsanddong.jpg';

const Introduce = () => {
    return (
        <Row className='container-fluid p-4'>
            <Col lg={5} md={6} sm={12}>
                <img className='img-fluid' src={catsdog} alt="" />
            </Col> 
            <Col className='d-flex align-items-center intro_row' lg={7} md={6} sm={12}>
                <div>
                    <h2 className='regulartext text-light fw-bold'>How to Introduce a Dog to a Cat</h2>
                    <p className="text-light my-4">By Stacia Friedman Can cats get along with dogs? The answer is simplyyes, says Dr. Liz Bales, a Philadelphia veterinarian. </p>
                    <button className='btn btn-light regularcolor fw-bold p-3'>LEARN MORE</button>
                </div>
            </Col>
        </Row>
    );
};

export default Introduce;