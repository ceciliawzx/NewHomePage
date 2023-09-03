import React from 'react';
import { Project, Technology } from '../util/types';
import { projects } from '../util/data';
import { getTechColor } from '../util/util';

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
      id='project-container'
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'center',
        margin: '10% 5%',
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
    <div className='project-card'>
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
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
            columnGap: '5px',
            padding: '0',
            margin: '0',
          }}
        >
          {project.technologies?.map((technology, i) => (
            <TechContainer technology={technology} />
          ))}
        </div>
        <div>
          <p style={{ fontSize: '17px' }}>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

const TechContainer = ({ technology }: { technology: Technology }) => {
  return (
    <div
      style={{
        fontSize: '15px',
        borderStyle: 'dashed',
        padding: '4px',
        borderWidth: '1px',
        borderRadius: '5px',
        borderColor: `${getTechColor(technology)}`,
        color: `${getTechColor(technology)}`
      }}
    >
      {technology}
    </div>
  );
};
