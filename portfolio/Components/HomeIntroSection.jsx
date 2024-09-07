/* eslint-disable react/prop-types */ 

const HomeIntroSection = () => {

    return (
        <div className='homeIntroSection'>
            <div className='homeIntroWords'>

                {/* Header Title */}
                <div className='homeIntroHeadline'>
                    Hello There. I&apos;m <span>Deren</span>.
                </div>

                {/* Intro Paragraph */}
                <div className='homeIntroParagraph'>
                    Lorem ipsum odor amet, consectetuer 
                    adipiscing elit. Nisi cubilia iaculis 
                    luctus fusce praesent; dictum feugiat. 
                    Montes vulputate ad diam libero taciti sed 
                    molestie eu. Aenean maecenas eget lacinia 
                    imperdiet ut ornare. Dapibus eu tempus 
                    aenean vel pretium. Velit mollis mi potenti 
                    conubia eleifend phasellus nibh accumsan.
                </div>

            </div>

            {/* Profile Picture */}
            <div className='homeIntroPic'>
                <img src="/images/ProfilePicture.png" alt="Profile Img" />
            </div>
            
        </div>
    )
}

export default HomeIntroSection