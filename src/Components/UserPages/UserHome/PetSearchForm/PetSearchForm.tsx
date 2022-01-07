import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const PetSearchForm = () => {
    return (
        <Row className='container mx-auto justify-conent-center searchrow'>
            <Col lg={3} md={6} sm={12}>
                <Form.Select className='searchcolam'  size="lg">
                    <option>PETS TYPE</option>
                    <option value="dog">DOG</option>
                    <option value="cat">CAT</option>
                    <option value="bird">BIRD</option>
                    <option value="rabbit">RABBIT</option>
                </Form.Select>
            </Col>
            <Col  lg={3} md={6} sm={12}>
                <Form.Select className='searchcolam' size="lg">
                    <option>AGE</option>
                    <option value="Puppy">PUPPY</option>
                    <option value="Adult">ADULT</option>
                    <option value="Senior">SENIOR</option>
                </Form.Select>
            </Col>
            <Col lg={3} md={6} sm={12}>
                <Form.Select className='searchcolam' size="lg">
                    <option>GENDER</option>
                    <option value="Male">MALE</option>
                    <option value="Female">FEMALE</option>
                </Form.Select>
            </Col>
            <Col className='searchcolam' lg={3} md={6} sm={12}>
                <Button className='serachbtn fw-bold'>FIND PETS</Button>
            </Col>
        </Row>
    );
};

export default PetSearchForm;