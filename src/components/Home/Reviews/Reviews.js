import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://evening-woodland-61193.herokuapp.com/events')
        .then(res => res.json())
        .then(data => 
            {
                setReviews(data.slice(0,6))
            })
    },[])

    return (
        <div className="container mt-3 ">
            <h1 className="text-center text-success ">Client Reviews</h1>
            <div className="row m-5 p-5 bg-light">
                {
                reviews.map(service => <Review service={service}></Review> )
                }
            </div>
        </div>
    );
};

export default Reviews;