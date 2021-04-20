import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css';
const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
    <nav className="navbar container navbar-expand-lg navbar-light bg-light p-3">
    <p className="navbar-brand font-weight-bold text-success" href="#">Bengal It Plus</p>
    <div className="collapse navbar-collapse justify-content-end" >
        <div className="navbar-nav ">
            <p className="nav-link active "><Link to={`/home`}>Home </Link></p>
            <p className="nav-link active"><Link to={`/order`}>Service</Link></p>
            <p className="nav-link active"><Link to={`/serviceAddEvents`}>Dashboard</Link></p>
            <p className="nav-link active"><Link to={`/orderList`}>Order List</Link></p>
            <p className="nav-link active"><Link to={`/contact`}>Contact Us</Link></p>
            {
            loggedInUser.email ? <p className="loggedInUserBtn">{loggedInUser.name}</p> : <p className="nav-link active" >
            <Link to={`/login`}><button className="notLoggedInUserBtn"> Login</button></Link>
                </p>
            }
            <Link to={`/payment`}></Link>
            <Link to={`/item`}></Link>
        </div>    
    </div>
    </nav>
    );
};

export default Navbar;