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
            <div>Home 1</div>
            <div>Home 2</div>
            <div>Home 3</div>
            <div>Home 4</div>
            <div>Home 5</div>
            <div>Home 6</div>
            <div>Home 7</div>
            <div>Home 8</div>
            <div>Home 9</div>
            <div>Home 10 Home 10 Home 10 Home 10 Home 10 Home 10 Home 10 Home 10 Home 10 Home 10 Home 10 Home 10</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
        </div>
    )
}

export default Home;