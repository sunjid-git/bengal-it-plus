import React from 'react';

const ContactForm = () => {
    return (
        <div className="container p-5 bg-light">
            <h1 className="text-success text-center p-3">Contact Us</h1>
            <h3 className="text-info text-center">Let us handle your product, professionally...</h3>
            
            <div className="m-5 formShape">
                
                <div className="row d-flex justify-content-center">
                    <input type="text" placeholder="Full Name" className="form-control col-md-5 m-3"/>
                    <br/>
                    <input type="text" placeholder="Last Name" className="form-control col-md-5 m-3"/>

                    <br/>

                    <input type="email" placeholder="Email Address" className="form-control col-md-5 m-3"/>
                    <br/>
                    <input type="number" placeholder="Phone Number" className="form-control col-md-5 m-3"/>

                 

                    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}} className="form-control m-5"></textarea>

                </div>

                <div className="text-center bg-light pt-4">
                    <button className="explore">Send Message</button>
                </div>

            </div>
        </div>
    );
};

export default ContactForm;