import React, { useEffect } from 'react';
import './App.css';
import { Menu } from './view/Menu';
import { HomePage } from './view/HomePage';
import { Projects } from './view/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/projects' element={<Projects />} />
        {/* <Route path='/interests' element={<Interests />} /> */}
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
