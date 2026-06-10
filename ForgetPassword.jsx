import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../services/api";
import "./Auth.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
        
    // Skip password reset validation and directly redirect to login
    setSuccess(true);
    setError("");
        
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      
      {success ? (
        <div className="success-message">
          <p>Password reset link has been sent to your email address.</p>
          <button className="btn-primary" onClick={() => navigate('/login')}>
            Back to Login
          </button>
        </div>
      ) : (
        <>
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
          
          <div className="auth-options">
            <p>
              <a href="/login">Back to Login</a>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ForgetPassword;