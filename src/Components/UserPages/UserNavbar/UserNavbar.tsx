import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Row, Col, DropdownButton} from 'react-bootstrap';
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
            {
              user?.email && <Nav.Link className='fw-bold fs-6 text-dark' as={Link} to="/YourCarts">Your Cart {carts.length}<i className="fas fa-shopping-cart"></i></Nav.Link>
            }

            {
              user?.email && <NavDropdown className='fw-bold fs-6 text-dark' title="Your Order" id="collasible-nav-dropdown">
              <NavDropdown.Item className="navtext fw-bold" as={Link} to="/petorder">Pet Order</NavDropdown.Item>
              <NavDropdown.Item className="navtext fw-bold" as={Link} to="/accessoriesOrder">Accessories AND Food Order</NavDropdown.Item>
            </NavDropdown>
            }
            <NavDropdown className='fw-bold fs-6 text-dark' title="DOG" id="collasible-nav-dropdown">
                  <Row className='droprow g-2'>
                    <Col className="d-flex align-items-center" lg={6} md={6} sm={12}>
                      <Row className='g-4'>
                        <Col as={Link} to="/FindDog" className="navtext fw-bold" lg={12} md={6} sm={12}>FIND DOG</Col>
                        <Col as={Link} to="/DogCare" className="navtext fw-bold" lg={12} md={6} sm={12}>DOGS CARE</Col>
                        <Col as={Link} to="/DogsTraining" className="navtext fw-bold" lg={12} md={6} sm={12}>DOGS TRAINING</Col>
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
                        <Col as={Link} to="/CatCare" className="navtext fw-bold" lg={12} md={6} sm={12}>CATS CARE</Col>
                        <Col as={Link} to="/CatTraining" className="navtext fw-bold" lg={12} md={6} sm={12}>CATS TRAINING</Col>
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
            <NavDropdown  className='fw-bold fs-6 text-dark' title="FOODS" id="collasible-nav-dropdown">
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
              user?.email ? <button onClick={LogOutHandler} className='btn btn-warning fw-bold  fs-6'>Log-Out <i className="fas fa-sign-out-alt"></i></button> : <><NavDropdown  className='fw-bold fs-6 text-dark' title="ACCOUNT" id="collasible-nav-dropdown">
        <Nav.Link className='nav_btn mx-2' as={Link} to="/register"> <span className='regularcolor fw-bold fs-6'>REGISTER <i className="far fa-user-circle"></i></span> </Nav.Link><Nav.Link className='nav_btn my-2' as={Link} to="/login"> <span className='regularcolor fw-bold fs-6'>LOG-IN <i className="fas fa-sign-in-alt"></i></span> </Nav.Link>
            </NavDropdown><i className="far fa-user-circle fa-2x regularcolor"></i></>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default UserNavbar;