import React from 'react';
import {Row,Col, Button, Container} from 'react-bootstrap';
import homebanner from '../../../../Images/HomeBanner.jpg';
import PetSearchForm from '../PetSearchForm/PetSearchForm';

import './Homebanner.css'
const HomeBanner = () => {
    return (
        <Row className="container-fluid">
            <Row className='container-fluid justify-content-center'>
                <Col className='p-4 d-flex align-items-center homecolam' lg={6} sm={12} md={6}>
                    <div className='p-4'>
                        <h1 className="hometitle">Pets Are Family</h1>
                        <h4 className='regulartext my-4'>Get Personalized Pet Matches <br /> AND Celebrate all the memories with </h4>
                        <Button className='homebanner-btn'>SHOP NOW</Button>
                    </div>
                </Col>
                <Col className="homerightcolam" lg={6} sm={12} md={6}>
                    <img className="w-100" src={homebanner} alt="" />
                </Col>
            </Row>
            <Container>
            <PetSearchForm></PetSearchForm>
            </Container>
        </Row>
    );
};

export default HomeBanner;