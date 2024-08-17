import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Navbar.css'

function NavBar() {
  return (
    <nav className='navMain'>
      <div className='navIcon'>
        Portfolio
      </div>
      <ul className='navList'>
        <li className='navItem'><Link to="/">Home</Link></li>
        <li className='navItem'><Link to="/about">About</Link></li>
        <li className='navItem'><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;