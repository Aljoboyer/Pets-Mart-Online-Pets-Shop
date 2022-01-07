import React from 'react';
import {Row} from 'react-bootstrap';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkoutform from './Checkoutform';

const stripePromise =  loadStripe('pk_test_51Jw2mpBSwbB9BMbhsyE9VsMWMbgeGoz35VdXDYoB2C1QGFkx7JTaEG4FFXG3pyBkqupeooBX2z3nPu0zERZuO1Tw00ZtAW0Wtx');

interface Props {
    totalAccessoriesAmount: number,
    alltotalamount: number
}
const Payment: React.FC<Props> = ({alltotalamount, totalAccessoriesAmount}) => {
    return (
        <Row>

            <Elements  stripe={stripePromise}>
                <Checkoutform alltotalamount={alltotalamount} totalAccessoriesAmount={totalAccessoriesAmount}></Checkoutform>
            </Elements>
        </Row>
    );
};

export default Payment;