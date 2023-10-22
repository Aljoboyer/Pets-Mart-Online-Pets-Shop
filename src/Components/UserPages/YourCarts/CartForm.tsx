import React from 'react';
import { Row } from 'react-bootstrap';
import { useAppSelector } from '../../../app/apphook';
import Payment from '../Payments/Payment';


const CartForm: React.FC = () => {
    const cartdata = useAppSelector((state) => state.petstore.carts);

    let totalAccessoriesAmount: number = 0;
    let alltotalamount: number = 0;

    for(const data of cartdata){
        totalAccessoriesAmount = totalAccessoriesAmount + data.accessoriesAmount;
        alltotalamount = totalAccessoriesAmount * data.totalamount;
    }
    return (
        <Row className='justify-content-center'>
            {
               cartdata.length > 0 && 
               <Payment alltotalamount={alltotalamount} totalAccessoriesAmount={totalAccessoriesAmount}></Payment>
            }
        </Row>
    );
};

export default CartForm;