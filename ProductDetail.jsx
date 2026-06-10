import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import './ProductDetail.css';

// Import all product images
import breadImage1 from "../assets/breadImage1.jpg";
import breadHome from "../assets/bread-home.jpg";
import breadAbout from "../assets/bread-about.png";
import breadContact from "../assets/bread-contact.png";
import breadLogin from "../assets/bread-login.png";
import bread1 from "../assets/bread1.png";
import bread2 from "../assets/bread2.png";
import bread3 from "../assets/bread3.png";
import bread4 from "../assets/bread4.png";
import bread5 from "../assets/bread5.png";
import bread6 from "../assets/bread6.png";
import bread7 from "../assets/bread7.png";
import bread8 from "../assets/bread8.png";
import bread9 from "../assets/bread9.png";
import bread10 from "../assets/bread10.png";
import bread12 from "../assets/bread12.png";
import bread13 from "../assets/bread13.png";
import bread14 from "../assets/bread14.png";
import cake1 from "../assets/cake1.png";
import cake2 from "../assets/cake2.png";
import cake3 from "../assets/cake3.png";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, saveTempCart } = useCart();
  const { isAuthenticated } = useAuth();

  // Map image imports to match product data
  const imageMap = {
    breadImage1, breadHome, breadAbout, breadContact, breadLogin,
    bread1, bread2, bread3, bread4, bread5, bread6, bread7, bread8,
    bread9, bread10, bread12, bread13, bread14, cake1, cake2, cake3
  };

  // PRODUCT DATA (same as Home.jsx)
  const allProducts = [
    // Breads
    { id: 1, img: breadImage1, name: "Artisan Sourdough", price: "₹ 250.00", category: "Sourdough", description: "Traditional sourdough bread with a crispy golden crust and tangy, complex flavor. Made with natural fermentation for 24 hours." },
    { id: 2, img: breadHome, name: "Whole Wheat Loaf", price: "₹ 180.00", category: "Healthy", description: "Nutritious whole wheat bread packed with fiber, vitamins, and minerals. Perfect for healthy sandwiches and toast." },
    { id: 3, img: breadAbout, name: "French Baguette", price: "₹ 120.00", category: "French", description: "Classic French baguette with a crispy crust and soft, airy interior. Perfect for sandwiches or dipping in olive oil." },
    { id: 4, img: breadContact, name: "Cinnamon Roll", price: "₹ 150.00", category: "Sweet", description: "Soft, pillowy cinnamon roll swirled with sweet cinnamon sugar and topped with creamy glaze. Best enjoyed warm." },
    { id: 5, img: breadLogin, name: "Chocolate Croissant", price: "₹ 130.00", category: "Pastry", description: "Buttery, flaky croissant filled with rich chocolate ganache. A perfect breakfast or dessert treat." },
    { id: 6, img: bread1, name: "Bread Roll", price: "₹ 110.00", category: "Rolls", description: "Freshly baked dinner rolls with a soft texture and golden exterior. Ideal for burgers, sandwiches, or dinner tables." },
    { id: 7, img: bread2, name: "Sweet Bread Bun", price: "₹ 50.00", category: "Buns", description: "Light and fluffy sweet bread bun with a hint of vanilla. Perfect for breakfast or as a snack." },
    { id: 8, img: bread3, name: "Cherry Bread", price: "₹ 100.00", category: "Sweet", description: "Moist bread studded with sweet cherries and a hint of almond extract. A delightful fruity treat." },
    { id: 9, img: bread4, name: "Aloo Palya Bun", price: "₹ 80.00", category: "Buns", description: "Spiced potato and vegetable stuffed bun with authentic Indian flavors. A popular street food favorite." },
    { id: 10, img: bread5, name: "Wheat Masala Bun", price: "₹ 150.00", category: "Buns", description: "Whole wheat bun stuffed with aromatic masala potatoes. Healthy and flavorful combination." },
    { id: 11, img: bread6, name: "Pizza Buns", price: "₹ 160.00", category: "Buns", description: "Soft buns topped with pizza sauce, cheese, and your favorite toppings. Mini personal pizzas in bun form." },
    { id: 12, img: bread7, name: "Thengal Bun", price: "₹ 130.00", category: "Buns", description: "Traditional Kerala-style coconut and jaggery stuffed bun. Sweet, nutty, and culturally authentic." },
    { id: 13, img: bread8, name: "Butter Bun", price: "₹ 90.00", category: "Buns", description: "Rich, buttery bun with a tender crumb and golden finish. Simply delicious on its own or with jam." },
    { id: 14, img: bread9, name: "Cinnamon Bun", price: "₹ 60.00", category: "Buns", description: "Individual cinnamon bun with swirls of cinnamon sugar and sweet icing. Perfect bite-sized treat." },
    { id: 15, img: bread10, name: "Red Bean Bread", price: "₹ 130.00", category: "Sweet", description: "Sweet bread filled with creamy red bean paste. Popular Asian bakery item with balanced sweetness." },
    { id: 16, img: bread12, name: "Vanilla Bread", price: "₹ 140.00", category: "Sweet", description: "Delicate vanilla-scented bread with a moist texture and subtle sweetness. Comfort food at its finest." },
    { id: 17, img: bread13, name: "Pineapple Bread", price: "₹ 110.00", category: "Sweet", description: "Sweet bread with a crunchy pineapple cookie topping. Taiwanese bakery classic with irresistible texture contrast." },
    { id: 18, img: bread14, name: "Jam Bun", price: "₹ 60.00", category: "Buns", description: "Soft bun filled with sweet fruit jam. Classic bakery favorite that brings back childhood memories." },
    // Cakes
    { id: 19, img: breadImage1, name: "Chocolate Cake", price: "₹ 450.00", category: "Cakes", description: "Rich, moist chocolate cake layered with chocolate ganache. Decadent dessert for chocolate lovers." },
    { id: 20, img: breadHome, name: "Vanilla Cake", price: "₹ 400.00", category: "Cakes", description: "Classic vanilla sponge cake with smooth vanilla buttercream. Elegant and timeless celebration cake." },
    { id: 21, img: breadAbout, name: "Red Velvet Cake", price: "₹ 500.00", category: "Cakes", description: "Velvety red cake with cream cheese frosting. Beautiful appearance with rich cocoa flavor." },
    { id: 22, img: breadContact, name: "Strawberry Cake", price: "₹ 480.00", category: "Cakes", description: "Light vanilla cake layered with fresh strawberries and whipped cream. Fresh and fruity delight." },
    { id: 23, img: breadLogin, name: "Cheesecake", price: "₹ 550.00", category: "Cakes", description: "Creamy New York-style cheesecake with graham cracker crust. Rich, dense, and incredibly satisfying." },
    { id: 24, img: bread1, name: "Carrot Cake", price: "₹ 420.00", category: "Cakes", description: "Moist carrot cake with walnuts and cream cheese frosting. Spiced perfection with natural sweetness." },
    { id: 25, img: bread2, name: "Lemon Cake", price: "₹ 380.00", category: "Cakes", description: "Bright lemon cake with zesty lemon curd and light lemon glaze. Refreshingly citrus with perfect balance." },
    { id: 26, img: bread3, name: "Coffee Cake", price: "₹ 400.00", category: "Cakes", description: "Moist coffee-infused cake with cinnamon streusel topping. Perfect pairing of coffee and cake flavors." },
  ];

  // Find the product by ID
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <div className="product-not-found">
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <button className="back-btn" onClick={() => navigate('/')}>
              ← Back to Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Calculate discounted price (30% off)
  const originalPrice = parseFloat(product.price.replace("₹ ", ""));
  const discountAmount = originalPrice * 0.30;
  const discountedPrice = originalPrice - discountAmount;

  const handleAddToCart = () => {
    if (isAuthenticated) {
      addToCart({
        ...product,
        originalPrice: product.price,
        discountedPrice: `₹ ${discountedPrice.toFixed(2)}`,
        discount: "30%"
      });
      navigate('/cart');
    } else {
      // Save cart and redirect to login
      addToCart({
        ...product,
        originalPrice: product.price,
        discountedPrice: `₹ ${discountedPrice.toFixed(2)}`,
        discount: "30%"
      });
      saveTempCart();
      navigate('/login');
    }
  };

  return (
    <div className="product-detail-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to Products
        </button>
        
        <div className="product-detail-content">
          <div className="product-image-section">
            <img 
              src={product.img} 
              alt={product.name} 
              className="product-detail-image"
            />
            
            {/* Product Details Box next to Image */}
            <div className="image-details-box">
              <h3>Order Summary</h3>
              <div className="details-row">
                <span>Product Price:</span>
                <span>₹ {originalPrice.toFixed(2)}</span>
              </div>
              <div className="details-row discount-row">
                <span>Discount (30%):</span>
                <span>-₹ {discountAmount.toFixed(2)}</span>
              </div>
              <div className="details-row">
                <span>Delivery Charge:</span>
                <span>₹ 40.00</span>
              </div>
              <div className="details-row total-row">
                <strong>Total Amount:</strong>
                <strong>₹ {(discountedPrice + 40).toFixed(2)}</strong>
              </div>
            </div>
          </div>
          
          <div className="product-info-section">
            <div className="product-category-badge">{product.category}</div>
            <h1 className="product-title">{product.name}</h1>
            
            <div className="price-section">
              <div className="original-price">₹ {originalPrice.toFixed(2)}</div>
              <div className="discounted-price">₹ {discountedPrice.toFixed(2)}</div>
              <div className="discount-badge">30% OFF</div>
            </div>
            

            
            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
            
            {/* Detailed Description Section */}
            <div className="detailed-description-section">
              <h3>Our Products</h3>
              <p>Freshly baked artisan breads, delicious cakes, and premium pastries made with quality ingredients and traditional techniques. Each product is crafted with care and passion.</p>
              
              <h3>Ingredients</h3>
              <p>We use only the finest ingredients including organic flour, farm-fresh eggs, pure butter, natural sweeteners, and premium chocolate. No artificial preservatives or additives.</p>
              
              <h3>Discount</h3>
              <p>Enjoy amazing savings with our daily 30% discount on all products. Limited time offer to make our premium baked goods more accessible to everyone.</p>
              
              <h3>Price</h3>
              <p>Original price: ₹ {originalPrice.toFixed(2)} | Discounted price: ₹ {discountedPrice.toFixed(2)}. Affordable luxury for exceptional quality baked goods.</p>
              
              <h3>Total Amount</h3>
              <p>Final price after 30% discount is ₹ {discountedPrice.toFixed(2)}. Add to cart to see real-time total calculations with applicable discounts.</p>
            </div>
            
            <div className="action-buttons">
              <button 
                className="add-to-cart-btn" 
                onClick={handleAddToCart}
              >
                {isAuthenticated ? 'Add to Cart' : 'Login to Add to Cart'}
              </button>
              
              <button 
                className="buy-now-btn" 
                onClick={() => {
                  handleAddToCart();
                  setTimeout(() => {
                    navigate('/checkout');
                  }, 500);
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;