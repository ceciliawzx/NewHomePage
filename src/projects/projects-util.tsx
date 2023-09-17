import React from 'react';
import '../css/style.css';
import '../css/project-detail.css';
import { Project, ProjectDetail } from '../util/types';

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
      {projectDetails.map((projectDetail, index) =>
        index % 2 === 0 ? (
          <TextPictureWindow
            key={`textPicture-${index}`}
            projectDetail={projectDetail}
          />
        ) : (
          <PictureTextWindow
            key={`pictureText-${index}`}
            projectDetail={projectDetail}
          />
        )
      )}
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

export const Text = ({ title, text }: { title: string; text: string }) => {
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
