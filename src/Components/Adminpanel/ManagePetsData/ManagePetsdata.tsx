import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/apphook';
import { GetAllData } from '../../../features/PetSlice/PetsSlice';
import ManagePet from './ManagePet';

const ManagePetsdata = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllData())
    },[dispatch]);

    const alldatas = useAppSelector((state) => state.petstore.alldata);
    console.log('data',alldatas)
    return (
        <Row className='container-fluid'>
            {
                alldatas?.map(data => <ManagePet key={data._id} data={data}></ManagePet>)
            }
        </Row>
    );
};

export default ManagePetsdata;