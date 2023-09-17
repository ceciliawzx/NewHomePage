import React, { useEffect } from 'react';
import '../css/style.css';
import '../css/project-detail.css';
import { Title, Content } from './projects-util';
import { useAppContext } from '../context/appContext';
import { projectUrl, DRP } from '../util/data';

export const DrpDetail = () => {
  const {
    api: { setCurrPage },
  } = useAppContext();
  useEffect(() => {
    setCurrPage(projectUrl);
  }, []);
  return (
    <div
      className='window-main'
      style={{ backgroundColor: 'black', flexDirection: 'column' }}
    >
      <div className='project-window'>
        <Title title='DRP - Design for Real People' date='May ~ Jun 2023' />
        <Content projectDetails={DRP.projectDetails} />
      </div>
    </div>
  );
};
