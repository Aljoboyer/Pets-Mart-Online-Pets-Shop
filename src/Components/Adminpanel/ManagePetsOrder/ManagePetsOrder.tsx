import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/apphook';
import { GetAllPetOrder, AcceptPet } from '../../../features/PetSlice/PetsSlice';
import { PetOrderData } from '../../UserPages/PetOrderDetails/PetOrderDetails';
import ManagePetOrder from './ManagePetOrder';

const ManagePetsOrder = () => {
    const dispatch = useDispatch()
    const [demo, setDemo] = useState<PetOrderData[] | undefined>()
    useEffect(() => {
        dispatch(GetAllPetOrder())
    },[dispatch,demo])

    const orders = useAppSelector((state) => state.petstore.petorder);

    const AcceptHandler = (id: string) => {
       dispatch(AcceptPet(id))
       setDemo(orders)
    }
    return (
        <Row className="container-fluid">
            <h1 className="regulartext regularcolor fw-bold text-center my-4">CUSTOMERS PETS ORDER</h1>
            <Table striped bordered hover responsive size="sm">
            <thead>
                <tr>
                <th>UserName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>location</th>
                <th>Pet Genre</th>
                <th>Pet Age</th>
                <th>Price</th>
                <th>Color</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders?.map(order => <ManagePetOrder key={order._id} AcceptHandler={AcceptHandler} order={order} ></ManagePetOrder>)
                }
            </tbody>
        </Table>
        </Row>
    );
};

export default ManagePetsOrder;