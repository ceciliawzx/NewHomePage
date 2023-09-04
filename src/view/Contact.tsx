import React from 'react';
import { SocialMedia } from '../util/types';
import { socialMedias } from '../util/data';

export const Contact = () => {
  return (
    <div className='window-main'>
      <div
        style={{
          display: 'flex',
          height: '100vh',
          width: '100%',
          padding: '0 2%',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          rowGap: '20%',
        }}
      >
        <ConactTitle />
        <div style={{ width: '100%' }}>
          <SocialMedias />
        </div>
      </div>
    </div>
  );
};

// const

const ConactTitle = () => {
  return (
    <div data-aos='fade-down'>
      <h2>Get in touch</h2>
      <h1>Contact</h1>
    </div>
  );
};

const SocialMedias = () => {
  return (
    <div
      id='socialmedias-container'
      style={{
        height: '50%',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '40%',
        marginLeft: '5%',
      }}
    >
      {socialMedias.map((socialMedia, i) => (
        <SocialMediaRow key={`socialmedia-${i}`} socialMedia={socialMedia} />
      ))}
    </div>
  );
};

const SocialMediaRow = ({ socialMedia }: { socialMedia: SocialMedia }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'start',
        alignItems: 'center',
      }}
      data-aos='fade-up'
    >
      <img
        src={socialMedia.imgLink}
        style={{ width: '100px', height: '100px', marginRight: '20px' }}
      />
      <p>{socialMedia.data}</p>
    </div>
  );
};
