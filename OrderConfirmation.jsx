import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [showShippingDetails, setShowShippingDetails] = useState(false);

  const orderId = state?.orderId;
  const paymentMethod = state?.paymentMethod;

  // If user refreshes page or comes directly
  if (!orderId) {
    return (
      <div className="order-confirmation-wrapper">
        <p>No order confirmation details found.</p>
        <button className="view-shipping-btn" onClick={() => setShowShippingDetails(true)}>
          View Shipping
        </button>
        <button className="home-btn-white" onClick={() => navigate('/')}>
          Go to Home
        </button>
      </div>
    );
  }

  if (showShippingDetails) {
    return (
      <div className="order-confirmation-wrapper">
        <div className="shipping-details-view">
          <button
            className="back-btn"
            onClick={() => setShowShippingDetails(false)}
          >
            ← Back
          </button>

          <h1 className="shipping-title">Shipping Details</h1>

          {/* Diagram Stepper */}
          <div className="stepper">
            <div className="step active">
              <span>1</span>
              <p>Address</p>
            </div>
            <div className="line active"></div>
            <div className="step active">
              <span>2</span>
              <p>Shipping</p>
            </div>
            <div className="line"></div>
            <div className="step">
              <span>3</span>
              <p>Payment</p>
            </div>
          </div>

          {/* Address Section */}
          <div className="diagram-card">
            <h2>📍 Delivery Address</h2>
            <p><strong>Sushmitha P R</strong></p>
            <p>RP Nagar, 2nd Cross</p>
            <p>Bangalore, Karnataka - 560056</p>
            <p>📞 9XXXXXXXXX</p>
          </div>

          {/* Shipping Section */}
          <div className="diagram-card">
            <h2>🚚 Shipping Method</h2>
            <div className="row">
              <span>Standard Delivery</span>
              <span className="free">FREE</span>
            </div>
          </div>

          {/* Expected Delivery */}
          <div className="diagram-card">
            <h2>⏰ Expected Delivery</h2>
            <p><strong>Date:</strong> 10 Feb 2026</p>
            <p><strong>Time:</strong> 9:00 AM – 9:00 PM</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-confirmation-wrapper">
      <div className="confirmation-content">
        <div className="confirmation-icon">✔</div>
        <h1>Order Confirmed!</h1>
        <div className="confirmation-details">
          <div className="order-id-section">
            <h2>Your Order ID</h2>
            <p className="order-id">{orderId}</p>
          </div>
          <div className="payment-method-section">
            <h3>Payment Method</h3>
            <p>{paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}</p>
          </div>
          <div className="message-section">
            <p>Thank you for your order! You will receive a confirmation email shortly.</p>
          </div>
        </div>
        <div className="button-group">
          <button className="view-shipping-btn" onClick={() => setShowShippingDetails(true)}>
            View Shipping
          </button>
          <button className="home-btn-white" onClick={() => navigate('/')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
