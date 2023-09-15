import React, { useState, ChangeEvent } from 'react';
import { SocialMedia, SocialMediaType } from '../util/types';
import { socialMedias } from '../util/data';
import '../css/contact.css';
import { mainUrl } from '../util/data';

export const Contact = () => {
  return (
    <div
      className='window-main'
      style={{
        backgroundImage: 'url("../bg/contact-bg.png")',
        flexDirection: 'column',
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
    <div className='socialmedia-row'>
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
      <div
        style={{
          wordWrap: 'break-word',
          whiteSpace: 'pre-wrap',
        }}
      >
        {link}
      </div>
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
    <div>
      <MessageForm />
    </div>
  );
};

const MessageForm = () => {
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
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

  const handleSendEmail = (event: React.FormEvent) => {
    event.preventDefault();
    // @ts-ignore
    if (window.Email) {
      const config = {
        SecureToken: '8326cf45-b68c-441a-85db-67856aba0f51',
        To: 'ceciliawzx@qq.com',
        From: emailData.email,
        Subject: emailData.subject,
        Body: `${emailData.name} connected to you over your website:\n${emailData.message}`,
      };
      // @ts-ignore
      window.Email.send(config).then(
        (message: string) => alert(`${message == 'OK' ? 'Message sent successfully' : message}`),
      );
    }
  };
  return (
    <form
      id='contact-form'
      action='mailto:zixiwangcecilia@gmail.com'
      method='post'
      encType='plain/text'
      onSubmit={handleSendEmail}
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
        placeholder='Email'
        name='email'
        value={emailData.email}
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
