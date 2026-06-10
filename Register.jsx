import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { register } from "../services/api";
import "./Auth.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login: loginUser } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    // Skip registration validation and directly redirect to home page
    // Create mock user data
    const mockUser = {
      id: Date.now(),
      email: formData.email,
      name: `${formData.firstName} ${formData.lastName}`
    };
    const mockToken = `mock_token_${Date.now()}`;
        
    // Use auth context to store user data
    loginUser(mockUser, mockToken);
        
    // Redirect to home page after registration
    navigate('/');
        
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <h2>New Customer Registration</h2>

      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input 
            type="text" 
            placeholder="First Name" 
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required 
          />
        </div>
        
        <input 
          type="email" 
          placeholder="Email Address" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required 
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          name="password"
          value={formData.password}
          onChange={handleChange}
          required 
        />
        
        <input 
          type="password" 
          placeholder="Confirm Password" 
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required 
        />

        <label className="checkbox">
          <input type="checkbox" required /> I agree to Terms & Conditions & Privacy Policy
        </label>

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      
      <div className="auth-options">
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
