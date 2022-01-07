import React from 'react';
import { Col, Row , Button} from 'react-bootstrap';
import { useForm, SubmitHandler } from "react-hook-form";
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import UserNavbar from '../../UserPages/UserNavbar/UserNavbar';
import useFirebase from '../Authentication/UseFirebase';

interface Inputs  {
    email: string,
    password: string
  };

const Login: React.FC = () => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const {LogInUser} = useFirebase();
    const navigate = useNavigate();
    const location = useLocation();
    const onSubmit: SubmitHandler<Inputs> = data => {
        LogInUser(data.email, data.password, navigate, location);
        reset()
    }


    return (
        <div className='container-fluid'>
            <UserNavbar></UserNavbar>
            <Row className='d-flex justify-content-center my-4'>
                <Col lg={8} sm={12} md={10}>
                <h2 className='fw-bold my-4'>Log In To PETS-MART</h2>
                <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                    <Row className="justify-content-center my-4">
                        <Col lg={8} sm={12} md={6}>
                        <input className='inputs my-2 fw-bold text-info fs-4' placeholder="Enter Your Email" type="email" {...register("email", { required: true })} />                    {errors.email && <span>This field is required</span>}
                        </Col>
                    </Row>
                    <Row className="justify-content-center my-4">
                    <Col lg={8} sm={12} md={6}>
                        <input className='inputs my-2 fw-bold text-info fs-4' placeholder="Enter Your Pssword" type="password" {...register("password", { required: true })} />
                        {errors.password && <span>This field is required</span>}
                        </Col>
                    </Row>
                <Button type='submit' className='btn btn-dark fw-bold text-warning fs-6 '>LOG-IN</Button>
                </form>
                <p>Are You New Here.? <Link to="/register"> <span className='text-primary'>Please Register</span> </Link></p>
                </Col>
            </Row>
        </div>
    );
};

export default Login;