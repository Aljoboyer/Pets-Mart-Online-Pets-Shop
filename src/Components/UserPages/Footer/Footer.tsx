import React from 'react';
import {Row, Col, Accordion} from 'react-bootstrap'
import './Footer.css'
const Footer = () => {
    return (
        <Row className="container-fluid Footer_Row">
            <Row className="justify-content-center align-items-center  p-4">
                <Col lg={4} md={6} sm={12}>
                <Accordion>
                    <Accordion.Item className='Accordin_Item' eventKey="0">
                        <Accordion.Header> <span className="Accordin_Header fw-bold fs-5">ABOUT PETFINDER</span> </Accordion.Header>
                        <Accordion.Body>
                        <p className='Footer_Text'>About PetsMart</p>
                        <p className='Footer_Text'>FAQs</p>
                        <p className='Footer_Text'>Partnerships</p>
                        <p className='Footer_Text'>Terms of Service</p>
                        <p className='Footer_Text'>Mobile Site AND Apps</p>
                        <p className='Footer_Text'>Petfinder Foundation</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='Accordin_Item my-2' eventKey="1">
                        <Accordion.Header ><span className="Accordin_Header fw-bold fs-5">PET ADOPTION</span></Accordion.Header>
                        <Accordion.Body>
                        <p className='Footer_Text'>Dog Adoption</p>
                        <p className='Footer_Text'>Cat Adoption</p>
                        <p className='Footer_Text'>Other Pet Adoption</p>
                        <p className='Footer_Text'>Search Adoption Organizations</p>
                        <p className='Footer_Text'>Happy Tails Pet Adoption Stories</p>
                        <p className='Footer_Text'>Local Adoption Events</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item className='Accordin_Item' eventKey="2">
                    <Accordion.Header ><span className="Accordin_Header fw-bold fs-5">PET CARE TOPICS</span></Accordion.Header>
                        <Accordion.Body>
                        <p className='Footer_Text'>Dog Care</p>
                        <p className='Footer_Text'>Dog Breeds</p>
                        <p className='Footer_Text'>Cat Breeds</p>
                        <p className='Footer_Text'>Cat Care</p>
                        <p className='Footer_Text'>All Pet Care</p>
                        <p className='Footer_Text'>Pet Care Videos</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </Col>
                <Col lg={4} md={6} sm={12}>
                <hr className='text-light'/>
                    <h5 className="fw-bold Footer_Text">PRIVACY POLICY (UPDATED)</h5>
                <hr className='text-light'/>
                <hr className='text-light'/>
                    <h5 className="fw-bold Footer_Text">ABOUT OUR ADS</h5>
                <hr className='text-light'/>
                <hr className='text-light'/>
                    <h5 className="fw-bold Footer_Text">SHELTER AND RESCUE REGISTRATION</h5>
                <hr className='text-light'/>
                <hr className='text-light'/>
                    <h5 className="fw-bold Footer_Text">DO NOT SELL MY PERSONAL INFORMATION</h5>
                <hr className='text-light'/>
                </Col>
                <Col className='text-center' lg={4} md={6} sm={12}>
                    <p className="Footer_Text fs-5">To get the latest on pet adoption and pet care, sign up to hear from us.</p>
                    <button className='btn Footer_Btn text-light fw-bold'>SIGN_UP</button>
                </Col>
            </Row>
            <Row className="justify-content-center Lower_Footer text-center p-3">
                <Col lg={6} md={6} sm={12}>
                    <p>©2022 Petfinder.com All trademarks are owned by Société des Produits Nestlé S.A., or used with permission.</p>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <h4><i className="fab fa-facebook-square mx-2 Footer_Icon fa-2x"></i><i className="fab fa-twitter mx-2 Footer_Icon fa-2x"></i><i className="fab fa-instagram mx-2 Footer_Icon fa-2x"></i><i className="fab fa-youtube mx-2 Footer_Icon fa-2x"></i><i className="fab fa-pinterest mx-2 Footer_Icon fa-2x"></i></h4>
                </Col>
            </Row>
        </Row>
    );
};

export default Footer;