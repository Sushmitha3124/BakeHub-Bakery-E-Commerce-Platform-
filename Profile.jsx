import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    email: "",
    password: "",
    address: ""
  });

  useEffect(() => {
    // Redirect to home if not authenticated
    if (!isAuthenticated) {
      navigate("/");
    } else {
      // Load profile data from localStorage or set defaults
      const savedProfile = localStorage.getItem(`profile_${user?.email}`);
      if (savedProfile) {
        try {
          setProfileData(JSON.parse(savedProfile));
        } catch (error) {
          console.error("Error loading profile data:", error);
        }
      } else {
        // Set default profile data
        const defaultData = {
          email: user?.email || "",
          password: "••••••••", // Masked password
          address: "123 Bakery Street, Breadville, BV 12345"
        };
        setProfileData(defaultData);
        localStorage.setItem(`profile_${user?.email}`, JSON.stringify(defaultData));
      }
    }
  }, [isAuthenticated, navigate, user?.email]);

  const handleSave = () => {
    localStorage.setItem(`profile_${user?.email}`, JSON.stringify(profileData));
    alert("Profile saved successfully!");
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h1>My Profile</h1>
        <div className="profile-card">
          <div className="profile-field">
            <label>Email:</label>
            <input
              type="email"
              value={profileData.email}
              disabled
            />
          </div>

          <div className="profile-field">
            <label>Password:</label>
            <input
              type="password"
              value={profileData.password}
              disabled
            />
          </div>

          <div className="profile-field">
            <label>Address:</label>
            <textarea
              value={profileData.address}
              rows="3"
              disabled
            />
          </div>

          <div className="profile-actions">
            <button className="save-btn" onClick={handleSave}>
              Save Profile
            </button>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Profile;