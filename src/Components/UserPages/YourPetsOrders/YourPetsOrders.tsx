import React, { useEffect , useState} from 'react';
import { Row, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/apphook';
import { GetPetOrder, PetOrderDelete } from '../../../features/PetSlice/PetsSlice';
import UserNavbar from '../UserNavbar/UserNavbar';
import YourPetOrder from './YourPetOrder';
import Swal from 'sweetalert2';
import { PetOrderData } from '../PetOrderDetails/PetOrderDetails';

const YourPetsOrders = () => {
    const dispatch = useDispatch();
    const [demo,setDemo] = useState<PetOrderData[]>([])
    useEffect(() => {
        dispatch(GetPetOrder())
    },[dispatch, demo]);

    const orders = useAppSelector((state) => state.petstore.petorder);
    
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
                dispatch(PetOrderDelete(id))
                setDemo(orders)
            }
          })
    }
    return (
        <Row className="container-fluid">
        <UserNavbar></UserNavbar>
        <h1 className='my-4 fw-bold text-center'>Your All Pet Order</h1>
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
                </tr>
            </thead>
            <tbody>
                {
                    orders?.map(order => <YourPetOrder  OrdeDeleteHandler={OrdeDeleteHandler} key={order._id} order={order} ></YourPetOrder>)
                }
            </tbody>
        </Table>
        </Row>
    );
};

export default YourPetsOrders;