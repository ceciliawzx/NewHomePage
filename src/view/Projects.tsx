import React from 'react';
import { Project, Technology } from '../util/types';
import { projects } from '../util/data';
import { getTechColor } from '../util/util';
import '../css/projects.css';

export const Projects = () => {
  return (
    <div
      className='window-main'
      style={{
        flexDirection: 'column',
        alignContent: 'center',
        backgroundImage: 'url("./bg/project-bg.png")',
      }}
    >
      <ProjectsContainer />
    </div>
  );
};

const ProjectsContainer = () => {
  return (
    <div id='project-container'>
      {projects.map((project, i) => (
        <div className='project-card' key={`project-card-${i}`}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div data-aos='fade-up'>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img className='project-img' src={project.imgLink} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '20px' }}>{project.title}</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '15px' }}>{project.time}</p>
      </div>
      <div className='technologies-container'>
        {project.technologies?.map((technology, i) => (
          <div
            className='tech-container'
            key={`technology-container-${i}`}
            style={{
              borderColor: `${getTechColor(technology)}`,
              color: `${getTechColor(technology)}`,
            }}
          >
            {technology}
          </div>
        ))}
      </div>
      <div>
        <p style={{ fontSize: '17px' }}>{project.description}</p>
      </div>
    </div>
  );
};
