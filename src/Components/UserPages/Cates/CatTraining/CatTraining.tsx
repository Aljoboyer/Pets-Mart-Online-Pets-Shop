import React from 'react';
import { Col, Row } from 'react-bootstrap';
import cattrain from '../../../../Images/cats/cattraining.jpg';
import NavRow from '../../UserNavbar/NavRow';
import UserNavbar from '../../UserNavbar/UserNavbar';
import litter from '../../../../Images/cats/littertrain.webp';
import kittencare from '../../../../Images/cats/kittencare.webp'
import introduce from '../../../../Images/cats/introduce.jpg'
import howtotrain from '../../../../Images/cats/howtotrain.webp'
import walk from '../../../../Images/cats/howtotakewalk.jpg'

const CatTraining = () => {
    return (
        <div className='container-fluid'>
            <NavRow></NavRow>
            <UserNavbar></UserNavbar>
            <Row className='p-4 cat_train_colam mb-3'>
                <Col lg={4} md={6} sm={12}>
                    <img className='img-fluid' src={cattrain} alt="" />
                </Col>
                <Col  className="d-flex align-items-center p-4 text-light ">
                  <div>
                  <h1 className='regulartext fw-bold'>CONGRATULATIONS</h1>
                <h5 className='regulartext'>ON YOUR NEW KITTEN</h5>
                <p >We'll help you navigate the exciting journey into pet parenthood every step of the way. Get started with these helpful tips, shopping checklists and more!</p>
                  </div>
                </Col>
            </Row>
            <Row className='mx-auto justify-content-center container mb-3'>
              <Col lg={5} md={6} sm={12}>
                  <img className='img-fluid' src={litter} alt="" />
              </Col>
              <Col lg={5} md={6} sm={12}>
                  <h4>Litter Training Kittens 101: When to Start and How to Do It</h4>
                  <p>Most adult cats will naturally seek out a sandy,granularplace to eliminate, but young kittens might need a little help figuring out proper litter box habits. When litter training kittens, there are a few things you can do to help set your kitten up for success. Here are…</p>
                  <h6 className='text-primary'>Read More....</h6>
              </Col>
            </Row>
            <Row className='mx-auto justify-content-center container mb-3'>
              <Col lg={5} md={6} sm={12}>
                  <img className='img-fluid' src={introduce} alt="" />
              </Col>
              <Col lg={5} md={6} sm={12}>
                  <h4>How to Introduce Cats</h4>
                  <p>Reviewed and updated for accuracy on March 30, 2020, by Dr. Manette Kohler, DVM If your cat has gotten along with another cat at some point in her life, you might assume that she will accept any new cat with no hissing or howling. Unfortunately, cats are territorial animals…....</p>
                  <h6 className='text-primary'>Read More....</h6>
              </Col>
            </Row>
            <Row className='mx-auto justify-content-center container mb-3'>
              <Col lg={5} md={6} sm={12}>
                  <img className='img-fluid' src={howtotrain} alt="" />
              </Col>
              <Col lg={5} md={6} sm={12}>
                  <h4>How to Train Your Cat to Use the Cat Door</h4>
                  <p>Image via iStock.com/w-ings By Carol McCarthy Even if you provide your indoor cat with plenty of stimulating cat toysand climbing surfaces, most will crave a walk on the wild side. And if you allow your cat to go outdoors sometimes, constantly playing doorman to a feline…....</p>
                  <h6 className='text-primary'>Read More....</h6>
              </Col>
            </Row>
            <Row className='mx-auto justify-content-center container mb-3'>
              <Col lg={5} md={6} sm={12}>
                  <img className='img-fluid' src={walk} alt="" />
              </Col>
              <Col lg={5} md={6} sm={12}>
                  <h4>How to Walk a Cat (and Live to Tell About It)</h4>
                  <p>Ever seen a cat out walking on a leash? Most people who have seen one react with astonishment that a cat would be domesticated enough to willingly allow itself to be tethered to a leash and guided around by -- of all things! -- a human companion. But it can, and does happen…...</p>
                  <h6 className='text-primary'>Read More....</h6>
              </Col>
            </Row>
            <Row className='mx-auto justify-content-center container mb-3'>
              <Col lg={5} md={6} sm={12}>
                  <img className='img-fluid' src={kittencare} alt="" />
              </Col>
              <Col lg={5} md={6} sm={12}>
                  <h4>Kitten Care 101: How to Socialize Kittens</h4>
                  <p>by Geoff Williams You wouldn't think that there would be much of a method, or even a reason, for socializing kittens. They're adorable. Everybody loves them. What more do you need to know? Quite a bit, actually. In fact, we do kittens a disservice when we don...</p>
                  <h6 className='text-primary'>Read More....</h6>
              </Col>
            </Row>
        </div>
    );
};

export default CatTraining;