import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Row, Col} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import { useAppSelector } from '../../../app/apphook';
import useFirebase from '../../Shared/Authentication/UseFirebase';
import './Usernav.css';
import dogslogo from '../../../Images/dogslogo.png';
import catlogo from '../../../Images/catlogo.jpg';
import foodlogo from '../../../Images/foodlogo.jpg';
import accessories from '../../../Images/accessorieslogo.png';

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
            <Nav.Link className='fw-bold fs-6 text-dark' as={Link} to="/">Home</Nav.Link>
            <Nav.Link className='fw-bold fs-6 text-dark' as={Link} to="/YourCarts">Your Cart {carts.length}<i className="fas fa-shopping-cart"></i></Nav.Link>
            <Nav.Link className='fw-bold fs-6 text-dark' as={Link} to="/adminDashboard">Admin Dashboard</Nav.Link>
            <NavDropdown className='fw-bold fs-6 text-dark' title="Your Order" id="collasible-nav-dropdown">
              <NavDropdown.Item className="navtext fw-bold" as={Link} to="/petorder">Pet Order</NavDropdown.Item>
              <NavDropdown.Item className="navtext fw-bold" as={Link} to="/accessoriesOrder">Accessories AND Food Order</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='fw-bold fs-6 text-dark' title="DOG" id="collasible-nav-dropdown">
                  <Row className='droprow g-2'>
                    <Col className="d-flex align-items-center" lg={6} md={6} sm={12}>
                      <Row className='g-4'>
                        <Col as={Link} to="/FindDog" className="navtext fw-bold" lg={12} md={6} sm={12}>FIND DOG</Col>
                        <Col className="navtext fw-bold" lg={12} md={6} sm={12}>DOGS CARE</Col>
                        <Col className="navtext fw-bold" lg={12} md={6} sm={12}>DOGS TRAINING</Col>
                      </Row>
                    </Col>
                    <Col className="d-flex align-items-center" lg={6} md={6} sm={12}>
                      <img className='w-50' src={dogslogo} alt=""/>
                    </Col>
                  </Row>
            </NavDropdown>
            <NavDropdown className='fw-bold fs-6 text-dark' title="CAT" id="collasible-nav-dropdown">
                  <Row className='droprow g-2'>
                    <Col className="d-flex align-items-center" lg={6} md={6} sm={12}>
                      <Row className='g-4'>
                        <Col as={Link} to="/FindCat" className="navtext fw-bold" lg={12} md={6} sm={12}>FIND CATS</Col>
                        <Col className="navtext fw-bold" lg={12} md={6} sm={12}>CATS CARE</Col>
                        <Col className="navtext fw-bold" lg={12} md={6} sm={12}>CATS TRAINING</Col>
                      </Row>
                    </Col>
                    <Col className="d-flex align-items-center" lg={6} md={6} sm={12}>
                      <img className='w-50' src={catlogo} alt=""/>
                    </Col>
                  </Row>
            </NavDropdown>
            <NavDropdown className='fw-bold fs-6 text-dark' title="ACCESSORIES" id="collasible-nav-dropdown">
                  <Row className='droprow g-2'>
                    <Col className="d-flex align-items-center" lg={6} md={6} sm={12}>
                      <Row className='g-4'>
                        <Col as={Link} to="/DogsAccessories" className="navtext fw-bold" lg={12} md={6} sm={12}>DOGS</Col>
                        <Col as={Link} to="/CatAccessories" className="navtext fw-bold" lg={12} md={6} sm={12}>CATES</Col>
                        <Col className="navtext fw-bold" lg={12} md={6} sm={12}>OTHER</Col>
                      </Row>
                    </Col>
                    <Col className="d-flex align-items-center" lg={6} md={6} sm={12}>
                      <img className='w-50' src={accessories} alt=""/>
                    </Col>
                  </Row>
            </NavDropdown>
            <NavDropdown className='fw-bold fs-6 text-dark' title="FOODS" id="collasible-nav-dropdown">
                  <Row className='droprow g-2'>
                    <Col className="d-flex align-items-center" lg={6} md={6} sm={12}>
                      <Row className='g-4'>
                        <Col as={Link} to="/DogsFood" className="navtext fw-bold" lg={12} md={6} sm={12}>DOGS</Col>
                        <Col as={Link} to="/CatsFood" className="navtext fw-bold" lg={12} md={6} sm={12}>CATES</Col>
                        <Col className="navtext fw-bold" lg={12} md={6} sm={12}>OTHER</Col>
                      </Row>
                    </Col>
                    <Col className="d-flex align-items-center" lg={6} md={6} sm={12}>
                      <img className='w-50' src={foodlogo} alt=""/>
                    </Col>
                  </Row>
            </NavDropdown>
          </Nav>
          <Nav>
            {
              user?.email ? <button onClick={LogOutHandler} className='btn btn-warning fw-bold  fs-6'>Log-Out</button> : <><Nav.Link as={Link} to="/register">Sign-Up</Nav.Link><Nav.Link as={Link} to="/login">Login</Nav.Link></>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default UserNavbar;