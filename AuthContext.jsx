import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [justLoggedIn, setJustLoggedIn] = useState(false);
    const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    // Check if user is logged in on initial load
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing user data:', error);
        // Clear invalid data
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const login = (userData, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setJustLoggedIn(true); // Set flag to indicate user just logged in
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('addresses');
    setUser(null);
  };

  const resetJustLoggedIn = () => {
    setJustLoggedIn(false);
  };

  // Address management functions
  const getAddresses = () => {
    if (!user) return [];
    const savedAddresses = localStorage.getItem('addresses');
    return savedAddresses ? JSON.parse(savedAddresses) : [];
  };

  const saveAddress = (addressData) => {
    if (!user) return;
    const addresses = getAddresses();
    const updatedAddresses = [...addresses, {...addressData, id: Date.now()}];
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    return updatedAddresses;
  };

  const updateAddress = (addressId, updatedAddressData) => {
    if (!user) return;
    const addresses = getAddresses();
    const updatedAddresses = addresses.map(addr => 
      addr.id === addressId ? {...updatedAddressData, id: addressId} : addr
    );
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    return updatedAddresses;
  };

  const deleteAddress = (addressId) => {
    if (!user) return;
    const addresses = getAddresses();
    const updatedAddresses = addresses.filter(addr => addr.id !== addressId);
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    return updatedAddresses;
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    justLoggedIn,
    resetJustLoggedIn,
    getAddresses,
    saveAddress,
    updateAddress,
    deleteAddress
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};