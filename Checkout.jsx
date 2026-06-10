import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const { user, isAuthenticated, getAddresses, saveAddress, updateAddress, deleteAddress } = useAuth();
  const navigate = useNavigate();

  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const initialForm = {
    fullName: user?.name || '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India'
  };

  const [formData, setFormData] = useState(initialForm);

  const loadAddresses = async () => {
    const list = await getAddresses();
    setAddresses(list || []);
    if (list?.length && !selectedAddressId) {
      setSelectedAddressId(list[0].id);
    }
  };

  useEffect(() => {
    if (isAuthenticated) loadAddresses();
  }, [isAuthenticated]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddNew = () => {
    setFormData(initialForm);
    setEditingId(null);
    setIsEditing(true);
  };

  const handleEdit = (addr) => {
    setFormData(addr);
    setEditingId(addr.id);
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (editingId) {
      await updateAddress(editingId, formData);
    } else {
      await saveAddress(formData);
    }
    setIsEditing(false);
    loadAddresses();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this address?')) {
      await deleteAddress(id);
      loadAddresses();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="checkout-page">
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">

        <h1>Delivery Address</h1>

        <section className="address-section">
          <div className="section-header">
            <h2></h2>
            <div className="address-actions">
              <button className="edit-btn" onClick={handleAddNew}>+ Add New Address</button>
            </div>
          </div>

          {!isEditing && (
            <div className="addresses-list">
              {addresses.map(addr => (
                <label
                  key={addr.id}
                  className={`address-card ${selectedAddressId === addr.id ? 'selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="address"
                    checked={selectedAddressId === addr.id}
                    onChange={() => setSelectedAddressId(addr.id)}
                  />

                  <div className="address-info">
                    <p><strong>{addr.fullName}</strong> | {addr.phone}</p>
                    <p>{addr.street}, {addr.city}, {addr.state} - {addr.zipCode}</p>

                    <div className="mini-actions">
                      <button onClick={() => handleEdit(addr)}>Edit</button>
                      <button onClick={() => handleDelete(addr.id)}>Delete</button>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          )}

          {isEditing && (
            <div className="address-form">
              <label>Full Name *</label>
              <input name="fullName" value={formData.fullName} onChange={handleChange} />

              <label>Phone Number *</label>
              <input name="phone" value={formData.phone} onChange={handleChange} />

              <label>Street Address *</label>
              <textarea name="street" value={formData.street} onChange={handleChange} />

              <div className="form-row">
                <div>
                  <label>City *</label>
                  <input name="city" value={formData.city} onChange={handleChange} />
                </div>
                <div>
                  <label>State *</label>
                  <input name="state" value={formData.state} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label>PIN Code *</label>
                  <input name="zipCode" value={formData.zipCode} onChange={handleChange} />
                </div>
                <div>
                  <label>Country</label>
                  <input value="India" disabled />
                </div>
              </div>

              <div className="form-actions">
                <button className="save-btn" onClick={handleSave}>Save Address</button>
                <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
              </div>
            </div>
          )}
        </section>

        {/* Proceed to Payment Button */}
        {selectedAddressId && (
          <div className="proceed-section">
            <button
              className="proceed-btn"
              onClick={() => {
                const selectedAddress = addresses.find(addr => addr.id === selectedAddressId);
                navigate('/payment', { state: { address: selectedAddress } });
              }}
            >
              Proceed to Payment
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Checkout;
