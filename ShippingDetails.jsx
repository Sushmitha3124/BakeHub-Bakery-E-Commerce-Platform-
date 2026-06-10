import React from "react";
import { useNavigate } from "react-router-dom";
import "./ShippingDetails.css";

const ShippingDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="shipping-page">
      <div className="shipping-container">

        <button
          className="back-btn"
          onClick={() => navigate('/order-confirmation')}
        >
          ← Back to Order
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

        <button
          className="continue-btn"
          onClick={() => navigate("/payment")}
        >
          Continue to Payment
        </button>

      </div>
    </div>
  );
};

export default ShippingDetails;
