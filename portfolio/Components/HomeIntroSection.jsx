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
                    I’m a Computer Science and Accounting graduate with a growing passion 
                    for programming and web design. With a strong foundation in creating 
                    visually appealing and user-friendly websites, I focus on blending 
                    functionality with creativity.
                </div>
                <div className={`homeIntroParagraph ${theme}`}>
                    More recently, I’ve ventured into mobile app development, eager to 
                    broaden my expertise and tackle new challenges. Browse through my 
                    projects to see how I’m applying my knowledge and creative skills 
                    across web and mobile platforms as I continue to develop and refine 
                    my abilities.
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