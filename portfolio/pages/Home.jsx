import { useEffect, useState } from 'react';
import '../Styles/Home.css'
import '../Styles/IconColors.css'

import HomeIntroSection from '../Components/HomeIntroSection';

function Home() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const breakpoint = 1000;

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return (
        <div className="homeMain">
            <HomeIntroSection />

            <div className='homeProjectSection'>
                <div className='homeProjectHeader'>Recent <span className='highlight'>Projects</span></div>

                <div className='homeProjectBlock'>
                    <div className='projectHeader'>DivDat iPhone App</div>

                    <div className='projectTechnology'>
                        <div className='projectBubble swift lightText'>Swift</div>
                        <div className='projectBubble uikit lightText'>UiKit</div>
                        <div className='projectBubble xcode lightText'>XCode</div>
                    </div>

                    <div className='projectDetail'>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu.
                    </div>
                </div>

                <div className='homeProjectBlock'>
                    <div className='projectHeader'>DivDat AI Web Form</div>

                    <div className='projectTechnology'>
                        <div className='projectBubble anthropic darkText'>Anthropic</div>
                        <div className='projectBubble fastapi lightText'>FastAPI</div>
                        <div className='projectBubble react darkText'>ReactJS</div>
                        <div className='projectBubble css lightText'>CSS</div>
                    </div>

                    <div className='projectDetail'>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu.
                    </div>
                </div>

                <div className='homeProjectBlock'>
                    <div className='projectHeader'>Portfolio Website</div>

                    <div className='projectTechnology'>
                        <div className='projectBubble react darkText'>ReactJS</div>
                        <div className='projectBubble css lightText'>CSS</div>
                        <div className='projectBubble figma lightText'>Figma</div>
                    </div>

                    <div className='projectDetail'>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu.
                    </div>
                </div>

                <div className='homeProjectBlock'>
                    <div className='projectHeader'>Student All-In-One Web App</div>

                    <div className='projectTechnology'>
                        <div className='projectBubble fastapi lightText'>FastAPI</div>
                        <div className='projectBubble react darkText'>ReactJS</div>
                        <div className='projectBubble tailwindcss darkText'>TailwindCSS</div>
                        <div className='projectBubble mongodb lightText'>MongoDB</div>
                    </div>

                    <div className='projectDetail'>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu.
                    </div>
                </div>

                <div className='homeProjectBlock'>
                    <div className='projectHeader'>Bookstore Storefront</div>

                    <div className='projectTechnology'>
                        <div className='projectBubble php darkText'>PHP</div>
                        <div className='projectBubble bootstrap lightText'>Bootstrap</div>
                        <div className='projectBubble mysql darkText'>MySQL</div>
                    </div>

                    <div className='projectDetail'>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;