import React from 'react';
import './HomeBanner.css';
import bg from '../../../images/homebg.jpg';
import { Link } from 'react-router-dom';
const HomeBanner = () => {
    return (
        <section className="container d-flex align-items-center bg-light">

        <div className="row">
            <div className="col-md-6 p-5">
                <h1 className="d-flex justify-content-center text-info">We Provide <br/> Quality Service...</h1>
                <p className="ml-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ratione quod vero error quibusdam ullam.</p>
              
                <Link className="explore ml-5" to={`/services`}>Explore Us</Link>
                
            </div>

            <div className="col-md-6 ">
                <img className="bg" src={bg} alt=""/>
            </div>
        </div>

        </section>
    );
};

export default HomeBanner;