import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Landing.css';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Recipe Genie 🍳</h1>
          <p>Discover, Search & Save Your Favorite Recipes</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/')}>
              Explore Recipes
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/register')}>
              Sign Up
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-emojis">
            <span className="emoji">🍕</span>
            <span className="emoji">🍜</span>
            <span className="emoji">🍰</span>
            <span className="emoji">🥘</span>
            <span className="emoji">🍱</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Amazing Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Search & Discover</h3>
            <p>Find recipes by cuisine, ingredients, or dish name in seconds</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Save Favorites</h3>
            <p>Build your personal collection of favorite recipes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👨‍🍳</div>
            <h3>Detailed Recipes</h3>
            <p>Complete ingredients lists and step-by-step instructions</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h3>Cooking Times</h3>
            <p>Know prep time, cook time, and difficulty level</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Works perfectly on desktop, tablet, and mobile devices</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Ratings</h3>
            <p>See community ratings and popular recipes</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Search</h3>
            <p>Search for any recipe you'd like to cook</p>
          </div>
          <div className="arrow">→</div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Explore</h3>
            <p>View detailed ingredients and instructions</p>
          </div>
          <div className="arrow">→</div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Cook</h3>
            <p>Follow the steps and create delicious meals</p>
          </div>
          <div className="arrow">→</div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Save</h3>
            <p>Save your favorites for quick access</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Start Cooking?</h2>
        <p>Join thousands of food lovers discovering amazing recipes</p>
        <button className="btn btn-large btn-primary" onClick={() => navigate('/')}>
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Recipe Genie. All rights reserved. Made with ❤️ for food lovers.</p>
      </footer>
    </div>
  );
};

export default Landing;
