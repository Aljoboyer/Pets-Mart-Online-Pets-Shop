import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import sitelogo from '../../../Images/new/navlogo.png'
const DashboardNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='adminnav'>
        <Container className='p-2'>
        <Navbar.Brand href="#home" className='text-light fw-bold'> <img className='navimg w-25' src={sitelogo} alt="" /> Admin Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
 
          </Nav>
          <Nav>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default DashboardNav;