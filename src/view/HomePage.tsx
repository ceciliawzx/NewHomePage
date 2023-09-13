import React, { useState } from 'react';
import '../css/profile.css';

export const HomePage = () => {
  const [showStars, setShowStars] = useState(false);
  return (
    <div
      className='window-main'
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("./bg/home-bg.png")',
      }}
    >
      {showStars && <ShootingStars />}
      <Profile showStars={showStars} setShowStars={setShowStars} />
    </div>
  );
};

const ShootingStars = () => {
  return (
    <div>
      <span className='shooting-star' />
      <span className='shooting-star' />
      <span className='shooting-star' />
      <span className='shooting-star' />
      <span className='shooting-star' />
      <span className='shooting-star' />
      <span className='shooting-star' />
      <span className='shooting-star' />
      <span className='shooting-star' />
      <span className='shooting-star' />
    </div>
  );
};

const Profile = ({
  showStars,
  setShowStars,
}: {
  showStars: boolean;
  setShowStars: (show: boolean) => void;
}) => {
  return (
    <div id='profile-container' data-aos='fade-down'>
      <ProfileImg showStars={showStars} setShowStars={setShowStars} />
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'white' }}>Hello I'm</h2>
        <h1 style={{ color: 'white' }}>Zixi Wang</h1>
        <p style={{ color: 'white', fontSize: '17px' }}>
          I'm currently a 3rd year UG in Imperial College London, Department of
          Computing.
          <br />
          "We can only see a short distance ahead, but we can see plenty there
          that needs to be done."
        </p>
      </div>
    </div>
  );
};

const ProfileImg = ({
  showStars,
  setShowStars,
}: {
  showStars: boolean;
  setShowStars: (show: boolean) => void;
}) => {
  const handleEnter = () => {
    setShowStars(true);
  };

  const handleLeave = () => {
    setShowStars(false);
  };

  const handleClick = () => {
    setShowStars(!showStars);
  };

  return (
    <div id='profile-img'>
      <img
        src='catImg1.JPG'
        style={{ height: '100%', width: 'auto' }}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      />
    </div>
  );
};
