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
            <h2 className='fw-bold fs-1 regulartext regularcolor text-center my-4'>Food And Accessories</h2>
            <Row className='justify-content-center g-3 text-center  gap-3'>
                <Col className='category_colam' onClick={() => FilterHandler('all')} lg={2} md={6} sm={12}><h6 className='p-2 fw-bold'>ALL</h6></Col>
                <Col className='category_colam' onClick={() => FilterHandler('dog')} lg={2} md={6} sm={12}><h6 className='p-2 fw-bold'>DOGS</h6></Col>
                <Col className='category_colam' onClick={() => FilterHandler('cat')} lg={2} md={6} sm={12}><h6 className='p-2 fw-bold'>CATS</h6></Col>
                <Col className='category_colam' onClick={() => FilterHandler('other')} lg={2} md={6} sm={12}> <h6 className='p-2 fw-bold'>OTHER</h6> </Col>
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
                <Row className='d-flex justify-content-center mt-4'>
                    <Col lg={2}>
                     <Row>
                     <button className='seeall_btn fw-bold fs-5'>SEE ALL <i className="fas fa-angle-double-right"></i></button>
                     </Row>
                    </Col>
                </Row>
                </Row>
            }
        </div>
    );
};

export default PetAccessories;