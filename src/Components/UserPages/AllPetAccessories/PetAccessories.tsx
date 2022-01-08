import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/apphook';
import {GetAllAccessories} from '../../../features/PetSlice/PetsSlice';
import { PetObjData } from '../Allpets/PetModel';
import Accessories from './Accessories';

const PetAccessories: React.FC = () => {
    const dispatch = useDispatch();
    const [filterdata, setFilterdata] = useState<PetObjData[] | undefined>([])
    useEffect(() => {
        dispatch(GetAllAccessories())
    },[dispatch])

    const accessorieses = useAppSelector((state) => state.petstore.allAccessories);
    const sliceAccessories = accessorieses.slice(0, 6);

    const FilterHandler = (item: string) => {
        if(item === 'all')
        {
            setFilterdata([])
        }
        if(item === 'dog')
        {
            const dogdata = accessorieses.filter(data => data.type === item);
            setFilterdata(dogdata)
        }
        if(item === 'cat')
        {
            const catdata = accessorieses.filter(data => data.type === item);
            setFilterdata(catdata)
        }
        if(item === 'other')
        {
            const otherdata = accessorieses.filter(data => data.type === item);
            setFilterdata(otherdata)
        }
    }
    return (
        <div className="container-fluid">
            <h2 className='fw-bold fs-4 text-center my-4'>This is Food And Accessories</h2>
            <Row className='justify-content-center g-3'>
                <Col onClick={() => FilterHandler('all')} lg={3} md={6} sm={12}><button className='btn btn-warning fw-bold'>ALL</button></Col>
                <Col onClick={() => FilterHandler('dog')} lg={3} md={6} sm={12}><button className='btn btn-warning fw-bold'>DOGS</button></Col>
                <Col onClick={() => FilterHandler('cat')} lg={3} md={6} sm={12}><button className='btn btn-warning fw-bold'>CATS</button></Col>
                <Col onClick={() => FilterHandler('other')} lg={3} md={6} sm={12}><button className='btn btn-warning fw-bold'>OTHER</button></Col>
            </Row>
            {
                filterdata?.length ? 
                <Row className='justify-content-center my-4'>
                    {
                        filterdata?.map(accessories => <Accessories key={accessories._id} accessories={accessories}></Accessories>)
                    }
                </Row>
                :
                <Row className='justify-content-center my-4'>
                    {
                        sliceAccessories?.map(accessories => <Accessories key={accessories._id} accessories={accessories}></Accessories>)
                    }
                <Row className='d-flex justify-content-center'>
                    <Col lg={4}>
                    <button className='btn btn-dark fw-bold'>SEE ALL</button>
                    </Col>
                </Row>
                </Row>
            }
        </div>
    );
};

export default PetAccessories;