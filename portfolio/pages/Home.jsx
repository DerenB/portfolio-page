import { useEffect, useState } from 'react';
import '../Styles/Home.css'

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
            <div>
                {windowWidth > breakpoint ? (
                    <div>Desktop View</div>
                ) : (
                    <div>Mobile View</div>
                )}
            </div>

            
        </div>
    )
}

export default Home;