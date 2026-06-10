import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "./Payment.css";

// Online payment logos
import phonepeLogo from "../assets/phonepe-logo.png";
import gpayLogo from "../assets/gpay-logo.png";
import paytmLogo from "../assets/paytm-logo.png";
import upiLogo from "../assets/upi-logo.png";

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const address = state?.address;
  const [paymentMethod, setPaymentMethod] = useState("");
  const [onlineMethod, setOnlineMethod] = useState("");

  // If user refreshes page or comes directly
  if (!address) {
    return (
      <div className="payment-wrapper">
        <p>No delivery address found.</p>
        <button onClick={() => navigate('/checkout')}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="payment-wrapper">
      {/* MAIN HEADING */}
      <h2 className="main-heading">PAYMENT DETAILS</h2>

      {/* DELIVERY ADDRESS */}
      <div className="address-box">
        <h4>Delivery Address</h4>
        <p>
          <strong>{address.fullName}</strong><br />
          {address.street}, {address.city}<br />
          {address.state} - {address.zipCode}<br />
          Phone: {address.phone}
        </p>
      </div>

      {/* PAYMENT BOX */}
      <div className="payment-box">
        <h3 className="payment-title">Choose Payment Method</h3>

        {/* Cash on Delivery */}
        <label className={`payment-option ${paymentMethod === "cod" ? "active" : ""}`}>
          <input
            type="radio"
            name="payment"
            value="cod"
            onChange={() => setPaymentMethod("cod")}
          />
          <span>Cash on Delivery</span>
        </label>

        {/* Online Payment */}
        <label
          className={`payment-option ${paymentMethod === "online" ? "active" : ""}`}
        >
          <input
            type="radio"
            name="payment"
            value="online"
            onChange={() => {
              setPaymentMethod("online");
              // Reset previous choice when switching back to online
              setOnlineMethod("");
            }}
          />
          <span>Online Payment</span>
        </label>

        {/* Show selectable logos below once online is selected */}
        {paymentMethod === "online" && (
          <div className="payment-logos">
            <button
              type="button"
              className={`payment-logo-btn ${onlineMethod === "phonepe" ? "selected" : ""}`}
              onClick={() => setOnlineMethod("phonepe")}
            >
              <img src={phonepeLogo} alt="PhonePe" />
              <span>PhonePe</span>
            </button>

            <button
              type="button"
              className={`payment-logo-btn ${onlineMethod === "gpay" ? "selected" : ""}`}
              onClick={() => setOnlineMethod("gpay")}
            >
              <img src={gpayLogo} alt="Google Pay" />
              <span>GPay</span>
            </button>

            <button
              type="button"
              className={`payment-logo-btn ${onlineMethod === "paytm" ? "selected" : ""}`}
              onClick={() => setOnlineMethod("paytm")}
            >
              <img src={paytmLogo} alt="Paytm" />
              <span>Paytm</span>
            </button>

            <button
              type="button"
              className={`payment-logo-btn ${onlineMethod === "upi" ? "selected" : ""}`}
              onClick={() => setOnlineMethod("upi")}
            >
              <img src={upiLogo} alt="UPI" />
              <span>UPI</span>
            </button>
          </div>
        )}
      </div>

      {/* PROCEED TO ORDER SUMMARY */}
      {paymentMethod && (paymentMethod === "cod" || (paymentMethod === "online" && onlineMethod)) && (
        <div className="proceed-section">
          <button
            className="proceed-btn"
            onClick={() => {
              navigate('/order-summary', {
                state: {
                  address: address,
                  paymentMethod: paymentMethod,
                  onlineMethod: onlineMethod
                }
              });
            }}
          >
            Proceed to Order Summary
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
