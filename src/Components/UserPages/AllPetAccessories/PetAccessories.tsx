import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/apphook';
import {GetAllAccessories} from '../../../features/PetSlice/PetsSlice';
import Accessories from './Accessories';

const PetAccessories: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllAccessories())
    },[dispatch])

    const accessorieses = useAppSelector((state) => state.petstore.allAccessories);

    return (
        <div className="container-fluid">
            <h2 className='fw-bold fs-4 text-center my-4'>This is Food And Accessories</h2>
            <Row className='justify-content-center'>
                {
                    accessorieses?.map(accessories => <Accessories key={accessories._id} accessories={accessories}></Accessories>)
                }
            </Row>
        </div>
    );
};

export default PetAccessories;