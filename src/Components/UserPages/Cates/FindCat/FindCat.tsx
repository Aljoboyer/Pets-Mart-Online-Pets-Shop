import React, {useEffect} from 'react';
import {Row} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../app/apphook';
import { GetPetsType } from '../../../../features/PetSlice/PetsSlice';
import Pets from '../../Allpets/Pets';
import { PetTypeData } from '../../Dogs/FindDog/FindDog';
import NavRow from '../../UserNavbar/NavRow';
import UserNavbar from '../../UserNavbar/UserNavbar';


const FindCat = () => {
    const dispatch = useDispatch();
    const obj: PetTypeData | string = JSON.stringify({type: 'cat', category: 'pets'})
    useEffect(() => {
        dispatch(GetPetsType(obj))
    },[dispatch, obj])
    const allcats = useAppSelector((state) => state.petstore.petstype)

    return (
        <div className='container-fluid'>
            <NavRow></NavRow>
            <UserNavbar></UserNavbar>
            <Row className="justify-content-center">
                {
                    allcats?.map(pet => <Pets key={pet._id} pet={pet}></Pets>)
                }
            </Row>
        </div>
    );
};

export default FindCat;