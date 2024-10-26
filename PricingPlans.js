import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const PricingPlans = () => (
  <div className="pricing-plans">
    <h1>Choose Your Plan</h1>
    <div className="plan-container">
      <div className="plan basic-plan">
        <h2>Basic Plan</h2>
        <p>Free Plan: Basic features .</p>
      </div>

      <div className="plan premium-plan">
        <h2>Premium Plan</h2>
        <p>Get advanced features and customization of anything.</p>
        <Link to="/payment">
          <button>Choose Premium</button>
        </Link>
      </div>
    </div>
  </div>
);

export default PricingPlans;
