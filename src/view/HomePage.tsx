import React from 'react';

export const HomePage = () => {
  return (
    <div
      id='homepage-main'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("home-bg.png")',
        backgroundSize: 'cover',
      }}
    >
      <Profile />
    </div>
  );
};

const Profile = () => {
  return (
    <div
      id='profile-container'
      style={{
        height: '600px',
        width: '80%',
        margin: '100px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ProfileImg />
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

const ProfileImg = () => {
  return (
    <div
      style={{
        height: '200px',
        width: '200px',
        borderRadius: '50%',
        overflow: 'hidden',
      }}
    >
      <img src='catImg1.jpg' style={{ height: '100%', width: 'auto' }} />
    </div>
  );
};
