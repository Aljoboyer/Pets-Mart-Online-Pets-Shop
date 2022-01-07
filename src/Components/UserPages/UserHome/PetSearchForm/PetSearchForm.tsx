import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FindData } from '../../../../features/PetSlice/PetsSlice';

export interface SearchData {
    type?: string | undefined,
    age?: string | undefined,
    gender?: string | undefined
}
const PetSearchForm: React.FC = () => {
    const dispatch = useDispatch()
    const [fielddata, setFielddata] = useState<SearchData>();
    const navigate = useNavigate();
    const OnsubmitHandler = () => {
        dispatch(FindData(fielddata))
        navigate('/PetSearchItems')
    } 
    return (
        <Row className='container mx-auto justify-conent-center searchrow'>
            <Col lg={3} md={6} sm={12}>
                <Form.Select onBlur={(e: React.FocusEvent<HTMLSelectElement, Element> | undefined) => {
                    const type = e?.target.value
                    setFielddata({...fielddata, type})
                }} className='searchcolam'  size="lg">
                    <option>PETS TYPE</option>
                    <option value="dog">DOG</option>
                    <option value="cat">CAT</option>
                    <option value="bird">BIRD</option>
                    <option value="rabbit">RABBIT</option>
                </Form.Select>
            </Col>
            <Col  lg={3} md={6} sm={12}>
                <Form.Select onBlur={(e: React.FocusEvent<HTMLSelectElement, Element> | undefined) => {
                    const age = e?.target.value
                    setFielddata({...fielddata, age})
                }} className='searchcolam' size="lg">
                    <option>AGE</option>
                    <option value="Puppy">PUPPY</option>
                    <option value="Adult">ADULT</option>
                    <option value="Senior">SENIOR</option>
                </Form.Select>
            </Col>
            <Col lg={3} md={6} sm={12}>
                <Form.Select onBlur={(e: React.FocusEvent<HTMLSelectElement, Element> | undefined) => {
                    const gender = e?.target.value
                    setFielddata({...fielddata, gender})
                }} className='searchcolam' size="lg">
                    <option>GENDER</option>
                    <option value="Male">MALE</option>
                    <option value="Female">FEMALE</option>
                </Form.Select>
            </Col>
            <Col className='searchcolam' lg={3} md={6} sm={12}>
                <Button onClick={OnsubmitHandler} className='serachbtn fw-bold'>FIND PETS</Button>
            </Col>
        </Row>
    );
};

export default PetSearchForm;