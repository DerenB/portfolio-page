/* eslint-disable react/prop-types */ 

const HomeSocialPageIcon = ( {href, id, icon} ) => {
    return (
        <a target='_blank' href={href}>
            <div className='homeIntroIcon' id={id}>
                <img className='homeIntroIconImage' src={icon} />
            </div>
        </a>
    )
}

export default HomeSocialPageIcon