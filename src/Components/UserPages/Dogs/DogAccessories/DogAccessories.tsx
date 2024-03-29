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
const DogsAccessories = () => {
    const dispatch = useDispatch();
    const obj: PetTypeData | string = JSON.stringify({type: 'dog', category: 'accessories'})
    useEffect(() => {
        dispatch(GetPetsType(obj))
    },[dispatch, obj])
    const alldogaccessories = useAppSelector((state) => state.petstore.petstype)

  
    return (
        <div className='container-fluid'>
            <NavRow></NavRow>
            <UserNavbar></UserNavbar>
            <Row className="justify-content-center py-4">
                {
                    alldogaccessories?.map(accessories => <Accessories key={accessories._id} accessories={accessories}></Accessories>)
                }
            </Row>
        </div>
    );
};

export default DogsAccessories;