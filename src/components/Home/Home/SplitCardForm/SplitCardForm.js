import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";

import './SplitCardForm.css';

import credit from '../../../../images/creditCard.png';
import paypal from '../../../../images/paypal.png';

const useOptions = () => {

  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: '16px',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
   <div className="container bg-light">
     <h1 className="text-success text-center p-3">Payment</h1>
    <div className=" container formShape d-flex justify-content-center">
    <form onSubmit={handleSubmit}>

      <input type="text" placeholder="Name" className="form-control"/>
      <br/>
      <input type="email" placeholder="Email Address" className="form-control"/>
      <br/>
      <input type="text" placeholder="Service" className="form-control"/>
      <br/>

      <h3 className="text-info">Pay with</h3>

      <div>
      <input type="radio"/> <img src={credit} className="paymentOption" alt=""/> Credit Card
      <input type="radio" className="ml-4"/> <img src={paypal} className="paymentOption" alt=""/> Paypal
      </div>

      <br/> 

      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>

      <br/>

      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>

      <br/>

      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>

      <br/>

      
      <button className="explore" type="submit" disabled={!stripe}>
        Pay Here
      </button>
    </form>
    </div>
   </div>
  );
};

export default SplitCardForm;
