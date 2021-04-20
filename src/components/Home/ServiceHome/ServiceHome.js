import React, { useEffect, useState } from 'react';
import ServiceEvent from '../ServiceEvent/ServiceEvent';
import spinner from '../../../images/spinner.gif';
import { Link } from 'react-router-dom';
const ServiceHome = () => {
    const [loading, setLoading] = useState(true)
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://evening-woodland-61193.herokuapp.com/events')
        .then(res => res.json())
        .then(data => 
            {
                setServices(data.slice(0,6));
                setLoading(false);
            })
    },[])


    return (
        <div className="container">
            
            <h1 className="text-center text-success m-4">Our Services</h1>

            <div className="row bg-light">
                {
                  loading ? <img src={spinner} alt=""/> :  services.map(service => <ServiceEvent service={service}></ServiceEvent> )
                }
            </div>
            
            <div className="text-center bg-light py-5">
                <Link className="explore" to={`/order`}>Explore For More</Link>
            </div>
            
        </div>
    );
};

export default ServiceHome;