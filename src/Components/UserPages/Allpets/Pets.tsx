import React from 'react';
import {Card, Col, Button} from 'react-bootstrap';
import {PetObjData} from './PetModel';
import './allpet.css';
import { Link } from 'react-router-dom';

interface props {
    pet: PetObjData
}
const Pets: React.FC<props> = ({pet}) => {

    const {_id,img, short, petname, petprice, clan} = pet
    return (
       <Col className='d-flex justify-content-center' lg={4} sm={12} md={6}>
        <Card>
        <Card.Img variant="top" className='petimg' src={`data:image/jpeg;base64,${img}`} />
        <Card.Body>
        <Card.Title>{petname}</Card.Title>
        <Card.Text>
            <h5>$ {petprice}</h5>
            <p className='text-primary fw-bold'>{clan}</p>
            <p>{short}</p>
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Link to={`/PetOrderDetails/${_id}`}><button className="loginbtn fw-bold p-2">ORDER NOW</button></Link>
        </Card.Footer>
        </Card>
       </Col>
    );
};

export default Pets;