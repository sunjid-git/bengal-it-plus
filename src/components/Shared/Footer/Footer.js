import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    
    const services = [
        {name: "Sales" , link: "/sales"},
        {name: "Repair" , link: "/repair"},
        {name: "Recovery" , link: "/recovery"},
        {name: "Purchase" , link: "/purchase"}
    ]
    const gadgets = [
        {name: "Printer" , link: "/printer"},
        {name: "Camera" , link: "/camera"},
        {name: "Laptop" , link: "/laptop"},
        {name: "Personal Computer" , link: "/pc"},
        {name: "Hard Disk Drive" , link: "/hdd"},
        {name: "Solid State Disk" , link: "/ssd"}
    ]
    const address = [
        {name: "Dhaka - Bangladesh" , link: "//google.com/map"}
    ]
    return (
        <footer className="container footer-area clear-both bg-light">
            
                <div className="row d-flex justify-content-center py-5">
                    <FooterCol  menuTitle="Services We Provide" menuItems={services}/>
                    <FooterCol  menuTitle="Gadgets We Deal With" menuItems={gadgets}/>
                    <FooterCol menuTitle="Find Us Here" menuItems=
                    {address}> 

                        <ul className="social-media list-inline">

                            <div className="mt-3">
                                <p><strong>Contact : </strong>+880 1770-981-999</p>
                            </div>

                            <p><strong>Social Media link : </strong></p>

                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon text-primary" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item "><a href="//youtube.com"><FontAwesomeIcon className="icon active-icon text-danger" icon={faYoutube} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon active-icon text-info" icon={faInstagram} /></a></li>
                        </ul>
                        <strong>Address : </strong>
                    </FooterCol>
                   
                </div>
                <div className="text-center bg-light pb-5">
                        <p className="text-danger">
                        All Rights Reserved - {(new Date()).getFullYear()} 
                        </p>
                </div>
           
        </footer>
    );
};

export default Footer;