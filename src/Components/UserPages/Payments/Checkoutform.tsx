import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Stripe, StripeElements } from '@stripe/stripe-js';
import React, { FormEvent, useEffect, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useAppSelector } from '../../../app/apphook';
import { ClearCart, PostCart } from '../../../features/PetSlice/PetsSlice';
import useFirebase from '../../Shared/Authentication/UseFirebase';

interface CheckoutData {
    username?: string | undefined;
    location?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
}
interface Props {
    totalAccessoriesAmount: number,
    alltotalamount: number
}
export interface CartData {
    _id?: string,
    petname?: string,
    petprice?: string,
    category?: string,
    type?: string,
    gender?: string,
    short?: string,
    details?: string,
    age?: string,
    color?: string,
    clan?: string
    img?: string,
    accessoriesAmount: number,
    totalamount: number,
    username?: string | undefined;
    location?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
}
const Checkoutform: React.FC<Props> = ({alltotalamount, totalAccessoriesAmount}) => {
    const stripe: Stripe | null  = useStripe()
    const elements: StripeElements | null= useElements();
    const[clientSecret , setClientSecret] = useState<string>('')
    const [porcessing, setProcessing] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>();
    const [formdata, setFormdata] = useState<CheckoutData | undefined>();
    const {user} = useFirebase();
    const dispatch = useDispatch();

    const data = useAppSelector((state) => state.petstore.carts);
    const carts: CartData[] = [];
    data.forEach(d => {
        const obj: CartData = {...d, ...formdata}
        carts.push(obj)
    })

    useEffect(() => {
        fetch('https://still-castle-87699.herokuapp.com/create-payment-intent',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({alltotalamount})
        })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
    },[alltotalamount])


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if(!stripe || !elements)
        {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null)
        {
            return ;
        }
        setProcessing(true)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if(error)
        {
            setProcessing(false)
            setSuccess(false)
            Swal.fire(
              `${error.message}`,
              '',
              'error'
            )
        }
        else{
            setProcessing(false)
            console.log(paymentMethod)
        }
   
         //payment intent
         const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            { 
              payment_method: {
                card: card,
                billing_details: {
                  name: formdata?.username,
                //   email: user?.email
                },
              },
            },
          );
          if(intentError)
          {
            setProcessing(false)
            setSuccess(false)
            Swal.fire(
                `${intentError.message}`,
                '',
                'error'
              )
          }
          else{
            setSuccess(true)
            Swal.fire(
                'Order SuccessFull',
                '',
                'success'
              )
            setProcessing(false)
            const payment = {
                username: formdata?.username,
                paymentdate: new Date().toLocaleDateString(),
                amount: alltotalamount,
                floweramount: totalAccessoriesAmount,
                phone: formdata?.phone,
                email: user?.email,
                transaction: paymentIntent?.client_secret
             }
             
             //saving ordered pets database
             dispatch(PostCart(carts))
             //saving payment status database
             fetch('https://still-castle-87699.herokuapp.com/paymentstatus',{
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(payment)
             })
             .then(res => res.json())
             .then(data => console.log(data))
             dispatch(ClearCart())
          }

    }

    return (
        <Row className="d-flex justify-content-center align-items-center p-4"> 
                <Col lg={10} md={10} sm={12} className=" checkoutforms p-4 rounded">
                <Row>
                <h4 className="my-2">Total Quantity: <b>{totalAccessoriesAmount}</b> </h4>
                <hr />
                <h4 className="my-2">Total Amount: <b>$ {alltotalamount}</b> </h4>
                <hr />
                <Form.Floating className="mb-3 fw-bold text-primary">
                <Form.Control
                className="w-100"
                id="floatingInputCustom"
                type="text"
            
                onBlur={(e: React.FocusEvent<HTMLInputElement, Element>) => {
                    const username = e.target.value;
                    setFormdata({...formdata,username})
                }}
                placeholder="Your Name"
                required
                />
                <label htmlFor="floatingInputCustom">Your Name</label>
                </Form.Floating>

                <Form.Floating className="mb-3 fw-bold text-primary">
                <Form.Control
                className="w-100"
                id="floatingInputCustom"
                type="text"
                placeholder="Your Location"
                onBlur={(e: React.FocusEvent<HTMLInputElement, Element>) => {
                    const location = e.target.value;
                    setFormdata({...formdata,location})
                }}
                required
                />
                <label htmlFor="floatingInputCustom">Your Location</label>
                 </Form.Floating>

                <Form.Floating className="mb-3 fw-bold text-primary">
                    <Form.Control className="w-100"
                    id="floatingPasswordCustom"
                    type="number"
                    placeholder="Your Phone Number"
                    onBlur={(e: React.FocusEvent<HTMLInputElement, Element>) => {
                        const phone = e.target.value;
                        setFormdata({...formdata,phone})
                    }}
                    required
                    />
                    <label htmlFor="floatingPasswordCustom">Your Phone Number</label>
                </Form.Floating>

                <Form.Floating className="mb-3 fw-bold text-primary">
                    <Form.Control className="w-100"
                    id="floatingPasswordCustom"
                    type="email"
                    defaultValue={user?.email}
                    disabled
                    />
                    <label htmlFor="floatingPasswordCustom">Your User Email</label>
                </Form.Floating>
                </Row>
                <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '20px',
                        color: 'black',
                        '::placeholder': {
                            color: 'black',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                {
                    porcessing ? <p className="fw-bold text-primary">Processing...</p> :       <button className="btn btn-warning text-dark fw-bold my-4" type="submit" disabled={!stripe || success}>
                    Checkout
                  </button>
                }

                </form>
                </Col>
        </Row>
    );
};

export default Checkoutform;