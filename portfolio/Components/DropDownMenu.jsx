/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

function DropDownMenu( { handleClick }) {
    return (
        <div className='menuDropDownContainer'>
          <div className='menuDropDown'>
            <Link to="/" className='menuDropDownItem' onClick={handleClick}>
              <div>Home</div>
            </Link>
            <a href='https://github.com/DerenB' target='_blank' rel="noopener noreferrer" className='menuDropDownItem' onClick={handleClick}>
              GitHub
            </a>
            <a href='https://www.linkedin.com/in/deren-bozer/' target='_blank' rel="noopener noreferrer" className='menuDropDownItem' onClick={handleClick}>
              LinkedIn
              </a>
            <Link to="/contact" className='menuDropDownItem' onClick={handleClick}>
              <div>Contact</div>
            </Link>
          </div>
        </div>
    )
}

export default DropDownMenu

/* OLD method for Internal links

<div className='menuDropDown'>
  <a href='https://github.com/DerenB' target='_blank' rel="noopener noreferrer" className='menuDropDownItem' onClick={handleClick}>
    GitHub
  </a>
  <Link to="/" className='menuDropDownItem' onClick={handleClick}>
    <div>Home</div>
  </Link>
  <Link to="https://www.linkedin.com/in/deren-bozer/" className='menuDropDownItem' onClick={handleClick}>
    <div>About</div>
  </Link>
  <Link to="/contact" className='menuDropDownItem' onClick={handleClick}>
    <div>Contact</div>
  </Link>
</div>

*/

