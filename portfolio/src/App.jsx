import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Home from '../pages/Home.jsx';

// Components
import HeroBanner from '../Components/HeroBanner.jsx';
import NavBar from '../Components/Navbar.jsx';

// Styles
import '../Styles/App.css';



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App