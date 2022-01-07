import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminDashboardSidebar = () => {
    return (
        <>
    <ListGroup>
        <ListGroup.Item as={Link} to="/adminDashboard" action variant="secondary">
            Home
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/adminDashboard/ManagePetsdata" action variant="success">
            Manage Data
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/adminDashboard/addpets" action variant="secondary">
            Add Pet
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/adminDashboard/ManagePetsOrder" action variant="success">
            Manage Pet Order
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/adminDashboard/ManageAccessoriesOrder" action variant="success">
            Manage Accessories Order
        </ListGroup.Item>
        <ListGroup.Item as={Link} to="/adminDashboard/MakeAdmin" action variant="success">
            Make Admin
        </ListGroup.Item>
    </ListGroup>
        </>
    );
};

export default AdminDashboardSidebar;