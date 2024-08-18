import { useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Home from '../pages/Home.jsx';

// Components
import NavBar from '../Components/Navbar.jsx';

// Styles
import '../Styles/App.css';

function App() {
  const contentRef = useRef(null);

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


  return (
    <div className='content' ref={contentRef}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App