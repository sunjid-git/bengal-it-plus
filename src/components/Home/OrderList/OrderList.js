import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import List from '../List/List';

const OrderList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <Navbar></Navbar>
            <List></List>
            <Footer></Footer>
        </div>
    );
};

export default OrderList;