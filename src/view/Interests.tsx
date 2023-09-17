import React, { useState, useEffect } from 'react';
import { Interest, InterestType } from '../util/types';
import { interests } from '../data/interests';
import '../css/interests.css';
import '../css/notes.css';
import { useAppContext } from '../context/appContext';

export const Interests = () => {
  const {
    state: { showNotes },
  } = useAppContext();

  return (
    <div className='window-main' style={{ backgroundColor: 'black' }}>
      <Slides interests={interests} />
      {showNotes && <Notes />}
    </div>
  );
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

  const goToImg = (index: number) => {
    setCurrImgIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(goToNextImg, 8000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div id='interest-window'>
        {interests.map((interest, index) => (
          <>
            <img
              key={index}
              className={`interest-slide ${
                index === currImgIndex ? 'fade-in' : 'fade-out'
              } `}
              src={interest.imgLink}
              alt={`Interest ${index}`}
            />
            <InterestsText
              interest={interest}
              index={index}
              currImgIndex={currImgIndex}
            />
          </>
        ))}
      </div>
      <div id='slide-hover-btns'>
        {interests.map((interest, index) => (
          <span
            className={`slide-hover-btn ${
              index === currImgIndex ? 'hover-white' : 'hover-transparent'
            }`}
            onClick={() => goToImg(index)}
          />
        ))}
      </div>
    </>
  );
};

const InterestsText = ({
  interest,
  index,
  currImgIndex,
}: {
  interest: Interest;
  index: number;
  currImgIndex: number;
}) => {
  const { api: {setShowNotes} } = useAppContext();
  
  let setShowAnimation: (show: boolean) => void = (show: boolean) => null;

  let addClassName = '';
  switch (interest.title) {
    case InterestType.Musicals:
      addClassName = 'music';
      setShowAnimation = (show: boolean) => setShowNotes(show);
      break;
    case InterestType.Violin:
      setShowAnimation = (show: boolean) => setShowNotes(show);
      addClassName = 'music';
      break;
    case InterestType.ClassicalMusic:
      setShowAnimation = (show: boolean) => setShowNotes(show);
      addClassName = 'music';
      break;
    case InterestType.Food:
      addClassName = 'food';
      break;
    case InterestType.Cats:
      addClassName = 'cat';
      break;
    case InterestType.Traveling:
      addClassName = 'traveling';
      break;
    case InterestType.Poems:
      addClassName = 'poems';
      break;
    default:
      break;
  }

  return (
    <div
      className={`interest-text ${index === currImgIndex ? 'shown' : 'hidden'}`}
    >
      <div
        className={`interest-text-title ${addClassName}`}
        onMouseEnter={() => setShowAnimation(true)}
        onMouseLeave={() => setShowAnimation(false)}
      >
        {interest.title}
      </div>
      <div className='interest-text-intro'>{interest.intro}</div>
    </div>
  );
};

const Notes = () => {
  return (
    <div id='floating-notes'>
      <div className='note-1'>&#9835; &#9833;</div>
      <div className='note-2'>&#9833;</div>
      <div className='note-3'>&#9839; &#9834;</div>
      <div className='note-4'>&#9838;</div>
      <div className='note-5'>&#127926;</div>
      <div className='note-6'>&#127931;</div>
      <div className='note-7'>&#119070;</div>
      <div className='note-8'>&#9834;</div>
    </div>
  );
};
