import React from 'react';
import { Row ,Form,  FloatingLabel, Col} from 'react-bootstrap';

const MakeAdmin = () => {
    return (
        <Row className='d-flex justify-content-center'>
            <Col lg={7} md={10} sm={12}>
            <h1 className='text-center fw-bold regulartext regularcolor my-4'>Make an New Admin</h1>
            <Form className='allform Pet_Add_Form p-3'>
            <FloatingLabel
    controlId="floatingInput"
    label="Enter Email address"
    className="mb-3 fw-bold regularcolor fs-5"
  >
    <Form.Control type="email" placeholder="name@example.com" />
    <button className='loginbtn mt-4 fw-bold p-2'>MAKE ADMIN</button>
  </FloatingLabel>
            </Form>
            </Col>
        </Row>
    );
};

export default MakeAdmin;