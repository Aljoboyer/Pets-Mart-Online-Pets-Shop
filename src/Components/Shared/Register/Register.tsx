import React from 'react';
import { Col, Row , Button} from 'react-bootstrap';
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from 'react-router-dom';
import UserNavbar from '../../UserPages/UserNavbar/UserNavbar';
import useFirebase from '../Authentication/UseFirebase';
interface Inputs  {
    email: string,
    password: string,
    name: string
  };

const Register = () => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const {RegisterUser} = useFirebase()

    const onSubmit: SubmitHandler<Inputs> = data => {
        RegisterUser(data.email, data.password, data.name)
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
                    <Col lg={8} sm={12} md={10}>
                        <input className='inputs my-2 fw-bold text-info fs-4' placeholder="Enter Your Name" type="text" {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                        </Col>
                    </Row>
                    <Row className="justify-content-center my-4">
                        <Col lg={8} sm={12} md={10}>
                        <input className='inputs my-2 fw-bold text-info fs-4' placeholder="Enter Your Email" type="email" {...register("email", { required: true })} />                    {errors.email && <span>This field is required</span>}
                        </Col>
                    </Row>
                    <Row className="justify-content-center my-4">
                    <Col lg={8} sm={12} md={10}>
                        <input className='inputs my-2 fw-bold text-info fs-4' placeholder="Enter Your Pssword" type="password" {...register("password", { required: true })} />
                        {errors.password && <span>This field is required</span>}
                        </Col>
                    </Row>
                <Button type='submit' className='btn btn-dark fw-bold text-warning fs-6'>REGISTER</Button>
                </form>
                <p>Are You Already Registered <Link to="/login">Please Log-in Here</Link> </p>
                </Col>
            </Row>
        </div>
    );
};

export default Register;