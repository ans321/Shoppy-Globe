import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector(state => state.cart);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header>
      <div className="navbar">
        <Link to="/" className="logo">ShoppyGlobe</Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="/cart">
            🛒 Cart {totalItems > 0 && <span>{totalItems}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
