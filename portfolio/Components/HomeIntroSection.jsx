/* eslint-disable react/prop-types */ 

import { useTheme } from './Theme';

const HomeIntroSection = () => {
    
    const { theme, setThemeByName } = useTheme();

    return (
        <div className='homeIntroSection'>
            <div className='homeIntroWords'>

                {/* Header Title */}
                <div className={`homeIntroHeadline ${theme}`}>
                    Hello There. I&apos;m <span>Deren</span>.
                </div>

                {/* Intro Paragraph */}
                <div className={`homeIntroParagraph ${theme}`}>
                    I’m a Computer Science and Accounting graduate with a growing 
                    passion for programming and web design. With a solid foundation 
                    in web design, I’ve had the opportunity to build visually 
                    appealing and user-friendly websites.
                </div>
                <div className={`homeIntroParagraph ${theme}`}>
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