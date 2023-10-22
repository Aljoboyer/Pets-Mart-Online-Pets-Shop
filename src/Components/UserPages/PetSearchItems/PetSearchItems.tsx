import React from 'react';
import { Row } from 'react-bootstrap';
import { useAppSelector } from '../../../app/apphook';
import Pets from '../Allpets/Pets';
import NavRow from '../UserNavbar/NavRow';
import UserNavbar from '../UserNavbar/UserNavbar';

const PetSearchItems: React.FC = () => {

    const allsearchdata = useAppSelector((state) => state.petstore.allsearchdata)

    console.log('allsearchdata',allsearchdata)
    return (
        <div className='container-fluid'>
            <NavRow></NavRow>
            <UserNavbar></UserNavbar>
            <Row className='justify-content-center'>
                {
                    allsearchdata?.map(pet => <Pets key={pet._id} pet={pet}></Pets>)
                }
            </Row>
        </div>
    );
};

export default PetSearchItems;