import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Usernav.css';
import navlogo from '../../../Images/navlogo.png';

const NavRow = () => {
    return (
        <Row className='container-fluid  text-center p-2 navrow'>
            <Col lg={3} md={4} sm={12}>
                <h2><img className='w-25 h-25 navimg' src={navlogo} alt="" /><span className="navbrands fw-bold text-warning mx-2">PetsMart</span></h2>
            </Col>
            <Col className='d-flex justify-content-center align-items-center' lg={9} md={8} sm={12}>
                <p className='regulartext text-center fs-5'>30%OFF BUY ONLINE, PICK UP IN STORE OR CURBSIDE</p>
            </Col>
        </Row>
    );
};

export default NavRow;