import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { RemoveItemFromCart } from '../../../features/PetSlice/PetsSlice';
import { OrderModels } from '../PetOrderDetails/OrderModel';

interface props {
    data: OrderModels
}
const YourCart: React.FC<props> = ({data}) => {
    const {_id,petprice, img, short, totalamount, accessoriesAmount} = data;
    const dispatch = useDispatch()
    const RemoveHandler = (id: string | undefined): void => {
        dispatch(RemoveItemFromCart(id))
    }
    return (
       <Row className="justify-content-center">
           <Col lg={6} md={6} sm={12}>
               <img className='h-75 w-75' src={`data:image/jpeg;base64,${img}`} alt="" />
           </Col>
           <Col lg={6} md={6} sm={12}>
               <h4>{short}</h4>
               <hr />
               <h5>Price: $ {petprice}</h5>
               <hr />
               <h5>Quantity: {accessoriesAmount}</h5>
               <hr />
               <h5>Amount: {totalamount}</h5>
               <button onClick={() => RemoveHandler(_id)} className='btn btn-dark fw-bold text-warning mt-3'>REMOVE</button>
           </Col>
       </Row>
    );
};

export default YourCart;