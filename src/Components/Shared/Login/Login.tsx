import React from 'react';
import { Col, Row , Button} from 'react-bootstrap';
import { useForm, SubmitHandler } from "react-hook-form";
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import NavRow from '../../UserPages/UserNavbar/NavRow';
import UserNavbar from '../../UserPages/UserNavbar/UserNavbar';
import useFirebase from '../Authentication/UseFirebase';
import sitelogo from '../../../Images/new/navlogo.png';

interface Inputs  {
    email: string,
    password: string
  };

const Login: React.FC = () => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const {LogInUser, isloading} = useFirebase();
    const navigate = useNavigate();
    const location = useLocation();
    const onSubmit: SubmitHandler<Inputs> = data => {
        LogInUser(data.email, data.password, navigate, location);
        // reset()
    }


    return (
        <div className='container-fluid'>
            <NavRow></NavRow>
            <UserNavbar></UserNavbar>
            <Row className='d-flex justify-content-center my-4'>
                <Col className='allform' lg={6} sm={12} md={10}>
                <h2 className='fw-bold my-4 regulartext regularcolor text-center'>LOG IN TO <img className='w-25' src={sitelogo} alt="" /> PETS MART</h2>
                <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                    <Row className="justify-content-center my-4">
                        <Col lg={8} sm={12} md={6}>
                        <input className='inputs my-2 fw-bold regularcolor fs-6' placeholder="Enter Your Email" type="email" {...register("email", { required: true })} />                    {errors.email && <span>This field is required</span>}
                        </Col>
                    </Row>
                    <Row className="justify-content-center my-4">
                    <Col lg={8} sm={12} md={6}>
                        <input className='inputs my-2 fw-bold regularcolor fs-6' placeholder="Enter Your Pssword" type="password" {...register("password", { required: true })} />
                        {errors.password && <span>This field is required</span>}
                        </Col>
                    </Row>
                <Row className='d-flex justify-content-center'>
                   <Col lg={8} md={10} sm={12}>
                    <Row>
                    <button type='submit' disabled={isloading} className=' fw-bold fs-6 loginbtn'>{isloading ? 'Loading...' : 'LOG-IN'}</button>
                    </Row>
                   </Col>
                </Row>
                </form>
                <p className='text-center regularcolor fw-bold fs-6'>Are You New Here.? <Link to="/register"> <span className='text-primary'>Please Register</span> </Link></p>
                </Col>
            </Row>
        </div>
    );
};

export default Login;