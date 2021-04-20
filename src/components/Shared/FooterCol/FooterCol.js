import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-4 bg-light p-5">
            <h6 className="text-success">
                {props.menuTitle ? props.menuTitle : " "}
            </h6>
            {props.children && props.children}
            
            <ul className="list-unstyled">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-muted">{item.name}</Link></li>)
                 }
            </ul>
            
        </div>
    );
};

export default FooterCol;