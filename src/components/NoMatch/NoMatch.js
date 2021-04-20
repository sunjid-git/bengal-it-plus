
import React from 'react';
import { Link } from 'react-router-dom';

import error from '../../images/error.png';
const NoMatch = () => {
    return (
        <div className="container text-center">
           
                <img className="errorImg" src={error} alt=""/>
           
            <div className="text-center">
                <Link className="explore" to={`/home`}>Go home</Link>
            </div>
        </div>
    );
};

export default NoMatch;