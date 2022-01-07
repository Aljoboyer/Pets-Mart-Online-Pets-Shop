import React from 'react';
import { CartData } from '../Payments/Checkoutform';

interface Props {
    order: CartData,
    OrdeDeleteHandler: Function
}
const YourAccessoriesOrder: React.FC<Props> = ({order, OrdeDeleteHandler}) => {
    const {_id, accessoriesAmount,location, short, phone, email, totalamount, username} = order
    return (
        <tr>
            <td>{username}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{location}</td>
            <td>{short}</td>
            <td>{accessoriesAmount}</td>
            <td>{totalamount}</td>
            <td><button onClick={() => OrdeDeleteHandler(_id)} className='btn btn-warning fw-bold text-dark'>CANCEL</button></td>
        </tr>
    );
};

export default YourAccessoriesOrder;