import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import healthyimg from '../../../../Images/Healthyhabitdog.png';
import seasonalimg from '../../../../Images/seasonalclothes.png';
import './Healthy.css'
const ClothANDHealty = () => {
    return (
        <Row className="container-fluid g-3 pt-4 mt-4">
            <Col className="p-4" lg={6} md={6} sm={12}>
                <Row >
                    <Col className='healthytextcolam d-flex align-items-center' lg={6} md={6} sm={12}>
                        <div>
                        <h3 className='fw-bold fs-2 my-2'>HEALTHY HABITS FOR YOUR PET START HERE</h3>
                    <Button className='regularwhitebtn fw-bold'>SHOP DOG</Button><Button className='regularwhitebtn fw-bold mx-2'>SHOP CAT</Button>
                        </div>
                    </Col>
                    <Col className='healthyimgcolam p-4 mt-4' lg={6} md={6} sm={12}>
                        <img className='w-100' src={healthyimg} alt="" />
                    </Col>
                </Row>
            </Col>
            <Col className='seasonalcolam p-4' lg={6} md={6} sm={12}>
                <Row className='text-center d-flex align-items-center'>
                    <div>
                    <h4 className='regulartext text-warning'>STOCK UP ON ALL WEATHER MUST-HAVES</h4>
                    <h1 className='fs-1 fw-bold clothestxt'>THE ALL SEASON SHOP</h1>
                    <p className='clothestxt fw-bold'>Seasonal essentials to help keep your pet good, comfy and healthy all season long.</p>
                    </div>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <img className='w-75' src={seasonalimg} alt="" />
                </Row>
            </Col>
        </Row>
    );
};

export default ClothANDHealty;