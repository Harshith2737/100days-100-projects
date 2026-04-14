import React from 'react';
import '../styles/Header.css';

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = 'Recipe Genie',
  subtitle = 'Discover, Save & Cook Delicious Recipes',
}) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>{title} 🍳</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
