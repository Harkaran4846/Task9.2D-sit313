import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import './App.css'; 

const stripePromise = loadStripe('pk_test_51QE4bZLBV7iXicVzNSpSFcvYbI8brHZtFtgO6G7tfrYKMympsB1Fjf8vhHow41tiTySEQjW0qwRYq1n1MvGkiUf900Szurqf8I');

const Payment = () => (
  <div className="payment-container">
    <h2>Quick Payment Link</h2>
    <a href="https://buy.stripe.com/test_00g4gy6Pk1ldg1ifYY" target="_blank" rel="noopener noreferrer">
      <button className="pay-now-button">Pay Now</button>
    </a>
  </div>
);

export default Payment;
