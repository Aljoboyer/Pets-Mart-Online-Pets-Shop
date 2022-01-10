import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import '../Admin.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { PostPets } from '../../../features/PetSlice/PetsSlice';
import Swal from 'sweetalert2';

interface Inputs  {
    petname: string,
    petprice: string,
    category: string,
    type: string,
    gender: string,
    short: string,
    details: string,
    age: string,
    color: string,
    clan: string
  };

const AddPetsData: React.FC = () => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [img, setImg] = useState<string>('');
    const dispatch = useDispatch()

    const onSubmit: SubmitHandler<Inputs> = data => {
        const fd = new FormData();
        fd.append('petname', data.petname)
        fd.append('petprice', data.petprice)
        fd.append('category', data.category)
        fd.append('type', data.type)
        fd.append('gender', data.gender)
        fd.append('short', data.short)
        fd.append('details', data.details)
        fd.append('age', data.age)
        fd.append('color', data.color)
        fd.append('clan', data.clan)
        fd.append('img', img)
        if(fd){
            dispatch(PostPets(fd))
            reset()
        }
        else{
            Swal.fire(
                'Error!',
                'Please Fillup All data',
                'error'
              )
        }
        
    }
  
    const imgHandler = (e: any) => {
        const files = e.target.files[0]
        setImg(files)
    }

    return (
    <Row className='container-fluid justify-content-center'>
        <Col className='Pet_Add_Form my-4 allform' lg={8} md={10} sm={12}>
            <h4 className='fw-bold regulartext regularcolor mt-4 fs-3 text-center'>ADD DATA</h4>
        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
            <Row className="g-3 my-4">
                <Col lg={6} sm={12} md={6}>
                <input className='inputs my-2 fw-bold regularcolor fs-6' placeholder="Pet Name" type="text" {...register("petname", { required: true })} />
                </Col>
                <Col lg={6} sm={12} md={6}>
                <input className='inputs my-2 fw-bold regularcolor fs-6' placeholder="Pet Price" type="number" {...register("petprice", { required: true })} />
                </Col>
            {errors.petprice && <span>This field is required</span>}
            </Row>
            <Row className="g-3 my-4">
                <Col lg={6} sm={12} md={6}>
                <input className='inputs my-2 fw-bold regularcolor fs-6' placeholder="Category" type="text" {...register("category", { required: true })} />
                </Col>
                <Col lg={6} sm={12} md={6}>
                <input className='inputs my-2 fw-bold regularcolor fs-6' placeholder="Type" type="text" {...register("type", { required: true })} />
                {errors.type && <span>This field is required</span>}
                </Col>
            </Row>
            <Row className="g-3 my-4">
                <Col lg={6} md={6} sm={12}>
                <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className="my-2 fw-bold regularcolor fs-6">Choose Pets Picture</Form.Label>
                <Form.Control onBlur={imgHandler} type="file" />
                </Form.Group>
                </Col>
                <Col lg={6} md={6} sm={12}>
                <label className="my-2 fw-bold regularcolor fs-6 mx-3">Gender</label>
                <select className='inputs' {...register("gender", { required: true })}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                </Col>
            </Row>
            <Row className="g-3 my-4">
            <Col lg={4} md={4} sm={12}>
                <label className="my-2 fw-bold regularcolor fs-6 mx-3">AGE</label>
                <select className='inputs' {...register("age", { required: true })}>
                    <option value="Puppy">Puppy</option>
                    <option value="Adult">Adult</option>
                    <option value="Senior">Senior</option>
                </select>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <label className="my-2 fw-bold regularcolor fs-6 mx-3">Color</label>
            <select className='inputs' {...register("color", { required: true })}>
                <option value="Bicolor">Bicolor</option>
                <option value="Black">Black</option>
                <option value="Brown">Brown</option>
                <option value="Gray">Gray</option>
            </select>
            </Col>
            <Col lg={4} md={6} sm={12}>
                <label className="my-2 fw-bold regularcolor fs-6 mx-3">Clan</label>
                <select className='inputs' {...register("clan", { required: true })}>
                    <option value="American Bully">American Bully</option>
                    <option value="Australian Shepherd">Australian Shepherd</option>
                    <option value="German Shepherd">German Shepherd</option>
                    <option value="Harrier">Harrier</option>
                    <option value="American Curl">American Curl</option>
                    <option value="Bengal">Bengal</option>
                    <option value="Calico">Calico</option>
                    <option value="Domestic Long Hair">Domestic Long Hair</option>
                </select>
            </Col>
            </Row>
            <Row className="g-3 my-4">
                <Col lg={6} sm={12} md={6}>
                <textarea className='inputs my-2 fw-bold regularcolor fs-6' placeholder="Short Description"  {...register("short", { required: true })} />
                </Col>
                <Col lg={6} sm={12} md={6}>
                <textarea className='inputs my-2 fw-bold regularcolor fs-6' placeholder="Pet Details"  {...register("details", { required: true })} />
                </Col>
            {errors.details && <span>This field is required</span>}
            </Row>
        <button type='submit' className='loginbtn fw-bold p-2 fs-6'>ADD PETS</button>
        </form>
        </Col>
    </Row>
    );
};

export default AddPetsData;