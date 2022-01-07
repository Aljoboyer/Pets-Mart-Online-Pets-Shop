import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {useAppSelector} from '../../../app/apphook';
import UserNavbar from '../UserNavbar/UserNavbar';
import CartForm from './CartForm';
import YourCart from './YourCart';

const YourCarts: React.FC = () => {
    const cartdata = useAppSelector((state) => state.petstore.carts);

    return (
        <div className='container-fluid'>
            <UserNavbar></UserNavbar>
           <Row className='justify-content-center my-4'>
           <Col lg={5} md={5} sm={12}>
                <CartForm></CartForm>
            </Col>
            <Col lg={7} sm={12} md={7}>
                <Row className="justify-content-center">
                    {
                        cartdata?.map(data => <YourCart key={data._id} data={data}></YourCart>)
                    }
                </Row>
            </Col>
           </Row>
        </div>
    );
};

export default YourCarts;