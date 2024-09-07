import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Navbar.css'

import MenuIcon from './MenuIcon';
import DropDownMenu from './DropDownMenu';

function NavBar() {

  const [dropMenuOpen, setDropMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setDropMenuOpen(dropMenuOpen => !dropMenuOpen)
  }
  const setDropMenuToFalse = () => {
    setDropMenuOpen(false)
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 1000;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth > 1000) {
        setDropMenuOpen(false)
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className='navMainBackground'>
      <nav className='navMain'>

        {/* PORTFOLIO ICON */}
        {windowWidth > breakpoint ? (
          <div className='navIcon'>
            Portfolio DAB
          </div>
        ) : (
          <Link to="/" className='navIcon' onClick={setDropMenuToFalse}>
            Portfolio DAB
          </Link>
        )}

        {/* NAV MENU VS BURGER ICON */}
        {windowWidth > breakpoint ? (
          <ul className='navList'>
            <li className='navItem'>
              <Link to="/">Home</Link>
            </li>
            <li className='navItem'>
              <a href='https://github.com/DerenB' target='_blank' rel="noopener noreferrer">GitHub</a>
            </li>
            <li className='navItem'>
              <a href='https://www.linkedin.com/in/deren-bozer/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li className='navItem'>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        ) : (
          <MenuIcon handleClick={handleMenuClick} />
        )}
      </nav>

      {/* MOBILE DROP DOWN MENU */}
      {dropMenuOpen && windowWidth <= breakpoint ? (
        <DropDownMenu handleClick={setDropMenuToFalse} />
      ) : (
        <div></div>
      )}
    </div>
    
  );
}

export default NavBar;


/* Old method for Internal links:

{windowWidth > breakpoint ? (
  <ul className='navList'>
    <li className='navItem'><Link to="/">Home</Link></li>
    <li className='navItem'><Link to="/about">About</Link></li>
    <li className='navItem'><Link to="/contact">Contact</Link></li>
  </ul>
) : (
  <MenuIcon handleClick={handleMenuClick} />
)}

*/