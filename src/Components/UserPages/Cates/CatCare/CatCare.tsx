import React from 'react';
import {Col, Row} from 'react-bootstrap';
import NavRow from '../../UserNavbar/NavRow';
import UserNavbar from '../../UserNavbar/UserNavbar';
import '../Cates.css';
import catfind from '../../../../Images/cats/cancat.webp'
import lyingdown from '../../../../Images/cats/cat-lying-down-grabbing-string.webp'
import walking from '../../../../Images/cats/cat-walking-around-house.webp'
import whiskers from '../../../../Images/cats/cat-whiskers.webp'
import ginger from '../../../../Images/cats/ginger-cat-sitting-in-living-room.webp'
const CatCare = () => {
    return (
        <div className='container-fluid'>
            <NavRow></NavRow>
            <UserNavbar></UserNavbar>
            <Row className='catcare_row container mx-auto'>
               <h1 className=' mt-auto text-light catcare-title'>Cat Care <br /> <span className='center-title'>Center</span></h1>
            </Row>
            <Row className='container mx-auto'>
               <Row className='justify-content-center mb-3 mt-3'>
                   <Col lg={5} md={6} sm={12}>
                       <img className='img-fluid' src={catfind} alt="" />
                   </Col>
                   <Col lg={5} md={6} sm={12}>
                   <h4>Can Cats Find Their Way Home?</h4>
                   <p>If your cat has ever gone missing, you know that feeling of dread and worry as you wonder where your pet has gone. It’s only natural to wonder how they got out and whether it’s true that cats can find their own way home. Here are some answers about whether cats have these…</p>
                   <h6>Learn More...</h6>
                   </Col>
               </Row>
               <Row className='justify-content-center mb-3'>
                   <Col lg={5} md={6} sm={12}>
                       <img className='img-fluid' src={whiskers} alt="" />
                   </Col>
                   <Col lg={5} md={6} sm={12}>
                   <h4>Why Do Cats Have Whiskers?</h4>
                   <p>Straight or curly, long or short, whiskers are a notable part of the feline face. Most would agree that a cat without whiskers would be a strange sight indeed, but it may surprise you how important these seemingly superficial structures are to your cat! A cat’s whiskers are…</p>
                   <h6>Learn More...</h6>
                   </Col>
               </Row>
               <Row className='justify-content-center mb-3'>
                   <Col lg={5} md={6} sm={12}>
                       <img className='img-fluid' src={walking} alt="" />
                   </Col>
                   <Col lg={5} md={6} sm={12}>
                   <h4>How Long Are Cats in Heat?</h4>
                   <p>A heat cycle is the normal cycle of reproduction that occurs in unspayed female cats. Here’s everything you need to know about feline heat cycles and what to expect. How Long Does a Cat Heat Cycle Last? Signs of heat will resolve within 24-48 hours of ovulation, which will…</p>
                   <h6>Learn More...</h6>
                   </Col>
               </Row>
               <Row className='justify-content-center mb-3'>
                   <Col lg={5} md={6} sm={12}>
                       <img className='img-fluid' src={lyingdown} alt="" />
                   </Col>
                   <Col lg={5} md={6} sm={12}>
                   <h4>The Ultimate Guide to Eliminating Cat Pee Smell</h4>
                   <p>Updated and reviewed for accuracy on April 7, 2020, by Dr. Katie Grzyb, DVM When your cat starts urinating outside the litter box, the smell can be difficult to get rid of and nearly impossible to mask. Whether your cat pees on the carpet, a piece of furniture, bed linens,…</p>
                   <h6>Learn More...</h6>
                   </Col>
               </Row>
               <Row className='justify-content-center mb-3'>
                   <Col lg={5} md={6} sm={12}>
                       <img className='img-fluid' src={ginger} alt="" />
                   </Col>
                   <Col lg={5} md={6} sm={12}>
                   <h4>Is Declawing Cats Illegal?</h4>
                   <p>Declawing a cat used to be considered an effective way to deter destructive scratching in cats. However, times are changing, and a movement to ban the declawing of cats has emerged. This movement to make the practice of declawing cats illegal has grown in recent years, and…</p>
                   <h6>Learn More...</h6>
                   </Col>
               </Row>
            </Row>
        </div>
    );
};

export default CatCare;