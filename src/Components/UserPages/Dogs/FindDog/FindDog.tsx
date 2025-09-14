import React, {useEffect} from 'react';
import NavRow from '../../UserNavbar/NavRow';
import UserNavbar from '../../UserNavbar/UserNavbar';
import {Row} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { GetPetsType } from '../../../../features/PetSlice/PetsSlice';
import { useAppSelector } from '../../../../app/apphook';
import Pets from '../../Allpets/Pets';

export interface PetTypeData {
    type: string, category: string
}
const FindDog = () => {
    const dispatch = useDispatch();
    const obj: PetTypeData | string = JSON.stringify({type: 'dog', category: 'pets'})
    useEffect(() => {
        dispatch(GetPetsType(obj))
    },[dispatch, obj])
    const alldogs = useAppSelector((state) => state.petstore.petstype)

    return (
        <div className='container-fluid'>
            <NavRow></NavRow>
            <UserNavbar></UserNavbar>
            <Row className="justify-content-center">
                {
                    alldogs && alldogs?.length > 0 ? <>
                    {
                         alldogs?.map(pet => <Pets key={pet._id} pet={pet}></Pets>)
                    }
                    </> : <div className='loading_div'>
                    
                        <h1 className='loading_text'>Loading......</h1>
                    </div>
                }
            </Row>
        </div>
    );
};

export default FindDog;