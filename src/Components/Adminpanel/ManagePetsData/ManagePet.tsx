import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { PetObjData } from '../../UserPages/Allpets/PetModel';

interface Props {
    data: PetObjData
}
const ManagePet: React.FC<Props> = ({data}) => {
    const {_id,img, short, petname, petprice, clan} = data
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
        <Button className="btn btn-warning text-dark fw-bold">DELETE DATA</Button>
        </Card.Footer>
        </Card>
       </Col>
    );
};

export default ManagePet;