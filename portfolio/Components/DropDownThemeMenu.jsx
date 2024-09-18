/* eslint-disable react/prop-types */

function DropDownThemeMenu( { handleClick, theme } ) {

  /// MOBILE COLOR THEME DROPDOWN

  return (
    <div className='menuDropDownContainer'>
        <div className='menuDropDown'>
            <div className={`menuDropDownItem ${theme}`} onClick={() => handleClick('light')}>Light</div>
            <div className={`menuDropDownItem ${theme}`} onClick={() => handleClick('dark')}>Dark</div>
            <div className={`menuDropDownItem ${theme}`} onClick={() => handleClick('forest')}>Forest</div>
            <div className={`menuDropDownItem ${theme}`} onClick={() => handleClick('synth')}>Synth</div>
            <div className={`menuDropDownItem ${theme}`} onClick={() => handleClick('matrix')}>Matrix</div>
        </div>
    </div>
  )
}

export default DropDownThemeMenu


