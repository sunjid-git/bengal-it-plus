import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './List.css';
const List = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="container p-5">
            <h1 className="text-success text-center p-3">Customer's Order List</h1>
            <div className="m-5">
            <table className="text-center">
                <tr className="text-info p-5">
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Service</th>
                    <th>Pay With</th>
                    <th>Status</th>
                </tr>
                <tr className="text-secondary p-5">
                    <td>{loggedInUser.name}</td>
                    <td>{loggedInUser.email}</td>
                    <td>Electronics</td>
                    <td>
                    <select name="paymentOption" id="paymentOption">
                        <option value="onGoing">Credit card</option>
                        <option value="pending">Paypal</option>
                        </select>
                    </td>
                    <td>
                        <select name="status" id="status">
                            <option value="onGoing" className="text-warning">On Going</option>
                            <option value="pending" className="text-danger">Pending</option>
                            <option value="done" className="text-success">Done</option>
                        </select>
                    </td>
                </tr>

                <tr className="text-secondary p-5">
                    <td>{loggedInUser.name}</td>
                    <td>{loggedInUser.email}</td>
                    <td>Electronics</td>
                    <td>
                    <select name="paymentOption" id="paymentOption">
                        <option value="onGoing">Credit card</option>
                        <option value="pending">Paypal</option>
                        </select>
                    </td>
                    <td>
                        <select name="status" id="status">
                            <option value="onGoing" className="text-warning">On Going</option>
                            <option value="pending" className="text-danger">Pending</option>
                            <option value="done" className="text-success">Done</option>
                        </select>
                    </td>
                </tr>

                <tr className="text-secondary p-5">
                    <td>{loggedInUser.name}</td>
                    <td>{loggedInUser.email}</td>
                    <td>Electronics</td>
                    <td>
                    <select name="paymentOption" id="paymentOption">
                        <option value="onGoing">Credit card</option>
                        <option value="pending">Paypal</option>
                        </select>
                    </td>
                    <td>
                        <select name="status" id="status">
                            <option value="onGoing" className="text-warning">On Going</option>
                            <option value="pending" className="text-danger">Pending</option>
                            <option value="done" className="text-success">Done</option>
                        </select>
                    </td>
                </tr>

                <tr className="text-secondary p-5">
                    <td>{loggedInUser.name}</td>
                    <td>{loggedInUser.email}</td>
                    <td>Electronics</td>
                    <td>
                    <select name="paymentOption" id="paymentOption">
                        <option value="onGoing">Credit card</option>
                        <option value="pending">Paypal</option>
                        </select>
                    </td>
                    <td>
                        <select name="status" id="status">
                            <option value="onGoing" className="text-warning">On Going</option>
                            <option value="pending" className="text-danger">Pending</option>
                            <option value="done" className="text-success">Done</option>
                        </select>
                    </td>
                </tr>

                <tr className="text-secondary p-5">
                    <td>{loggedInUser.name}</td>
                    <td>{loggedInUser.email}</td>
                    <td>Electronics</td>
                    <td>
                    <select name="paymentOption" id="paymentOption">
                        <option value="onGoing">Credit card</option>
                        <option value="pending">Paypal</option>
                        </select>
                    </td>
                    <td>
                        <select name="status" id="status">
                            <option value="onGoing" className="text-warning">On Going</option>
                            <option value="pending" className="text-danger">Pending</option>
                            <option value="done" className="text-success">Done</option>
                        </select>
                    </td>
                </tr>
                
            </table>
            </div>
        </div>
    );
};

export default List;