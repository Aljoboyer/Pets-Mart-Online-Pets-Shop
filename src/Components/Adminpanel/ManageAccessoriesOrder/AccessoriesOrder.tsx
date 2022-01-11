import React from 'react';
import { CartData } from '../../UserPages/Payments/Checkoutform';

interface Props {
    order: CartData
}
const AccessoriesOrder: React.FC<Props> = ({order}) => {
    const { accessoriesAmount,location, short, phone, email, totalamount, username} = order

    return (
         <tr>
            <td>{username}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{location}</td>
            <td>{short}</td>
            <td>{accessoriesAmount}</td>
            <td>{totalamount}</td>
        </tr>
    );
};

export default AccessoriesOrder;