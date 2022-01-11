import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { useAppSelector } from '../../../app/apphook';
import {AccessoriesOrderDelete, GetAccessoriesOrder} from '../../../features/PetSlice/PetsSlice';
import useFirebase from '../../Shared/Authentication/UseFirebase';
import { CartData } from '../Payments/Checkoutform';
import UserNavbar from '../UserNavbar/UserNavbar';
import YourAccessoriesOrder from './YourAccessoriesOrder';

const YourAccessoriesOrders = () => {
    const dispatch = useDispatch();
    const [demo,setDemo] = useState<CartData[]>([])
    const {user} = useFirebase();

    useEffect(() => {
        dispatch(GetAccessoriesOrder(user?.email))
    },[dispatch, demo, user?.email]);

    const orders = useAppSelector((state) => state.petstore.accessoriesOrder);
    const OrdeDeleteHandler = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(AccessoriesOrderDelete(id))
                setDemo(orders)
            }
          })
    }
    return (
        <Row className="container-fluid">
            <UserNavbar></UserNavbar>
            <h1 className='my-4 fw-bold text-center'>Your All Accessories Order</h1>
            <Table striped bordered responsive hover size="sm">
                <thead>
                    <tr>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>location</th>
                    <th>Accessories Name</th>
                    <th>Quantiy</th>
                    <th>Amount</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map(order => <YourAccessoriesOrder OrdeDeleteHandler={OrdeDeleteHandler} key={order._id} order={order} ></YourAccessoriesOrder>)
                    }
                </tbody>
            </Table>
        </Row>
    );
};

export default YourAccessoriesOrders;