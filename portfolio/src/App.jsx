import { useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Home from '../pages/Home.jsx';

// Components
import NavBar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

// Styles
import '../Styles/App.css';
import '../Styles/Themes.css';

function App() {
  const contentRef = useRef(null);

  // useEffect for fixing white background scrolling issue
  useEffect(() => {
    const content = contentRef.current;

    const preventScroll = (event) => {
      const { scrollTop, scrollHeight, clientHeight} = content;

      if (scrollTop === 0 && event.deltaY < 0) {
        event.preventDefault();
      }

      if (scrollTop + clientHeight >= scrollHeight && event.deltaY > 0) {
        event.preventDefault();
      }
    }

    content.addEventListener('wheel', preventScroll)

    return () => {
      content.removeEventListener('wheel', preventScroll)
    }
  }, [])


  // Main App with Navigation
  // NavBar and Footer on every page
  return (
    <div className='content' ref={contentRef}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App