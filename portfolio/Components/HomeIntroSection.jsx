/* eslint-disable react/prop-types */ 

import HomeSocialPageIcon from '../Components/HomeSocialPageIcon';

const HomeIntroSection = (  ) => {

    return (
        <div className='homeIntroSection'>
            <div className='homeIntroWords'>
                <div className='homeIntroHeadline'>
                    Hello There. I&apos;m <span>Deren</span>.
                </div>

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

                <div className='homeIntroIcons'>
                    <HomeSocialPageIcon 
                        href="https://www.linkedin.com/in/deren-bozer/"
                        id="icon-li"
                        icon="../assets/LinkedInIcon.jpeg"
                    />
                    <HomeSocialPageIcon 
                        href="https://github.com/DerenB"
                        id="icon-gh"
                        icon="../assets/github-mark-white.jpg"
                    />
                </div>

            </div>

            <div className='homeIntroPic'>
                <img src='../assets/ProfilePicture.png' />
            </div>

        </div>
    )
}

export default HomeIntroSection