import React from 'react';
import { Link } from 'react-router-dom';
import pro1 from '.././../../../images/pro1.jpg';
import pro2 from '.././../../../images/pro2.jpg';
import pro3 from '.././../../../images/pro3.jpg';
import './Products.css';
const Products = () => {
    return (
        <div className="container">
            <h1 className=" text-success font-weight-bold text-center pt-5">Available Products...</h1>
            <div class="card-deck m-5">
                <div class="card">
                    <img className="card-img-top p-4 proImg" src={pro1} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title text-center">Gadgets</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, molestiae?</p>
                  
                    </div>
                </div>
                <div class="card">
                    <img className="card-img-top p-4 " src={pro2} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title text-center">Appliance</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, consequuntur.</p>
                    
                    </div>
                </div>
                <div class="card">
                    <img className="card-img-top p-4" src={pro3} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title text-center">Vivid</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, rerum.</p>
                    
                    </div>
                </div>
                </div>

                <div className="text-center bg-light py-5">
                <Link className="explore" to={`/order`}>Explore For More</Link>
            </div>
        </div>
    );
};

export default Products;