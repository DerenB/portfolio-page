/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Navbar.css'
import '../Styles/NavbarThemes.css'

import MenuIcon from './MenuIcon';
import DropDownMenu from './DropDownMenu';
import DropDownThemeMenu from './DropDownThemeMenu';
import { useTheme } from './Theme';

// import ThemeIcon from '../src/assets/paint.svg?react';

function NavBar( { setNewColorTheme } ) {

  /// MOBILE MODE DROPDOWN MENU
  const [dropMenuOpen, setDropMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setDropMenuOpen(dropMenuOpen => !dropMenuOpen)
    setMobileThemeMenuToFalse()
  }
  const setDropMenuToFalse = () => {
    setDropMenuOpen(false)
  }



  /// COLOR THEME DROPDOWN MENU
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const handleThemeClick = () => {
    setThemeMenuOpen(themeMenuOpen => !themeMenuOpen)
  }
  const setThemeMenuToFalse = () => {
    setThemeMenuOpen(false)
  }



  /// COLOR THEMES
  const { theme, setThemeByName } = useTheme();



  /// MOBILE THEME MENU
  const [mobileThemeMenuOpen, setMobileThemeMenuOpen] = useState(false);
  const mobileThemeOpen = () => {
    setDropMenuToFalse()
    setMobileThemeMenuOpen(mobileThemeMenuOpen => !mobileThemeMenuOpen)
  }
  const setMobileThemeMenuToFalse = () => {
    setMobileThemeMenuOpen(false)
  }
  const handleMobileThemeChange = (newTheme) => {
    setMobileThemeMenuToFalse()
    setThemeMenuToFalse()
    setThemeByName(newTheme)
    setNewColorTheme(newTheme)
  }


  /// WINDOW WIDTH
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
    <div className={`navMainBackground ${theme}`}>
      <nav className={`navMain ${theme}`}>

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

            {/*
            <li className='navItem'>
              <Link to="/">Home</Link>
            </li>
            */}

            <li className='navItem navTheme'>
              <div className='themeDropDown' onClick={handleThemeClick}>Theme</div>
              {themeMenuOpen ? (
                <div className='themeMenu'>
                  <div className='themeSpacer'></div>
                  <div className={`themeMenuItem ${theme}`} onClick={() => { setThemeByName('light'); setNewColorTheme('light'); setThemeMenuToFalse(); } }>Light</div>
                  <div className={`themeMenuItem ${theme}`} onClick={() => { setThemeByName('dark'); setNewColorTheme('dark'); setThemeMenuToFalse(); } }>Dark</div>
                  <div className={`themeMenuItem ${theme}`} onClick={() => { setThemeByName('forest'); setNewColorTheme('forest'); setThemeMenuToFalse(); }}>Forest</div>
                  <div className={`themeMenuItem ${theme}`} onClick={() => { setThemeByName('synth'); setNewColorTheme('synth'); setThemeMenuToFalse(); }}>Synth</div>
                  <div className={`themeMenuItem ${theme}`} onClick={() => { setThemeByName('matrix'); setNewColorTheme('matrix'); setThemeMenuToFalse(); }}>Matrix</div>
                </div>
              ) : (
                <div></div>
              )}
            </li>
            <li className='navItem'>
              <a href='https://github.com/DerenB' target='_blank' rel="noopener noreferrer">GitHub</a>
            </li>
            <li className='navItem'>
              <a href='https://www.linkedin.com/in/deren-bozer/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
            </li>

            {/*}
            <li className='navItem'>
              <Link to="/contact">Contact</Link>
            </li>
            */}

          </ul>
        ) : (
          <MenuIcon handleClick={handleMenuClick} theme={theme} />
        )}
      </nav>



      {/* MOBILE DROP DOWN MENU */}
      {dropMenuOpen && windowWidth <= breakpoint ? (
        <DropDownMenu 
          handleClick={setDropMenuToFalse} 
          handleMobile={mobileThemeOpen}
          theme={theme} 
        />
      ) : (
        <div></div>
      )}



      {/* MOBILE THEME MENU DROP DOWN */}
      {mobileThemeMenuOpen && windowWidth <= breakpoint ? (
        <DropDownThemeMenu
          handleClick={handleMobileThemeChange}
          theme={theme}
        />
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