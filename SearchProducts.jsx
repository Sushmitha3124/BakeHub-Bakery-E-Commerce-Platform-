import React, { useState } from 'react';
import "../pages/Home.css";
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

const SearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Product data from Home.jsx
  const allProducts = [
    { img: breadImage1, name: "Artisan Sourdough", price: "₹ 250.00", category: "Sourdough", description: "Traditional sourdough bread with a crispy golden crust and tangy, complex flavor." },
    { img: breadHome, name: "Whole Wheat Loaf", price: "₹ 180.00", category: "Healthy", description: "Nutritious whole wheat bread packed with fiber, vitamins, and minerals." },
    { img: breadAbout, name: "French Baguette", price: "₹ 120.00", category: "French", description: "Classic French baguette with a crispy crust and soft, airy interior." },
    { img: breadContact, name: "Cinnamon Roll", price: "₹ 150.00", category: "Sweet", description: "Soft, pillowy cinnamon roll swirled with sweet cinnamon sugar and topped with creamy glaze." },
    { img: breadLogin, name: "Chocolate Croissant", price: "₹ 130.00", category: "Pastry", description: "Buttery, flaky croissant filled with rich chocolate ganache." },
    { img: bread1, name: "Bread Roll", price: "₹ 110.00", category: "Rolls", description: "Freshly baked dinner rolls with a soft texture and golden exterior." },
    { img: bread2, name: "Sweet Bread Bun", price: "₹ 50.00", category: "Buns", description: "Light and fluffy sweet bread bun with a hint of vanilla." },
    { img: bread3, name: "Cherry Bread", price: "₹ 100.00", category: "Sweet", description: "Moist bread studded with sweet cherries and a hint of almond extract." },
    { img: bread4, name: "Aloo Palya Bun", price: "₹ 80.00", category: "Buns", description: "Spiced potato and vegetable stuffed bun with authentic Indian flavors." },
    { img: bread5, name: "Wheat Masala Bun", price: "₹ 150.00", category: "Buns", description: "Whole wheat bun stuffed with aromatic masala potatoes." },
    { img: bread6, name: "Pizza Buns", price: "₹ 160.00", category: "Buns", description: "Soft buns topped with pizza sauce, cheese, and your favorite toppings." },
    { img: bread7, name: "Thengal Bun", price: "₹ 130.00", category: "Buns", description: "Traditional Kerala-style coconut and jaggery stuffed bun." },
    { img: bread8, name: "Butter Bun", price: "₹ 90.00", category: "Buns", description: "Rich, buttery bun with a tender crumb and golden finish." },
    { img: bread9, name: "Cinnamon Bun", price: "₹ 60.00", category: "Buns", description: "Individual cinnamon bun with swirls of cinnamon sugar and sweet icing." },
    { img: bread10, name: "Red Bean Bread", price: "₹ 130.00", category: "Sweet", description: "Sweet bread filled with creamy red bean paste." },
  ];

  // Filter products based on search term
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-products">
      <section className="products">
        <h2>Search Products</h2>

        {/* Top bar: Search bar */}
        <div className="products-topbar">
          <div className="search-inline">
            <input 
              type="text" 
              placeholder="Search bread products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div className="product-card" key={index}>
                <img src={product.img} alt={product.name} />
                <h4>{product.name}</h4>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No products found</h3>
              <p>Try searching for "bread", "roll", "sourdough", or "bun"</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchProducts;