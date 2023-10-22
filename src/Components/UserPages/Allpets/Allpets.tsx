import React, { useEffect } from 'react';
import {Row, Spinner} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/apphook';
import { GetAllPets } from '../../../features/PetSlice/PetsSlice';
import Pets from './Pets';


const Allpets: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetAllPets())
    },[dispatch]);

    const pets = useAppSelector((state) => state.petstore.allpets);

    return (
        <Row className="container-fluid justify-content-center g-4">
            {
                pets.length > 0 ? <>
                {pets.map(pet => <Pets key={pet._id} pet={pet}></Pets>)}
                </> : <Spinner animation="border" />
            }
        </Row>
    );
};

export default Allpets;