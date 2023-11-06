import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminDashboardSidebar from './AdminDashboardSidebar';
import DashboardNav from './DashboardNav';
import {
    Outlet
  } from "react-router-dom";
const AdminDashboard = () => {
    return (
        <div className='container-fluid'>
           <div className='admin_navbar_div'> <DashboardNav></DashboardNav></div>
            <Row className='my-4'>
                <Col className="sidebar admin_sidebars" lg={2} md={4} sm={12}>
                    <AdminDashboardSidebar></AdminDashboardSidebar>
                </Col>
                <Col className='dataside my-4 ' lg={10} md={8} sm={12}>
                    <Outlet/>
                </Col>
            </Row>
        </div>
    );
};

export default AdminDashboard;