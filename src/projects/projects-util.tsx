import React, { useEffect } from 'react';
import '../css/style.css';
import '../css/project-detail.css';
import { projectUrl } from '../data/data';
import { Project, ProjectDetail } from '../util/types';
import { useAppContext } from '../context/appContext';


export const ProjectInDetail = ({ project }: { project: Project }) => {
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
        <Title title={project.title} date={project.time} />
        <Content projectDetails={project.projectDetails} />
      </div>
    </div>
  );
};

export const Title = ({ title, date }: { title: string; date: string }) => {
  return (
    <div
      className='project-title'
      data-aos='fade-down'
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      <div className='project-name'>{title}</div>
      <div className='project-date'>{date}</div>
    </div>
  );
};

export const Content = ({
  projectDetails,
}: {
  projectDetails: ProjectDetail[];
}) => {
  return (
    <div className='project-detail-content-window'>
      {projectDetails.map(
        (projectDetail, index) => {
          if (projectDetail.text2) {
            return (
              <TextTextWindow
                key={`textText-${index}`}
                projectDetail={projectDetail}
              />
            );
          } else if (index % 2 === 0) {
            return (
              <TextPictureWindow
                key={`textPicture-${index}`}
                projectDetail={projectDetail}
              />
            );
          } else {
            return (
              <PictureTextWindow
                key={`pictureText-${index}`}
                projectDetail={projectDetail}
              />
            );
          }
        }
      )}
    </div>
  );
};

export const TextTextWindow = ({
  projectDetail,
}: {
  projectDetail: ProjectDetail;
}) => {
  return (
    <div className='text-picture-window' data-aos='fade-up'>
      <Text title={projectDetail.title} text={projectDetail.text} />
      <Text title={projectDetail.title2} text={projectDetail.text2} />
    </div>
  );
};

export const TextPictureWindow = ({
  projectDetail,
}: {
  projectDetail: ProjectDetail;
}) => {
  return (
    <div className='text-picture-window' data-aos='fade-up'>
      <Text title={projectDetail.title} text={projectDetail.text} />
      <Picture imglink={projectDetail.imgLink} />
    </div>
  );
};

export const PictureTextWindow = ({
  projectDetail,
}: {
  projectDetail: ProjectDetail;
}) => {
  return (
    <div className='text-picture-window' data-aos='fade-up'>
      <Picture imglink={projectDetail.imgLink} />
      <Text title={projectDetail.title} text={projectDetail.text} />
    </div>
  );
};

export const Text = ({ title, text }: { title?: string; text?: string }) => {
  return (
    <div className='project-process-text'>
      <h2>{title}</h2>
      {text}
    </div>
  );
};

export const Picture = ({ imglink }: { imglink?: string }) => {
  return <img className='project-process-img' src={imglink} />;
};
