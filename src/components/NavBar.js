import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add Car</Link>
    </nav>
  );
};

export default Navbar;
