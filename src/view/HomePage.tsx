import React from 'react';
import '../css/profile.css';

export const HomePage = () => {
  return (
    <div
      className='window-main'
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("bg5.png")',
      }}
    >
      <Profile />
    </div>
  );
};

const Profile = () => {
  return (
    <div id='profile-container'>
      <ProfileImg />
      <div style={{ textAlign: 'center' }} data-aos='fade-up'>
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

const ProfileImg = () => {
  return (
    <div id='profile-img' data-aos='fade-down'>
      <img src='catImg1.JPG' style={{ height: '100%', width: 'auto' }} />
    </div>
  );
};
