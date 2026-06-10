// src/pages/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Banner */}
      <div className="about-banner">
        <h1>ABOUT US</h1>
        <p>Take a look at our bakery and discover how we work</p>
      </div>

      {/* Content Section */}
      <div className="about-container">
        {/* Our Purpose */}
        <div className="about-card">
          <img
            src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec"
            alt="Our Purpose"
          />
          <div>
            <h3>Our Purpose</h3>
            <p>
              Our mission is to provide people with nutritious, world-class bread.
              We learn from traditions and use modern processes to achieve our goal.
            </p>
          </div>
        </div>

        {/* Our Products */}
        <div className="about-card">
          <img
            src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73"
            alt="Our Products"
          />
          <div>
            <h3>Our Products</h3>
            <p>
              Our products are 100% natural, made using unbleached flour with no
              preservatives or bread improvers.
            </p>
          </div>
        </div>

        {/* Founder */}
        <div className="about-card">
          <img
            src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38"
            alt="Founder"
          />
          <div>
            <h3>Founder of Honoré</h3>
            <p><strong>Ponnanna MP</strong></p>
          </div>
        </div>

        {/* Story */}
        <div className="about-card">
          <img
            src="https://images.unsplash.com/photo-1517685352821-92cf88aee5a5"
            alt="Honore Story"
          />
          <div>
            <h3>Honoré – The Story</h3>
            <p>
              Founded in 2011, Honoré was built with passion for authentic baking,
              blending tradition with modern craftsmanship.
            </p>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default About;