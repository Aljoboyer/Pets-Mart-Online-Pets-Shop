import React from 'react';
import { PetOrderData } from '../PetOrderDetails/PetOrderDetails';

interface Props {
    order: PetOrderData,
    OrdeDeleteHandler: Function
}
const YourPetOrder: React.FC<Props> = ({order,OrdeDeleteHandler}) => {
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
        <td><button onClick={() => OrdeDeleteHandler(_id)} className='btn btn-warning fw-bold text-dark'>CANCEL</button></td>
        </tr>
    );
};

export default YourPetOrder;