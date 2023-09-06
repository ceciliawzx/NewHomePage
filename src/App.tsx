import React, { useEffect, useState } from 'react';
import './App.css';
import { Menu } from './view/Menu';
import { HomePage } from './view/HomePage';
import { Projects } from './view/Projects';
import { Interests } from './view/Interests';
import { Contact } from './view/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/style.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <Router>
        {showMenu && <Menu />}

        <div
          id='whole-window'
          style={{ width: `${showMenu ? '75%' : '100%'}` }}
        >
          <Routes>
            <Route path='/~zw4021/' element={<HomePage />} />
            <Route path='/~zw4021/projects' element={<Projects />} />
            <Route path='/~zw4021/interests' element={<Interests />} />
            <Route path='/~zw4021/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <button id='toggle-menu' onClick={toggleMenu}>
        toggle
      </button>
    </div>
  );
}

export default App;
