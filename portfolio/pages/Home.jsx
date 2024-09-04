import { useEffect, useState } from 'react';
import '../Styles/Home.css'

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
                    <div className='projectHeader'>Project Title</div>

                    <div className='projectTechnology'>
                        <div>FastAPI</div>
                        <div>ReactJS</div>
                        <div>MongoDB</div>
                    </div>

                    <div className='projectDetail'>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu.
                    </div>
                </div>

                <div className='homeProjectBlock'>
                    <div className='projectHeader'>Project Title</div>

                    <div className='projectTechnology'>
                        <div>FastAPI</div>
                        <div>ReactJS</div>
                        <div>MongoDB</div>
                    </div>

                    <div className='projectDetail'>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Nisi cubilia iaculis luctus fusce praesent; dictum feugiat. Montes vulputate ad diam libero taciti sed molestie eu.
                    </div>
                </div>

                <div className='homeProjectBlock'>
                    <div className='projectHeader'>Project Title</div>

                    <div className='projectTechnology'>
                        <div>FastAPI</div>
                        <div>ReactJS</div>
                        <div>MongoDB</div>
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