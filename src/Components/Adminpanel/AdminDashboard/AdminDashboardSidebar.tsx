import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminDashboardSidebar = () => {
    return (
        <>
    <ListGroup className="sidenav">
        <ListGroup.Item className='regularcolor fw-bold' as={Link} to="/adminDashboard" action variant="secondary">
             Home
        </ListGroup.Item>
        <ListGroup.Item className='regularcolor fw-bold mt-2 sidenav' as={Link} to="/adminDashboard/ManagePetsdata" action >
            Manage Data
        </ListGroup.Item>
        <ListGroup.Item className='regularcolor fw-bold mt-2 sidenav' as={Link} to="/adminDashboard/addpets" action variant="secondary">
            Add Pet
        </ListGroup.Item>
        <ListGroup.Item className='regularcolor fw-bold mt-2 sidenav' as={Link} to="/adminDashboard/ManagePetsOrder" action >
            Manage Pet Order
        </ListGroup.Item>
        <ListGroup.Item className='regularcolor fw-bold mt-2 sidenav' as={Link} to="/adminDashboard/ManageAccessoriesOrder" action >
            Manage Accessories Order
        </ListGroup.Item>
        <ListGroup.Item className='regularcolor fw-bold mt-2 sidenav' as={Link} to="/adminDashboard/MakeAdmin" action >
            Make Admin
        </ListGroup.Item>
    </ListGroup>
        </>
    );
};

export default AdminDashboardSidebar;