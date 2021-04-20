import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import spinner from '../../../images/spinner.gif'
import { Link } from 'react-router-dom';
const Items = () => {

    const [loading, setLoading] = useState(true)
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://evening-woodland-61193.herokuapp.com/events')
        .then(res => res.json())
        .then(data => 
            {
                setServices(data)
                setLoading(false)
            })
    },[])

    return (
        <div className="container p-5">

            <h1 className="text-center text-success p-3">Services</h1>
            <div className="row p-5">
                {
                  loading ? <img src={spinner} alt=""/> :  services.map(service => <Item service={service}></Item> )
                }
            </div>
            
            <div className="text-center pt-5">
            <Link className="explore mr-5" to={`/serviceAddEvents`}>Back</Link> 
            <Link className="explore" to={`/home`}>Home</Link> 
            </div>

    </div>
    );
};

export default Items;