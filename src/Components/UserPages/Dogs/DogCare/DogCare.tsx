import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../Dogs.css';
import dogcarebanner from '../../../../Images/dogcarebanner.jpg';
import NavRow from '../../UserNavbar/NavRow';
import UserNavbar from '../../UserNavbar/UserNavbar';
import hipjoin from '../../../../Images/hipandjoin.jpg';
import dental from '../../../../Images/dental.jpeg';
import omega from '../../../../Images/omega.jpg';
import cannanine from '../../../../Images/cannanine.jpg';

const DogCare = () => {
    return (
        <div className="container-fluid">
             <NavRow></NavRow>
            <UserNavbar></UserNavbar>
            <Row className="dogcarRow text-center">
                <h1 className='dogcaretitle mt-2'>Complete DOG Care  AND  Pain Relief</h1>
                <p className='dogcaretext my-3 text-light'>Our mission is to help your dog age well and live the best possible life. Using unique blends of all-natural, powerful ingredients, Happy, Healthy™ supplements can heal common pain points and revitalize your senior pup.</p>
            </Row>
            <Row className="dogcarRow">
                <img className='img-fluid' src={dogcarebanner} alt="" />
            </Row>
            <Row className='container mx-auto justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                    <img className='img-fluid' src={hipjoin} alt="" />
                </Col>
                <Col className='hipjoin d-flex align-items-center' lg={6} md={6} sm={12}>
                    <div>
                    <h2 className='fw-bold text-light'>Advanced Hip AND Joint Soft Chews</h2>
                    <p className='text-light'>Joint Pain ReliefPain ReliefDigestion
                    Provides natural relief from joint distress for improved flexibility, reduced inflammation, and strengthened cartilage and joints.
                    </p>
                    <h5 className='learnmore'>Learn More</h5>
                    </div>
                </Col>
            </Row>
            <Row className='container mx-auto justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                    <img className='img-fluid' src={omega} alt="" />
                </Col>
                <Col className='omega d-flex align-items-center' lg={6} md={6} sm={12}>
                    <div>
                    <h2 className='fw-bold text-light'>Omega 3-6-9 Soft Chews</h2>
                    <p className='text-light'>These important nutrients help support and maintain skin and coat, joints, immune system, cellular and heart health, as well as brain and eye development.</p>
                    <h5 className='learnmore'>Learn More</h5>
                    </div>
                </Col>
            </Row>
            <Row className='container mx-auto justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                <img className='img-fluid' src={dental} alt="" />
                </Col>
                <Col className='dental d-flex align-items-center' lg={6} md={6} sm={12}>
                    <div>
                    <h2 className='fw-bold text-light'>Mint Flavored Dental Rinse</h2>
                    <p className='text-light'>Oral HygienePain Relief
                    Enzymes and targeted oral probiotics fight disease and odor-causing bacteria while aloe and essential oils freshen breath and help soothe inflamed gums.
                    </p>
                    <h5 className='learnmore'>Learn More</h5>
                    </div>
                </Col>
            </Row>
            <Row className='container mx-auto justify-content-center'>
                <Col lg={6} md={6} sm={12}>
                <img className='img-fluid' src={cannanine} alt="" />
                </Col>
                <Col className='d-flex align-items-center cannine' lg={6} md={6} sm={12}>
                    <div>
                    <h2 className='fw-bold text-light'>Ultra Premium Wellness Oil</h2>
                    <p className='text-light'>Anxiety ReliefJoint Pain ReliefPain ReliefAllergy ReliefDigestion
                    Provides natural relief from joint pain, allergies and anxiety. Contains 0% THC and proven pure through quality testing.
                    </p>
                    <h5 className='learnmore'>Learn More</h5>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default DogCare;