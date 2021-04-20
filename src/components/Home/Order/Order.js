import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Items from '../Items/Items';

const Order = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <Items></Items>
            <Footer></Footer>
        </div>
    );
};

export default Order;