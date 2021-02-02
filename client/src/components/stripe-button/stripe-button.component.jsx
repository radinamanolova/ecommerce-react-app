import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51ICPrVAdfYTTF2zUoXOMimlB5fKGTErJ1GZn4wEcGsfJP1lLOcdpUapa0woEawcslnQu65iivtsxcTlJg3WpkbNi00U47yLG6q';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful!');
    }).catch(error => {
      console.log('Payment error: ', + JSON.parse(error));
      alert('There was an issue with your payment. Please make sure you use the provided credit cart.');
    });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Luxury Cosmetics Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={ `Your total is $${price}` }
      amount={ priceForStripe }
      panelLabel="Pay Now"
      token={ onToken }
      stripeKey={ publishableKey }
    />
  );
};

export default StripeCheckoutButton;