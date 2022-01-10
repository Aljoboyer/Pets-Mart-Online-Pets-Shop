import React from 'react';
import { Col, Row } from 'react-bootstrap';
import adminlogo from '../../../Images/new/adminbannar.jpg';

const DashboardHome = () => {
    return (
        <Row className="container-fluid d-flex justify-content-center">
                <Col lg={8} md={10} sm={12}>
                <h1 className='regulartext regularcolor fw-bold text-center'>Admin DashBoard</h1>
                    <img className='img-fluid' src={adminlogo} alt="" />
                </Col>
        </Row>
    );
};

export default DashboardHome;