import React from 'react';
import { project } from '../util/types';

const projects: project[] = [
  {
    title: 'Pintos',
    description: '',
    imgLink: ''
  }
]

export const Projects = () => {
  return (
    <div
      id='projects-main'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: 'url("home-bg.png")',
        backgroundSize: 'cover',
      }}
    >
      <ProjectsContainer />
    </div>
  );
};

const ProjectsContainer = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      <ProjectCard description='pintos' imgPath='catImg1.jpg' />
      <ProjectCard description='pintos' imgPath='catImg1.jpg' />
      <ProjectCard description='pintos' imgPath='catImg1.jpg' />
      <ProjectCard description='pintos' imgPath='catImg1.jpg' />
      <ProjectCard description='pintos' imgPath='catImg1.jpg' />
      <ProjectCard description='pintos' imgPath='catImg1.jpg' />
    </div>
  );
};

const ProjectCard = ({
  description,
  imgPath,
}: {
  description: string;
  imgPath: string;
}) => {
  return (
    <div
      style={{
        height: '500px',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
      }}
    >
      <Project description={description} imgPath={imgPath} />
    </div>
  );
};

const Project = ({
  description,
  imgPath,
}: {
  description: string;
  imgPath: string;
}) => {
  return (
    <div data-aos="fade-up">
    <div style={{ display: 'flex', justifyContent: 'center' }} >
      <img
        src={imgPath}
        style={{ height: '350px', width: '300px', objectFit: 'cover' }}
      />
    </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: 'white', fontSize: '17px' }}>{description}</p>
      </div>
    </div>
  );
};
