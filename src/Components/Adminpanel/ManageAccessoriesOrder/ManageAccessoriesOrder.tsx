import React, { useEffect } from 'react';
import { Row, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/apphook';
import { GetAllAccessoriesOrder } from '../../../features/PetSlice/PetsSlice';
import AccessoriesOrder from './AccessoriesOrder';

const ManageAccessoriesOrder = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetAllAccessoriesOrder())
    },[dispatch])
    const orders = useAppSelector((state) => state.petstore.accessoriesOrder);

    return (
        <Row className="container-fluid">
            <h1 className='fw-bold regulartext regularcolor text-center my-4'>ALL CUSTOMERS ACCESSORIESORDERS</h1>
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
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map(order => <AccessoriesOrder  key={order._id} order={order} ></AccessoriesOrder>)
                    }
                </tbody>
            </Table>
        </Row>
    );
};

export default ManageAccessoriesOrder;