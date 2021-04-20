import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import ProcessPayment from '../Home/ProcessPayment/ProcessPayment';

const PaymentPage = () => {
    return (
    <div className="container">
        <Navbar></Navbar>
        <ProcessPayment></ProcessPayment>
        <Footer></Footer>
    </div>
    );
};

export default PaymentPage;