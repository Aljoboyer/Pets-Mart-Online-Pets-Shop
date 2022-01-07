import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import { useAppSelector } from '../../../app/apphook';
import useFirebase from '../../Shared/Authentication/UseFirebase';
import './Usernav.css';
import navlogo from '../../../Images/navlogo.jpg';

const UserNavbar: React.FC = () => {
  const carts = useAppSelector((state) => state.petstore.carts);
  const navigate =  useNavigate()
  const {user, LogOutUser} = useFirebase();

  const LogOutHandler = () => {
    LogOutUser(navigate)
  }
    return (
        <Navbar collapseOnSelect expand="lg" >
        <Container className="p-4">
        <Navbar.Brand href="#home"className=''></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='fw-bold fs-5 text-dark' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='fw-bold fs-5 text-dark' as={Link} to="/addpets">Add Pets</Nav.Link>
            <Nav.Link className='fw-bold fs-5 text-dark' as={Link} to="/YourCarts">Your Cart {carts.length}<i className="fas fa-shopping-cart"></i></Nav.Link>
            <Nav.Link className='fw-bold fs-5 text-dark' as={Link} to="/adminDashboard">Admin Dashboard</Nav.Link>
            <NavDropdown className='fw-bold fs-5 text-dark' title="Your Order" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/petorder">Pet Order</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/accessoriesOrder">Accessories Order</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {
              user?.email ? <button onClick={LogOutHandler} className='btn btn-warning fw-bold  fs-5'>Log-Out</button> : <><Nav.Link as={Link} to="/register">Sign-Up</Nav.Link><Nav.Link as={Link} to="/login">Login</Nav.Link></>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default UserNavbar;