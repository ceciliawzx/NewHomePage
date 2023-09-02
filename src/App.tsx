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
    <div style={{
      minHeight: '100vh',
      minWidth: '100vw',
    }}>
      <Router>
        <Menu />
        <Routes>
          <Route path='/~zw4021/' element={<HomePage />} />
          <Route path='/~zw4021/projects' element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
