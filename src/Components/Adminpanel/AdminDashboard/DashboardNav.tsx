import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const DashboardNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
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