import React from 'react';


import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

import HomeBanner from '../HomeBanner/HomeBanner';
import Reviews from '../Reviews/Reviews';
import ServiceHome from '../ServiceHome/ServiceHome';
import ContactForm from './ContactForm/ContactForm';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            <Products></Products>
            <ServiceHome></ServiceHome>
            <Reviews></Reviews>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;