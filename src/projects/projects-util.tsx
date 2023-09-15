import React from 'react';
import '../css/style.css';
import '../css/project-detail.css';

export const Title = () => {
    return (
      <div
        data-aos='fade-down'
        style={{ fontFamily: "'Times New Roman', Times, serif" }}
      >
        <div className='project-title'> DRP - Design for Real People </div>
        <div className='project-date'> May ~ Jun 2023 </div>
      </div>
    );
  };
  
export const TextPictureWindow = () => {
    return (
      <div className='text-picture-window'>
  
  
      </div>
    )
  }
  
export const PictureTextWindow = () => {
    return (
      <div className='picture-text-window'>
  
  
      </div>
    )
  }
  
export const Text = ( {text}: {text: string}) => {
    return (
      <div className='project-process-text'>
        {text}
      </div>
    );
  }
  
  
export const Picture = ( {imglink}: {imglink: string}) => {
    return (
      <img className='project-process-img' src={imglink}/>
    );
  }