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
                <div>Recent <span>Projects</span></div>
            </div>
        </div>
    )
}

export default Home;