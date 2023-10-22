import React from 'react';
import { PetOrderData } from '../../UserPages/PetOrderDetails/PetOrderDetails';

interface Props {
    order: PetOrderData,
    AcceptHandler: Function
}

const ManagePetOrder: React.FC<Props> = ({order,AcceptHandler}) => {
    const {_id,status,username,orderDate, email, phone, location, age, color, petprice, clan} = order
    return (
        <tr>
        <td>{username}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{location}</td>
        <td>{clan}</td>
        <td>{age}</td>
        <td>{petprice}</td>
        <td>{color}</td>
        <td>{orderDate}</td>
        <td>{status}</td>
        <td><button onClick={() => AcceptHandler(_id)} className='btn btn-success fw-bold text-light'>ACCEPT</button></td>
        </tr>
    );
};

export default ManagePetOrder;