import React, { useState, useEffect } from 'react';
import { Interest } from '../util/types';
import { interests } from '../util/data';
import '../css/interests.css';

export const Interests = () => {
  return <Slides interests={interests} />;
};

const Slides = ({ interests }: { interests: Interest[] }) => {
  const [currImgIndex, setCurrImgIndex] = useState(0);

  const goToPreviousImg: () => void = () => {
    setCurrImgIndex((prevIndex) =>
      prevIndex === 0 ? interests.length - 1 : prevIndex - 1
    );
  };

  const goToNextImg: () => void = () => {
    setCurrImgIndex((prevIndex) =>
      prevIndex === interests.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(goToNextImg, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='main-window' style={{}}>
      {interests.map((interest, index) => (
        <img
          key={index}
          className={`interest-slide ${
            index === currImgIndex ? 'animated' : 'fade-out'
          } `}
          src={interest.imgLink}
          alt={`Interest ${index}`}
        />
      ))}
    </div>
  );
};
