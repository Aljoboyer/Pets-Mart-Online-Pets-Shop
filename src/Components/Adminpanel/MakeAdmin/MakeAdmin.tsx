import React, {  useState } from 'react';
import { Row ,Form,  FloatingLabel, Col} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { MakeAnAdmin } from '../../../features/PetSlice/PetsSlice';

const MakeAdmin = () => {
    const [email, setEmail] = useState<string>('');
    const dispatch = useDispatch()

    const AdminSubmitHandler = (e: React.FormEvent) => {
      e.preventDefault()
      dispatch(MakeAnAdmin(email))
 
    }
    return (
        <Row className='d-flex justify-content-center'>
            <Col lg={7} md={10} sm={12}>
            <h1 className='text-center fw-bold regulartext regularcolor my-4'>Make an New Admin</h1>
            <Form onSubmit={AdminSubmitHandler} className='allform Pet_Add_Form p-3'>
            <FloatingLabel
            controlId="floatingInput"
            label="Enter Email address"
            className="mb-3 fw-bold regularcolor fs-5"
             >
            <Form.Control onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <button type='submit' className='loginbtn mt-4 fw-bold p-2'>MAKE ADMIN</button>
            </Form>
            </Col>
        </Row>
    );
};

export default MakeAdmin;