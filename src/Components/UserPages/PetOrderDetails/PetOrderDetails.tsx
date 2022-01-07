import React from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../app/apphook';
import {increment, decrement, addCart, PetOrderPost } from '../../../features/PetSlice/PetsSlice';
import UserNavbar from '../UserNavbar/UserNavbar';
import { useForm, SubmitHandler } from "react-hook-form";
import { PetObjData } from '../Allpets/PetModel';
import useFirebase from '../../Shared/Authentication/UseFirebase';

interface Inputs  {
    username: string,
    location: string,
    phone: string
  };
export interface PetOrderData {
    email: string | null | undefined;
    orderDate: string;
    username: string;
    location: string;
    phone: string;
    _id: string,
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
    img: string,
}
const PetOrderDetails: React.FC = () => {
    const { register,reset, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const {id} = useParams();
    const dispatch = useDispatch();
    const {user} = useFirebase()
    const allpets = useAppSelector((state) => state.petstore.allpets);
    const allAccessories = useAppSelector((state) => state.petstore.allAccessories);

    const alldata = [...allpets, ...allAccessories]

    const pet: PetObjData = alldata?.find(data => data._id === id)!
    console.log('petdata',pet)
    //for order pet 
    const onSubmit: SubmitHandler<Inputs> = data => {
        const newdata: PetOrderData = {...pet,...data, email: user?.email, orderDate: new Date().toLocaleDateString()};
        dispatch(PetOrderPost(newdata))

        reset()
    }
    const price = parseInt(pet.petprice)
    const devliverycharge: number = parseInt(pet.petprice) >= 50 ? 25 : 5;
    
    //adding accessories
    const IncrimentHandler = (): void => {
        dispatch(increment(price))
    }
    //reducuing accessories
    const DecrimentHandler = () => {
        dispatch(decrement(price))
    }
    const accessoriesAmount: number = useAppSelector((state) => state.petstore.petamount);
    const total: number = useAppSelector((state) => state.petstore.totalamont)

    const allTotal: number = total === 0 ? 0 : total + devliverycharge;

    const AddCartHandler =  () => {
        const carts = {...pet, accessoriesAmount, totalamount: allTotal, email: user?.email, orderDate: new Date().toLocaleDateString()}
        dispatch(addCart(carts))
    }
    return (
        <div className='container-fluid'>
            <UserNavbar></UserNavbar>
           {
               pet?.category === 'pets' ?
               <Row className='justify-content-center my-4'>
               <Col className='justify-content-center' lg={6} md={6} sm={12}>
                   <img className='orderimg' src={`data:image/jpeg;base64,${pet.img}`} alt="" />
                   <h4>{pet.petname}</h4>
                   <h5>$ {pet.petprice}</h5>
                   <p className='text-primary fw-bold'>{pet.clan}</p>
                   <p >{pet.short} {pet.details}</p>
               </Col>
               <Col lg={5} md={6} sm={12}>
                   <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                       <Row className="g-3 my-4">
                           <Col lg={9} sm={12} md={6}>
                           <input className='inputs my-2 fw-bold text-info fs-4' placeholder="Your Name" type="text" {...register("username", { required: true })} />
                           </Col>
                       {errors.username && <span>This field is required</span>}
                       </Row>
                       <Row className="g-3 my-4">
                           <Col lg={9} sm={12} md={6}>
                           <textarea className='inputs my-2 fw-bold text-info fs-4' placeholder="Your Location" {...register("location", { required: true })} />
                           </Col>
                       {errors.username && <span>This field is required</span>}
                       </Row>
                       <Row className="g-3 my-4">
                           <Col lg={9} sm={12} md={6}>
                           <input className='inputs my-2 fw-bold text-info fs-4' placeholder="Your Phone" type="number" {...register("phone", { required: true })} />
                           </Col>
                       {errors.username && <span>This field is required</span>}
                       </Row>
                       <Button type='submit' className='btn btn-dark fw-bold text-warning fs-6'>ORDER</Button>
                   </form>
               </Col>
                </Row>
                :  <Row className='justify-content-center my-4'>
                <Col className='justify-content-center' lg={6} md={6} sm={12}>
                    <img className='orderimg' src={`data:image/jpeg;base64,${pet.img}`} alt="" />
                    <h4>{pet.short}</h4>
                    <h5 className='text-primary fw-bold'>$ {pet.petprice}</h5>
                </Col>
                <Col lg={5} md={6} sm={12}>
                    <h2>Total Amount: {allTotal}</h2>
                    <hr />
                    <h4>Price: {pet.petprice}</h4>
                    <hr />
                    <h3>Delivery Cost: {devliverycharge}</h3>
                    <hr />
                    <Row className='my-4'>
                        <h4><i onClick={IncrimentHandler} className="far fa-plus-square fa-2x mx-2"></i> {accessoriesAmount} <i onClick={DecrimentHandler} className="far fa-minus-square fa-2x mx-2"></i></h4>
                    </Row>
                    <hr />
                <Button onClick={AddCartHandler} type='submit' className='btn btn-dark fw-bold text-warning fs-6'>ADD TO CART</Button>
                </Col>
                 </Row>
           }
        </div>
    );
};

export default PetOrderDetails;