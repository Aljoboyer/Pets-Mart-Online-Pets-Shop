import React from 'react';
import './App.css';
import AddPetsData from './Components/Adminpanel/AddpetsData/AddPetsData';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserHome from './Components/UserPages/UserHome/UserHome';
import PetOrderDetails from './Components/UserPages/PetOrderDetails/PetOrderDetails';
import YourCarts from './Components/UserPages/YourCarts/YourCarts';
import Login from './Components/Shared/Login/Login';
import Register from './Components/Shared/Register/Register';
import Privateroute from './Components/Shared/PrivateRoute/PrivateRoute';
import AdminDashboard from './Components/Adminpanel/AdminDashboard/AdminDashboard';
import DashboardHome from './Components/Adminpanel/AdminDashboard/DashboardHome';
import MakeAdmin from './Components/Adminpanel/MakeAdmin/MakeAdmin';
import ManageAccessoriesOrder from './Components/Adminpanel/ManageAccessoriesOrder/ManageAccessoriesOrder';
import ManagePetsdata from './Components/Adminpanel/ManagePetsData/ManagePetsdata';
import ManagePetsOrder from './Components/Adminpanel/ManagePetsOrder/ManagePetsOrder';
import YourPetsOrders from './Components/UserPages/YourPetsOrders/YourPetsOrders';
import YourAccessoriesOrders from './Components/UserPages/YourAccessoriesOrder/YourAccessoriesOrders';
import Footer from './Components/UserPages/Footer/Footer';
import PetSearchItems from './Components/UserPages/PetSearchItems/PetSearchItems';
import FindDog from './Components/UserPages/Dogs/FindDog/FindDog';
import FindCat from './Components/UserPages/Cates/FindCat/FindCat';
import CatsFood from './Components/UserPages/Cates/CatsFood/CatsFood';
import DogsFood from './Components/UserPages/Dogs/DogsFood/DogsFood';
import CatAccessories from './Components/UserPages/Cates/CatAccessories/CatAccessories';
import DogsAccessories from './Components/UserPages/Dogs/DogAccessories/DogAccessories';
import DogCare from './Components/UserPages/Dogs/DogCare/DogCare';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserHome/>}/>
            <Route path="/PetOrderDetails/:id" element={<Privateroute><PetOrderDetails/></Privateroute>}/>
            <Route path="/YourCarts" element={<YourCarts/>}/>
            <Route path="/petorder" element={<YourPetsOrders/>}/>
            <Route path="/accessoriesOrder" element={<YourAccessoriesOrders/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/PetSearchItems" element={<PetSearchItems/>}/>
            <Route path="/FindDog" element={<FindDog/>}/>
            <Route path="/FindCat" element={<FindCat/>}/>
            <Route path="/CatsFood" element={<CatsFood/>}/>
            <Route path="/DogsFood" element={<DogsFood/>}/>
            <Route path="/CatAccessories" element={<CatAccessories/>}/>
            <Route path="/DogsAccessories" element={<DogsAccessories/>}/>
            <Route path="/DogCare" element={<DogCare/>}/>
            
            <Route path="/adminDashboard" element={<AdminDashboard/>}>
                <Route path="/adminDashboard" element={<DashboardHome/>}/>
                <Route path="/adminDashboard/addpets" element={<AddPetsData/>}/>
                <Route path="/adminDashboard/MakeAdmin" element={<MakeAdmin/>}/>
                <Route path="/adminDashboard/ManageAccessoriesOrder" element={<ManageAccessoriesOrder/>}/>
                <Route path="/adminDashboard/ManagePetsdata" element={<ManagePetsdata/>}/>
                <Route path="/adminDashboard/ManagePetsOrder" element={<ManagePetsOrder/>}/>
            </Route>
          </Routes>
          <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
