import React, {useEffect} from 'react';
import NavRow from '../../UserNavbar/NavRow';
import UserNavbar from '../../UserNavbar/UserNavbar';
import {Row} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { GetPetsType } from '../../../../features/PetSlice/PetsSlice';
import { useAppSelector } from '../../../../app/apphook';
import Accessories from '../../AllPetAccessories/Accessories';

export interface PetTypeData {
    type: string, category: string
}
const CatsFood = () => {
    const dispatch = useDispatch();
    const obj: PetTypeData | string = JSON.stringify({type: 'cat', category: 'food'})
    useEffect(() => {
        dispatch(GetPetsType(obj))
    },[dispatch, obj])
    const allcatfood = useAppSelector((state) => state.petstore.petstype)

    return (
        <div className='container-fluid'>
            <NavRow></NavRow>
            <UserNavbar></UserNavbar>
            <Row className="justify-content-center py-4">
                {
                    allcatfood?.map(accessories => <Accessories key={accessories._id} accessories={accessories}></Accessories>)
                }
            </Row>
        </div>
    );
};

export default CatsFood;