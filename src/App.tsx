import React, { useEffect, useState, useReducer } from 'react';
import './App.css';
import { Menu } from './view/Menu';
import { HomePage } from './view/HomePage';
import { Projects } from './view/Projects';
import { Interests } from './view/Interests';
import { Contact } from './view/Contact';
import AOS from 'aos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppContext } from './context/appContext';
import 'aos/dist/aos.css';
import './css/style.css';

function App() {
  const {
    state: { showMenu, changeWidth },
    api: { setShowMenu, setChangeWidth },
  } = useAppContext();

  const toggleMenu = () => {
    if (showMenu) {
      // Delay hiding menu for 200ms, for the transition for whole-window
      setTimeout(() => setShowMenu(!showMenu), 200);
    } else {
      setShowMenu(!showMenu);
    }
    setChangeWidth(!changeWidth);
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
          style={{
            width: `${changeWidth ? '75%' : '100%'}`,
          }}
        >
          <a id='toggle-menu' onClick={toggleMenu}>
            <ToggleMenu showArrow={changeWidth} />
          </a>
          <Routes>
            <Route path='/~zw4021/' element={<HomePage />} />
            <Route path='/~zw4021/projects' element={<Projects />} />
            <Route path='/~zw4021/interests' element={<Interests />} />
            <Route path='/~zw4021/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

const ToggleMenu = ({ showArrow }: { showArrow: boolean }) => {
  if (showArrow) {
    return <img id='toggle-menu-arrow' src='/~zw4021/icon/arrow.png' style={{}} />;
  } else
    return (
      <>
        <div className='toggle-menu-item' />
        <div className='toggle-menu-item' />
        <div className='toggle-menu-item' />
      </>
    );
};

export default App;
