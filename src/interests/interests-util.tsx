import React, { useEffect } from 'react';
import '../css/interests.css';
import { useAppContext } from '../context/appContext';
import { interestUrl } from '../data/data';

export const InterestDetail = ({ photoUrls }: { photoUrls: string[] }) => {
  const {
    api: { setCurrPage },
  } = useAppContext();

  useEffect(() => {
    setCurrPage(interestUrl);
  }, []);
  return (
    <div
      className='window-main'
      style={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyItems: 'center',
        backgroundColor: 'black',
      }}
    >
      {photoUrls.map((photoUrl, i) => (
        <Photo bgUrl={photoUrl} />
      ))}
    </div>
  );
};

const Photo = ({ bgUrl }: { bgUrl: string }) => {
  return (
    <div className='interest-detail-photo'>
      <div
        className='photo-entry'
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      ></div>
    </div>
  );
};
