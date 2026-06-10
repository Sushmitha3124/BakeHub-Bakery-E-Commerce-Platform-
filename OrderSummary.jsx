import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './OrderSummary.css';

const OrderSummary = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { cartItems, getCartTotal } = useCart();

  const address = state?.address;
  const paymentMethod = state?.paymentMethod;
  const onlineMethod = state?.onlineMethod;

  // If user refreshes page or comes directly
  if (!address || !paymentMethod) {
    return (
      <div className="order-summary-wrapper">
        <p>No order details found.</p>
        <button onClick={() => navigate('/checkout')}>
          Go Back to Checkout
        </button>
      </div>
    );
  }

  const handleOrderConfirm = () => {
    const orderId = 'ORD' + Date.now();
    navigate('/order-confirmation', {
      state: {
        orderId: orderId,
        paymentMethod: paymentMethod,
        address: address
      }
    });
  };

  return (
    <div className="order-summary-wrapper">
      <h2>Order Summary</h2>

      {/* DELIVERY ADDRESS */}
      <div className="summary-section">
        <h3>Delivery Address</h3>
        <p>
          <strong>{address.fullName}</strong><br />
          {address.street}, {address.city}<br />
          {address.state} - {address.zipCode}<br />
          Phone: {address.phone}
        </p>
      </div>

      {/* PAYMENT METHOD */}
      <div className="summary-section">
        <h3>Payment Method</h3>
        <p>
          {paymentMethod === 'cod'
            ? 'Cash on Delivery'
            : onlineMethod === 'phonepe'
              ? 'Online Payment - PhonePe'
              : onlineMethod === 'gpay'
                ? 'Online Payment - GPay'
                : onlineMethod === 'paytm'
                  ? 'Online Payment - Paytm'
                  : onlineMethod === 'upi'
                    ? 'Online Payment - UPI'
                    : 'Online Payment'}
        </p>
      </div>

      {/* ORDER ITEMS */}
      <div className="summary-section">
        <h3>Order Items</h3>
        <div className="order-items">
          {cartItems.map(item => (
            <div key={item.id} className="order-item">
              <div className="item-details">
                <span className="item-name">{item.name}</span>
                <span className="item-quantity">Qty: {item.quantity}</span>
              </div>
              <span className="item-price">₹{parseFloat(item.price.replace("₹ ", "")) * item.quantity}</span>
            </div>
          ))}
        </div>
        <div className="order-total">
          <strong>Total: ₹{getCartTotal().toFixed(2)}</strong>
        </div>
      </div>

      <button className="place-order-btn" onClick={handleOrderConfirm}>
        Order Confirm
      </button>
    </div>
  );
};

export default OrderSummary;
