import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'
const Item = ({service}) => {
    return (
        <div className="col-md-4 d-flex-justify-content-center">
            <h5 className="text-danger p-3"> <strong>{service.name}</strong></h5>
           <img className="serviceImg" src={service.imageURL} alt=""/>
           <h5 className="text-info p-3">
               <strong>Charge: </strong>
                ${service.price} 
                <Link className="serviceBtn" to={`/payment`}>Get Help</Link>
           </h5>
           
       </div>
    );
};

export default Item;