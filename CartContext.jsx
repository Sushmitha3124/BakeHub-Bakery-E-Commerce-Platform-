import { createContext, useState, useEffect, useContext } from "react";
import { useAuth } from "./AuthContext";

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const { isAuthenticated, justLoggedIn, resetJustLoggedIn } = useAuth();

  const [cartItems, setCartItems] = useState(() => {
    // Initialize from localStorage
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      try {
        return JSON.parse(savedCartItems);
      } catch (error) {
        console.error('Error parsing cart items from localStorage:', error);
        return [];
      }
    }
    // No default items; cart starts empty
    return [];
  });

  // Initialize cart items from localStorage handled in useState

  // Save cart items to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      let newItems;
      
      if (existingItem) {
        newItems = prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...prevItems, { ...product, quantity: 1 }];
      }
      
      // Ensure localStorage is updated immediately
      localStorage.setItem('cartItems', JSON.stringify(newItems));
      return newItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== productId);
      // Ensure localStorage is updated immediately
      localStorage.setItem('cartItems', JSON.stringify(newItems));
      return newItems;
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) => {
      const newItems = prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      // Ensure localStorage is updated immediately
      localStorage.setItem('cartItems', JSON.stringify(newItems));
      return newItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    // Ensure localStorage is updated immediately
    localStorage.setItem('cartItems', JSON.stringify([]));
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price.replace("₹ ", "")) * item.quantity,
      0
    );
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // Function to merge temporary cart with current cart
  const mergeCart = (tempCartItems) => {
    if (!Array.isArray(tempCartItems) || tempCartItems.length === 0) {
      return;
    }

    setCartItems((prevItems) => {
      const mergedItems = [...prevItems];
      
      tempCartItems.forEach(tempItem => {
        const existingItem = mergedItems.find(item => item.id === tempItem.id);
        if (existingItem) {
          // If item already exists, increase the quantity
          existingItem.quantity += tempItem.quantity;
        } else {
          // If item doesn't exist, add it to the cart
          mergedItems.push({...tempItem});
        }
      });
      
      return mergedItems;
    });
  };

  // Function to clear temporary cart
  const clearTempCart = () => {
    localStorage.removeItem('tempCartItems');
  };

  // Function to save temporary cart (before login)
  const saveTempCart = () => {
    localStorage.setItem('tempCartItems', JSON.stringify(cartItems));
  };

  // Function to restore temporary cart
  const restoreTempCart = () => {
    const tempCartItems = localStorage.getItem('tempCartItems');
    if (tempCartItems) {
      try {
        const parsedTempCart = JSON.parse(tempCartItems);
        mergeCart(parsedTempCart);
        clearTempCart(); // Clear the temporary cart after restoring
      } catch (error) {
        console.error('Error restoring temporary cart:', error);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        mergeCart,
        clearTempCart,
        saveTempCart,
        restoreTempCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};