import React, { useEffect } from 'react';
import { Menu } from './view/Menu';
import { HomePage } from './view/HomePage';
import { Projects } from './view/Projects';
import { Interests } from './view/Interests';
import { Contact } from './view/Contact';
import { mainUrl, projectUrl, interestUrl, contactUrl, notesUrl } from './data/data';
import { interests } from './data/interests';
import { projects } from './data/projects';

import AOS from 'aos';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useAppContext } from './context/appContext';
import 'aos/dist/aos.css';
import './css/style.css';
import { InterestDetail } from './interests/interests-util';
import { ProjectInDetail } from './projects/projects-util';

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
            <Route path={mainUrl} element={<HomePage />} />
            <Route path={projectUrl} element={<Projects />} />
            <Route path={interestUrl} element={<Interests />} />
            <Route path={contactUrl} element={<Contact />} />
            <Route path={notesUrl} element={<Contact />} />
            {projects.map((project, i) => (
              <Route
                path={project.pageLink}
                element={<ProjectInDetail project={project} />}
              />
            ))}
            {interests.map((interest, i) => (
              <Route
                path={interest.detailLink}
                element={<InterestDetail photoUrls={interest.photos} />}
              />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

const ToggleMenu = ({ showArrow }: { showArrow: boolean }) => {
  if (showArrow) {
    return <img id='toggle-menu-arrow' src={`${mainUrl}icon/arrow.png`} />;
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
