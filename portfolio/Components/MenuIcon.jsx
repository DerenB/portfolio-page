/* eslint-disable react/prop-types */

function MenuIcon( { handleClick }) {
    return (
        <div className='menuMain' onClick={handleClick}>
            <div className='menuColor'></div>
            <div className='menuDark'></div>
            <div className='menuColor'></div>
            <div className='menuDark'></div>
            <div className='menuColor'></div>
        </div>
    )
}

export default MenuIcon