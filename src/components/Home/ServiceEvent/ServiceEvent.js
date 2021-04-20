import React from 'react';
import './ServiceEvent.css'
const ServiceEvent = ({service}) => {

    return (
       <div className="col-md-4 d-flex justify-content-center">
           <div className="xyz m-2 p-3 ">
                <img className="serviceImg" src={service.imageURL} alt=""/>
                <h5 className="text-center p-3">{service.name}</h5>
           </div>
       </div>
    );
};

export default ServiceEvent;