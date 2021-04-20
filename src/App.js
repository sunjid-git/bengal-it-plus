import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ServiceAddEvents from './components/Home/ServiceAddEvents/ServiceAddEvents';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Shared/Login/Login';
import Contact from './components/Home/Home/Contact/Contact';
import Order from './components/Home/Order/Order';
import PaymentPage from './components/Home/PaymentPage/PaymentPage';

import { createContext, useState } from 'react';
import OrderList from './components/Home/OrderList/OrderList';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}> 
      <Router>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/serviceAddEvents">
            <ServiceAddEvents></ServiceAddEvents>
          </Route>

          <Route path="/order">
            <Order></Order>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>

          <Route path="/payment">
            <PaymentPage></PaymentPage>
          </Route>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
