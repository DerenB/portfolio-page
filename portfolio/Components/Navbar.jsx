import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Navbar.css'

import MenuIcon from './MenuIcon';

function NavBar() {

  const [dropMenuOpen, setDropMenuOpen] = useState(true);
  const handleMenuClick = () => {
    setDropMenuOpen(dropMenuOpen => !dropMenuOpen)
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 1000;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='navMainBackground'>
      <nav className='navMain'>
        <div className='navIcon'>
          Portfolio
        </div>
        {windowWidth > breakpoint ? (
          <ul className='navList'>
            <li className='navItem'><Link to="/">Home</Link></li>
            <li className='navItem'><Link to="/about">About</Link></li>
            <li className='navItem'><Link to="/contact">Contact</Link></li>
        </ul>
        ) : (
          <MenuIcon handleClick={handleMenuClick} />
        )}
      </nav>

      {dropMenuOpen ? (
        <div className='menuDropDown'>Menu Open</div>
      ) : (
        <div></div>
      )}
    </div>
    
  );
}

export default NavBar;