import React from 'react';

const Breads = () => {
  return (
    <div className="breads">
      <h1>Our Bread Selection</h1>
      <p>Discover our wide variety of artisanal breads, baked fresh daily.</p>
      
      <section className="bread-types">
        <div className="bread-card">
          <h2>Sourdough</h2>
          <p className="bread-description">Traditional sourdough with a crispy crust and tangy flavor. Made with natural fermentation for 24 hours.</p>
        </div>
        
        <div className="bread-card">
          <h2>Whole Wheat</h2>
          <p className="bread-description">Nutritious whole wheat bread packed with fiber and nutrients. Perfect for healthy sandwiches and toast.</p>
        </div>
        
        <div className="bread-card">
          <h2>Brioche</h2>
          <p className="bread-description">Rich, buttery French pastry with a soft, fluffy texture. A luxurious treat for breakfast or dessert.</p>
        </div>
        
        <div className="bread-card">
          <h2>Ciabatta</h2>
          <p className="bread-description">Italian rustic bread with a chewy texture and large holes. Excellent for sandwiches and paninis.</p>
        </div>
        
        <div className="bread-card">
          <h2>Focaccia</h2>
          <p className="bread-description">Olive oil infused flatbread topped with herbs and sea salt. Perfect for dipping in balsamic vinegar.</p>
        </div>
        
        <div className="bread-card">
          <h2>Rye Bread</h2>
          <p className="bread-description">Distinctive flavor with dense texture and hearty taste. Traditional bread with robust character.</p>
        </div>
      </section>
    </div>
  );
};

export default Breads;