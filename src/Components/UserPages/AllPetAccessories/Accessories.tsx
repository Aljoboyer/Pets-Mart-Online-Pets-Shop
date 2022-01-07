import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {PetObjData} from '../Allpets/PetModel';
interface Props {
    accessories: PetObjData
}
const Accessories: React.FC<Props> = ({accessories}) => {
    const {_id,img, short, petprice} = accessories
    return (
        <Col className='d-flex justify-content-center' lg={4} sm={12} md={6}>
        <Card>
        <Card.Img variant="top" className='petimg' src={`data:image/jpeg;base64,${img}`} />
        <Card.Body>
        <Card.Title>{short}</Card.Title>
        <Card.Text>
            <h5 className="fw-bold text-primary">$ {petprice}</h5>
        </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Link to={`/PetOrderDetails/${_id}`}><Button className="btn btn-warning text-dark fw-bold">BUY NOW</Button></Link>
        </Card.Footer>
        </Card>
       </Col>
    );
};

export default Accessories;