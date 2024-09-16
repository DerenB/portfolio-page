/* eslint-disable react/prop-types */

function MenuIcon( { handleClick, theme }) {
    return (
        <div className='menuMain' onClick={handleClick}>
            <div className={`menuColor ${theme}`}></div>
            <div className='menuDark'></div>
            <div className={`menuColor ${theme}`}></div>
            <div className='menuDark'></div>
            <div className={`menuColor ${theme}`}></div>
        </div>
    )
}

export default MenuIcon