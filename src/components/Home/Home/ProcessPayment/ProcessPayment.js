import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SplitCardForm from '../SplitCardForm/SplitCardForm';



const stripePromise = loadStripe('pk_test_51Ig2phCRlR0G3bgPAiAjSfW5v4W5RrKiIdN1CwCLazbju80OCqLfsxYG7ouspAr8XnXCT63yzyOfDS0QgrsZ7hCc002VJYpswh');


const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <SplitCardForm></SplitCardForm> 
        </Elements>
    );
};

export default ProcessPayment;