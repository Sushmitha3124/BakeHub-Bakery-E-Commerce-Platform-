import "./Home.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

// Images
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


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [productCounts, setProductCounts] = useState({}); 
  const { addToCart, removeFromCart, saveTempCart } = useCart();
  const { isAuthenticated, justLoggedIn, resetJustLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && justLoggedIn) {
      resetJustLoggedIn();
      navigate("/profile");
    }
  }, [isAuthenticated, justLoggedIn, resetJustLoggedIn, navigate]);

  const heroImages = [
    "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=1920&q=95&fm=jpg",
    "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1920&q=95&fm=jpg",
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&q=95&fm=jpg"
  ];

  const [fadeClass, setFadeClass] = useState("fade-in");
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setFadeClass("fade-in");
      }, 600);
    }, 4500);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const allProducts = [
    // Breads
    { id: 1, img: breadImage1, name: "Artisan Sourdough", price: "₹ 250.00", category: "Sourdough", description: "Traditional sourdough bread with a crispy golden crust and tangy, complex flavor. Made with natural fermentation for 24 hours.", discount: "20%" },
    { id: 2, img: breadHome, name: "Whole Wheat Loaf", price: "₹ 180.00", category: "Healthy", description: "Nutritious whole bread packed with fiber, vitamins, and minerals. Perfect for healthy sandwiches and toast.", discount: "40%" },
    { id: 3, img: breadAbout, name: "French Baguette", price: "₹ 120.00", category: "French", description: "Classic French baguette with a crispy crust and soft, airy interior. Perfect for sandwiches or dipping in olive oil.", discount: "30%" },
    { id: 4, img: breadContact, name: "Cinnamon Roll", price: "₹ 150.00", category: "Sweet", description: "Soft, pillowy cinnamon roll swirled with sweet cinnamon sugar and topped with creamy glaze. Best enjoyed warm.", discount: "10%" },
    { id: 5, img: breadLogin, name: "Chocolate Croissant", price: "₹ 130.00", category: "Pastry", description: "Buttery, flaky croissant filled with rich chocolate ganache. A perfect breakfast or dessert treat.", discount: "30%" },
    { id: 6, img: bread1, name: "Bread Roll", price: "₹ 110.00", category: "Rolls", description: "Freshly baked dinner rolls with a soft texture and golden exterior. Ideal for burgers, sandwiches, or dinner tables.", discount: "20%" },
    { id: 7, img: bread2, name: "Sweet Bread Bun", price: "₹ 50.00", category: "Buns", description: "Light and fluffy sweet bread bun with a hint of vanilla. Perfect for breakfast or as a snack.", discount: "15%" },
    { id: 8, img: bread3, name: "Cherry Bread", price: "₹ 100.00", category: "Sweet", description: "Moist bread studded with sweet cherries and a hint of almond extract. A delightful fruity treat.", discount: "30%" },
    { id: 9, img: bread4, name: "Aloo Palya Bun", price: "₹ 80.00", category: "Buns", description: "Spiced potato and vegetable stuffed bun with authentic Indian flavors. A popular street food favorite.", discount: "12%" },
    { id: 10, img: bread5, name: "Wheat Masala Bun", price: "₹ 150.00", category: "Buns", description: "Whole wheat bun stuffed with aromatic masala potatoes. Healthy and flavorful combination.", discount: "35%" },
    { id: 11, img: bread6, name: "Pizza Buns", price: "₹ 160.00", category: "Buns", description: "Soft buns topped with pizza sauce, cheese, and your favorite toppings. Mini personal pizzas in bun form.", discount: "13%" },
    { id: 12, img: bread7, name: "Thengal Bun", price: "₹ 130.00", category: "Buns", description: "Traditional Kerala-style coconut and jaggery stuffed bun. Sweet, nutty, and culturally authentic.", discount: "10%" },
    { id: 13, img: bread8, name: "Butter Bun", price: "₹ 90.00", category: "Buns", description: "Rich, buttery bun with a tender crumb and golden finish. Simply delicious on its own or with jam.", discount: "30%" },
    { id: 14, img: bread9, name: "Cinnamon Bun", price: "₹ 60.00", category: "Buns", description: "Individual cinnamon bun with swirls of cinnamon sugar and sweet icing. Perfect bite-sized treat.", discount: "23%" },
    { id: 15, img: bread10, name: "Red Bean Bread", price: "₹ 130.00", category: "Sweet", description: "Sweet bread filled with creamy red bean paste. Popular Asian bakery item with balanced sweetness.", discount: "18%" },
    { id: 16, img: bread12, name: "Vanilla Bread", price: "₹ 140.00", category: "Sweet", description: "Delicate vanilla-scented bread with a moist texture and subtle sweetness. Comfort food at its finest.", discount: "17%" },
    { id: 17, img: bread13, name: "Pineapple Bread", price: "₹ 110.00", category: "Sweet", description: "Sweet bread with a crunchy pineapple cookie topping. Taiwanese bakery classic with irresistible texture contrast.", discount: "19%" },
    { id: 18, img: bread14, name: "Jam Bun", price: "₹ 60.00", category: "Buns", description: "Soft bun filled with sweet fruit jam. Classic bakery favorite that brings back childhood memories.", discount: "24%" },
    // Cakes
    { id: 19, img: breadImage1, name: "Chocolate Cake", price: "₹ 450.00", category: "Cakes", description: "Rich, moist chocolate cake layered with chocolate ganache. Decadent dessert for chocolate lovers.", discount: "12%" },
    { id: 20, img: breadHome, name: "Vanilla Cake", price: "₹ 400.00", category: "Cakes", description: "Classic vanilla sponge cake with smooth vanilla buttercream. Elegant and timeless celebration cake.", discount: "25%" },
    { id: 21, img: breadAbout, name: "Red Velvet Cake", price: "₹ 500.00", category: "Cakes", description: "Velvety red cake with cream cheese frosting. Beautiful appearance with rich cocoa flavor.", discount: "31%" },
    { id: 22, img: breadContact, name: "Strawberry Cake", price: "₹ 480.00", category: "Cakes", description: "Light vanilla cake layered with fresh strawberries and whipped cream. Fresh and fruity delight.", discount: "40%" },
    { id: 23, img: breadLogin, name: "Cheesecake", price: "₹ 550.00", category: "Cakes", description: "Creamy New York-style cheesecake with graham cracker crust. Rich, dense, and incredibly satisfying.", discount: "19%" },
    { id: 24, img: bread1, name: "Carrot Cake", price: "₹ 420.00", category: "Cakes", description: "Moist carrot cake with walnuts and cream cheese frosting. Spiced perfection with natural sweetness.", discount: "30%" },
    { id: 25, img: bread2, name: "Lemon Cake", price: "₹ 380.00", category: "Cakes", description: "Bright lemon cake with zesty lemon curd and light lemon glaze. Refreshingly citrus with perfect balance.", discount: "20%" },
    { id: 26, img: bread3, name: "Coffee Cake", price: "₹ 400.00", category: "Cakes", description: "Moist coffee-infused cake with cinnamon streusel topping. Perfect pairing of coffee and cake flavors.", discount: "40%" },
  ];

  const categories = ["All", "Sourdough", "Buns", "Sweet", "French", "Healthy", "Pastry", "Rolls", "Cakes"];

  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    const originalPrice = parseFloat(product.price.replace("₹ ", ""));
    const discountAmount = originalPrice * 0.30;
    const discountedPrice = originalPrice - discountAmount;
    
    addToCart({
      ...product,
      originalPrice: product.price,
      discountedPrice: `₹ ${discountedPrice.toFixed(2)}`,
      discount: "30%"
    });
    
    setProductCounts(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1
    }));
  };

  const handleRemoveFromCart = (product) => {
    removeFromCart(product.id);
    setProductCounts(prev => {
      const currentCount = prev[product.id] || 0;
      if (currentCount > 1) {
        return { ...prev, [product.id]: currentCount - 1 };
      } else {
        const newCounts = { ...prev };
        delete newCounts[product.id];
        return newCounts;
      }
    });
  };

  return (
    <div className="home">
      {/* HERO BANNER */}
      <section className="hero">
        <div className="hero-image-container">
          {heroImages.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`BakeHub Premium Bakery ${idx + 1}`}
              className={`hero-single-image ${idx === currentImageIndex ? fadeClass : "fade-out"}`}
            />
          ))}
        </div>
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-banner">
              <div className="hero-tags"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="category-filter-section">
        <div className="container">
          <h2>Our Products</h2>
          <div className="category-boxes">
            {categories.map(category => (
              <div
                key={category}
                className={`category-box ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                <span>{category}</span>
              </div>
            ))}
          </div>

          {/* SEARCH BAR */}
          <div className="products-topbar">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="product-grid-container">
            <div className="product-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div className="product-card" key={product.id}>
                    <div className="badges-container">
                      <div className="discount-badge-home">{product.discount} OFF</div>
                    </div>
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      onClick={() => navigate(`/product/${product.id}`)}
                      style={{ cursor: 'pointer' }}
                    />
                    <h4>{product.name}</h4>
                    <p className="product-price">{product.price}</p>
                    
                    {productCounts[product.id] > 0 ? (
                      <div className="cart-controls">
                        <button 
                          className="decrement-btn" 
                          onClick={() => handleRemoveFromCart(product)}
                          disabled={(productCounts[product.id] || 0) === 0}
                        >
                          -
                        </button>
                        <span className="cart-count-display">
                          {productCounts[product.id] || 0}
                        </span>
                        <button 
                          className="increment-btn" 
                          onClick={() => handleAddToCart(product)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button 
                        className="add-to-cart-btn" 
                        onClick={() => {
                          if (isAuthenticated) {
                            handleAddToCart(product);
                          } else {
                            handleAddToCart(product);
                            saveTempCart();
                            navigate('/login');
                          }
                        }}
                      >
                        {isAuthenticated ? 'Add to Cart' : 'Login to Cart'}
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <h3>No products found</h3>
                  <p>Try searching for "bread", "roll", "sourdough", "bun", or "cake"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
