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
                    I’m a Computer Science and Accounting graduate with a growing 
                    passion for programming and web design. With a solid foundation 
                    in web design, I’ve had the opportunity to build visually 
                    appealing and user-friendly websites.
                </div>
                <div className='homeIntroParagraph'>
                    Recently, I’ve begun 
                    exploring mobile app development, eager to expand my skills and 
                    tackle new challenges. Browse through my projects to see how I’m 
                    applying my knowledge and creativity in both web and mobile platforms 
                    as I continue to develop and refine my abilities.
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