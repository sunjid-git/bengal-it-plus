import React, { useContext } from 'react';
import google from '../../../images/google.png';
import './Login.css'
import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { UserContext } from '../../../App';

const Login = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => {

            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            console.log(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);

        }).catch((error) => {

            var errorCode = error.code;
            var errorMessage = error.message;
    
            var email = error.email;
   
            var credential = error.credential;
    
        });
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="container text-center p-5">
            <h1 className="text-success">Login</h1>
            <button onClick={handleGoogleSignIn} className="googleBtn">
                <img className="googleImg" src={google} alt=""/> Google Sign in
            </button>
            </div>

            <div className="text-center pb-5">
                 <Link className="explore" to={`/order`}>Go Back</Link> 
                 <Link className="explore ml-5" to={`/home`}>Go home</Link>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Login;