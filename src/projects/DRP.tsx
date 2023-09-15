import React from 'react';
import '../css/style.css';
import '../css/project-detail.css';
import {
  Title,
  Picture,
  Text,
  TextPictureWindow,
  PictureTextWindow,
} from './projects-util';

export const DRP = () => {
  return (
    <div className='window-main' style={{ backgroundColor: 'gray', flexDirection: 'column' }}>
      <div className='project-window'>
        <Title />
      </div>
    </div>
  );
};
