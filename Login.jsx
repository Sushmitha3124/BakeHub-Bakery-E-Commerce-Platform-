import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import { login } from "../services/api";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    savePassword: false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSavePassword, setShowSavePassword] = useState(false);
  const navigate = useNavigate();
  const { login: loginUser } = useAuth();
  const { restoreTempCart } = useCart();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Show save password checkbox when user starts typing
    if ((name === "email" || name === "password") && value.trim() !== "") {
      setShowSavePassword(true);
    }
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError();
    
    // Skip authentication and directly redirect to home page
    // Create mock user data
    const mockUser = {
      id: Date.now(),
      email: formData.email,
      name: formData.email.split('@')[0]
    };
    const mockToken = `mock_token_${Date.now()}`;
        
    // Use auth context to store user data
    loginUser(mockUser, mockToken);
        
    // Redirect to profile page after login
    navigate('/profile');
        
    setLoading(false);
  };

  return (
    <div className="login-page">
      {/* Main Section */}
      <div className="login-main">
        {/* Login Form */}
        <div className="login-form-section">
          <div className="login-form">
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group password-group">
                <label htmlFor="password">Password</label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>

              {showSavePassword && (
                <div className="save-password-section">
                  <label className="checkbox-container">
                    <input
                      type="checkbox"
                      id="save-password"
                      name="savePassword"
                      checked={formData.savePassword || false}
                      onChange={handleChange}
                    />
                    <span className="checkmark"></span>
                    Save this password
                  </label>
                </div>
              )}

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>

            <div className="login-options">
              <p>
                Don't have an account? <a href="/register">Register</a>
              </p>
              <p>
                <a href="/forgot-password">Forgot Password?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;