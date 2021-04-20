import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
const Review = ({service}) => {
    return (
        <div className="col-md-4">

        <div className="d-flex">
            <img className="reviewImg" src={service.imageURL} alt=""/> 
            <h5 className="text-info pt-4"> {service.name}</h5>
        </div>

        <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="pb-4">
            <FontAwesomeIcon className="reviewStar" icon={faStar} />
            <FontAwesomeIcon className="reviewStar" icon={faStar} />
            <FontAwesomeIcon className="reviewStar" icon={faStar} />
            <FontAwesomeIcon className="reviewStar" icon={faStar} />
            <FontAwesomeIcon className="reviewStar" icon={faStarHalf} />
        </div>
        
    </div>
    );
};

export default Review;