import React from 'react';
import Allpets from '../Allpets/Allpets';
import UserNavbar from '../UserNavbar/UserNavbar';
import PetAccessories from '../AllPetAccessories/PetAccessories'
import NavRow from '../UserNavbar/NavRow';
import HomeBanner from './HomeBanner/HomeBanner';
import ClothANDHealty from './ClothANDHealty/ClothANDHealty';
const UserHome: React.FC = () => {
    return (
        <div className='container-fluid'>
            <NavRow></NavRow>
            <UserNavbar></UserNavbar>
            <HomeBanner></HomeBanner>
            <ClothANDHealty></ClothANDHealty>
            <Allpets></Allpets>
            <PetAccessories></PetAccessories>
        </div>
    );
};

export default UserHome;