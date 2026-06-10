import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleProceedToCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    navigate('/checkout');
  };

  // Cart is now accessible to all users, but checkout requires login

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Your Cart ({getCartCount()})</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <a href="/" className="btn-primary">Continue Shopping</a>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.img} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-description">{item.description}</p>
                    <p className="cart-item-price">
                      {item.originalPrice ? (
                        <>
                          <span className="original-price">{item.originalPrice}</span>
                          <span className="discounted-price">{item.discountedPrice}</span>
                        </>
                      ) : (
                        item.price
                      )}
                    </p>
                    {item.discount && (
                      <span className="item-discount-badge">{item.discount} OFF</span>
                    )}
                    <div className="cart-item-controls">
                      <button 
                        className="quantity-btn" 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn" 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button 
                        className="remove-btn" 
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-subtotal">
                    ₹{(
                      (item.discountedPrice 
                        ? parseFloat(item.discountedPrice.replace("₹ ", ""))
                        : parseFloat(item.price.replace("₹ ", ""))
                      ) * item.quantity
                    ).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Total Items:</span>
                <span>{getCartCount()}</span>
              </div>
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{getCartTotal().toFixed(2)}</span>
              </div>
              <div className="summary-row discount-row">
                <span>Discount (30%):</span>
                <span className="discount-amount">-₹{(getCartTotal() * 0.3).toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Charge:</span>
                <span>₹40.00</span>
              </div>
              <div className="summary-row total-row">
                <strong>Total Amount:</strong>
                <strong>₹{(getCartTotal() * 0.7 + 40).toFixed(2)}</strong>
              </div>
              <button 
                className="checkout-btn btn-primary"
                onClick={handleProceedToCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;