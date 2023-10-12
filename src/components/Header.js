import React from 'react';
import '../App.css';

const Header = ({ name, tagline}) => {
  return (
    <header>
      <div className="header-content">
        <h1>{name}</h1>
        <p>{tagline}</p>
      </div>
    </header>
  );
};

export default Header;
