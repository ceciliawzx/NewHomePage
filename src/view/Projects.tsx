import React from 'react';
import { Project } from '../util/types';
import { projects } from '../util/data';

export const Projects = () => {
  return (
    <div
      className='window-main'
      style={{
        flexDirection: 'column',
        alignContent: 'center',
        backgroundImage: 'url("home-bg.png")',
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
        alignContent: 'center',
        margin: '40px',
      }}
    >
      {projects.map((project, i) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      style={{
        height: '700px',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
      }}
    >
      <div data-aos='fade-up'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={project.imgLink}
            style={{ height: '350px', width: '300px', objectFit: 'cover' }}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'white', fontSize: '20px' }}>{project.title}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'white', fontSize: '15px' }}>{project.time}</p>
        </div>
        <div>
          <p style={{ color: 'white', fontSize: '17px' }}>
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};
