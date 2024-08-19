/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

function DropDownMenu( { handleClick }) {
    return (
        <div className='menuDropDownContainer'>
          <div className='menuDropDown'>
            <Link to="/" className='menuDropDownItem' onClick={handleClick}>
              <div>Home</div>
            </Link>
            <Link to="/about" className='menuDropDownItem' onClick={handleClick}>
              <div>About</div>
            </Link>
            <Link to="/contact" className='menuDropDownItem' onClick={handleClick}>
              <div>Contact</div>
            </Link>
          </div>
        </div>
    )
}

export default DropDownMenu