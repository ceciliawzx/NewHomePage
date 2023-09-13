import React, { useState, ChangeEvent } from 'react';
import { SocialMedia, SocialMediaType } from '../util/types';
import { socialMedias } from '../util/data';
import '../css/contact.css';

export const Contact = () => {
  return (
    <div
      className='window-main'
      style={{
        backgroundImage: 'url("./bg/contact-bg.png")',
        backgroundSize: 'cover',
      }}
    >
      <div id='contact-window'>
        <ConactTitle />
        <div id='contact-container' data-aos='fade-up'>
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
    <div
      data-aos='fade-down'
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div id='contact-title-getInTouch'>GET IN TOUCH</div>
      <div id='contact-title-Contact'>Contact</div>
    </div>
  );
};

const SocialMedias = () => {
  return (
    <div id='socialmedias-container'>
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
        className='socialmedia-img'
        src={socialMedia.imgLink}
        style={{
          filter: 'opacity(1) drop-shadow(0 0 0 purple)',
        }}
      />
      {socialMedia.type === SocialMediaType.Wechat && (
        <Wechat link={socialMedia.data} />
      )}
      {socialMedia.type === SocialMediaType.Email && (
        <Email link={socialMedia.data} />
      )}
      {socialMedia.type === SocialMediaType.LinkedIn && (
        <LinkedIn link={socialMedia.data} />
      )}
    </div>
  );
};

const Wechat = ({ link }: { link: string }) => {
  return <div>{link}</div>;
};

const Email = ({ link }: { link: string }) => {
  return (
    <a href={`mailto:${link}`} className='socialmedia-link'>
      <div>{link}</div>
    </a>
  );
};

const LinkedIn = ({ link }: { link: string }) => {
  return (
    <a
      href={`https://www.linkedin.com/in/${link}`}
      target='_blank'
      className='socialmedia-link'
    >
      <div>{link}</div>
    </a>
  );
};

const MessageWindow = () => {
  return (
    <div style={{ width: '33%', paddingLeft: '50px' }}>
      <MessageForm />
    </div>
  );
};

const MessageForm = () => {
  const [emailData, setEmailData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  const handleSendEmail = () => {
    const mailtoURL = `mailto:ceciliawzx@qq.com?subject=${encodeURIComponent(
      emailData.subject
    )}&body=Hi Zixi: %0D%0A%0D%0A${encodeURIComponent(
      emailData.message
    )}%0D%0A%0D%0A${encodeURIComponent(emailData.name)}`;
    window.location.href = mailtoURL;
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        rowGap: '10%',
      }}
      action='mailto:ceciliawzx@qq.com'
      method='post'
      encType='plain/text'
      onSubmit={(e) => {
        e.preventDefault();
        handleSendEmail();
      }}
    >
      <input
        type='text'
        className='form-control'
        placeholder='Name'
        name='name'
        value={emailData.name}
        onChange={handleInput}
      />
      <input
        type='text'
        className='form-control'
        placeholder='Subject'
        name='subject'
        value={emailData.subject}
        onChange={handleInput}
      />
      <textarea
        id='contact-message'
        cols={30}
        rows={7}
        className='form-control'
        name='message'
        placeholder='Message'
        value={emailData.message}
        onChange={handleInput}
      />
      <button id='send-message-btn' type='submit'>
        SEND MESSAGE
      </button>
    </form>
  );
};
