import React from 'react';
import { loadStripe }  from '@stripe/stripe-js';
import { 
  Elements, 
  CardElement, 
  useStripe, 
  useElements
} from '@stripe/react-stripe-js';


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (!error) {
      console.log(paymentMethod);
    }
  }

  return (
  <form onSubmit={handleSubmit} style={{maxWidth: "400px", margin: "0 auto"}}>
    <h2>Become a subscriber for $9.99/month</h2>
    <CardElement />
    <button type="submit" disable={!stripe}> 
      Pay
    </button>
  </form>
  );
};

const stripePromise = loadStripe('pk_test_51HkDM6Hnepz07q3sOlwTDA5r0ConQc1yFJ3XemTKKFKdzILL2Dl2JR5Bm6vmn6YPLlg4n4vCkjeqQdIflhp06uJt00Y9dSLj25');
// This is a public Key ^^

const Index = () => {
  return (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
  );
};

export default Index;