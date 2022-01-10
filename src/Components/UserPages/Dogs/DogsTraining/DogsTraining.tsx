import React from 'react';
import {Row, Col} from 'react-bootstrap';
import tips from '../../../../Images/Dogs Trianing/tips.jpg';
import walking from '../../../../Images/Dogs Trianing/walking.jpg'
import skijoring from '../../../../Images/Dogs Trianing/skijoring.jpg'
import national from '../../../../Images/Dogs Trianing/national.jpg'
import realname from '../../../../Images/Dogs Trianing/dogs real name.jpg'
import cratetrain from '../../../../Images/Dogs Trianing/cratetrain.jpg'
import common from '../../../../Images/Dogs Trianing/8common.jpg';
import tenfun from '../../../../Images/Dogs Trianing/10fun.jpg'
import NavRow from '../../UserNavbar/NavRow';
import UserNavbar from '../../UserNavbar/UserNavbar'
const DogsTraining = () => {
    return (
        <div className="container-fluid">
             <NavRow></NavRow>
            <UserNavbar></UserNavbar>
            <Row className="container mx-auto">
                <Row className="justify-content-center mb-3">
                    <Col lg={8} md={10} sm={12}>
                        <img className='img-fluid mb-3' src={tips} alt="" />
                        <h4 className='training-title'>Tips For Training Your Dog To Remain Calm Around Skateboards <span className='spantext'><i className="fas fa-comment-alt train-icon">Comments</i></span></h4>
                    </Col>
                </Row>
                <Row className='justify-content-center mb-3 g-2'>
                    <Col lg={5} md={6} sm={12}>
                        <img className='img-fluid mb-3' src={tenfun} alt="" />
                        <h4 className='training-title'>10 Things Dog Parents Should Know About Potty Training <span className='spantext'><i className="fas fa-comment-alt train-icon">Comments</i></span></h4>
                        <p>Potty training a dog can be a daunting task if you’ve never done it before, but dog parents can tell you quite a few things they’ve learned.</p>
                    </Col>
                    <Col lg={5} md={6} sm={12}>
                        <img className='img-fluid mb-3' src={walking} alt="" />
                        <h4 className='training-title'>Dog Training: Walking On-Leash <span className='spantext'><i className="fas fa-comment-alt train-icon">Comments</i></span></h4>
                        <p>Walking your dog safely and calmly takes training! Check out what master trainer Ian Dunbar has to say about teaching your dog good leash manners.</p>
                    </Col>
                </Row>
                <Row className='justify-content-center mb-3 g-2'>
                    <Col lg={5} md={6} sm={12}>
                        <img className='img-fluid mb-3' src={common} alt="" />
                        <h4 className='training-title'>8 Common Mistakes Pet Parents Make When Training Their Dogs <span className='spantext'><i className="fas fa-comment-alt train-icon">Comments</i></span></h4>
                        <p>You’ve got a new furry addition to the family, and you can’t wait to start training your pup to do all kinds of tricks. But hold on before you jump into it. There are lots of mistakes that dog parents make when training their pups. Before you begin, make sure you know what not to do.</p>
                    </Col>
                    <Col lg={5} md={6} sm={12}>
                    <img className='img-fluid mb-3' src={cratetrain} alt="" />
                        <h4 className='training-title'>Crate Training Your Dog: Everything Pet Parents Should Know <span className='spantext'><i className="fas fa-comment-alt train-icon">Comments</i></span></h4>
                    </Col>
                </Row>
                <Row className='justify-content-center mb-3 g-2'>
                    <Col lg={5} md={6} sm={12}>
                        <img className='img-fluid mb-3' src={national} alt="" />
                        <h4 className='training-title'>National Train Your Dog Month: Kick Off Your Dog’s Training In January! <span className='spantext'><i className="fas fa-comment-alt train-icon">Comments</i></span></h4>
                        <p>Since January is National Train Your Dog Month, why not use the opportunity to start some good habits and strengthen your bond with your pup?</p>
                    </Col>
                    <Col lg={5} md={6} sm={12}>
                    <img className='img-fluid mb-3' src={skijoring} alt="" />
                        <h4 className='training-title'>Skijoring Could Be A Fun Exercise To Stay Active With Your Dog In Winter <span className='spantext'><i className="fas fa-comment-alt train-icon">Comments</i></span></h4>
                        <p>Skijoring combines cross-country skiing with dog walking or running. It might be a good winter activity for the right dog and human to get some exercise.</p>
                    </Col>
                </Row>
                <Row className='justify-content-center mb-3 g-2'>
                    <Col lg={7} md={6} sm={12}>
                        <img className='img-fluid mb-3' src={realname} alt="" />
                        <h4 className='training-title'>Here’s Why You Should Use Your Dog’s Real Name For Better Training <span className='spantext'><i className="fas fa-comment-alt train-icon">Comments</i></span></h4>
                        <p>New research suggests that you may need to frequently use your dog’s chosen name when training. Pups can distinguish their names in a fairly noisy environment. What’s more, they even respond when called by a stranger, making it the perfect training for service and therapy dogs.</p>
                    </Col>
                </Row>
            </Row>
        </div>
    );
};

export default DogsTraining;