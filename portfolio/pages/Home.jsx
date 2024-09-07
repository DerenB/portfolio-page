import { useEffect, useState } from 'react';
import '../Styles/Home.css'
import '../Styles/IconColors.css'

import HomeIntroSection from '../Components/HomeIntroSection';
import HomeProjectSection from '../Components/HomeProjectSection';

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

            <HomeProjectSection />
        </div>
    )
}

export default Home;