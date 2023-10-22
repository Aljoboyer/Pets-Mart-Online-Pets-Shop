import React, { useEffect } from 'react';
import UserNavbar from '../UserNavbar/UserNavbar';
import PetAccessories from '../AllPetAccessories/PetAccessories'
import NavRow from '../UserNavbar/NavRow';
import HomeBanner from './HomeBanner/HomeBanner';
import ClothANDHealty from './ClothANDHealty/ClothANDHealty';
import WhatUrPetNeed from './WhatUrPetNeed/WhatUrPetNeed';
import Nutrition from './Nutrition/Nutrition';
import Introduce from './Introduce/Introduce';
import { useDispatch } from 'react-redux';
import { GetAllPets } from '../../../features/PetSlice/PetsSlice';
const UserHome: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllPets())
    },[dispatch]);
    return (
        <div className='container-fluid'>
            <NavRow></NavRow>
            <UserNavbar></UserNavbar>
            <HomeBanner></HomeBanner>
            <WhatUrPetNeed></WhatUrPetNeed>
            <ClothANDHealty></ClothANDHealty>
            <PetAccessories></PetAccessories>
            <Introduce></Introduce>
            <Nutrition></Nutrition>
        </div>
    );
};

export default UserHome;