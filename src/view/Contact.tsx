import React from 'react';
import { SocialMedia } from '../util/types';
import { socialMedias } from '../util/data';
import '../css/contact.css';

export const Contact = () => {
  return (
    <div
      className='window-main'
      style={{
        width: '75%',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          padding: '0 3%',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          rowGap: '20%',
        }}
      >
        <ConactTitle />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          data-aos='fade-up'
        >
          <SocialMedias />
          <MessageWindow />
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
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '10%',
        alignItems: 'start',
        paddingLeft: '50px',
        minWidth: '350px',
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
    >
      <img
        src={socialMedia.imgLink}
        style={{ width: '100px', height: '100px', marginRight: '20px' }}
      />
      <p>{socialMedia.data}</p>
    </div>
  );
};

const MessageWindow = () => {
  return (
    <div style={{ width: '30%', paddingLeft: '50px' }}>
      <MessageForm />
    </div>
  );
};

const MessageForm = () => {
  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        rowGap: '10%',
      }}
    >
      <input type='text' className='form-control' placeholder='Name' />
      <input type='text' className='form-control' placeholder='Email' />
      <input type='text' className='form-control' placeholder='Subject' />
      <textarea
        id='contact-message'
        cols={30}
        rows={7}
        className='form-control'
        placeholder='Message'
      />
    </form>
  );
};