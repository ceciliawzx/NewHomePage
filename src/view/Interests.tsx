import React, { useState, useEffect } from 'react';
import { Interest, InterestType } from '../util/types';
import { interests } from '../data/interests';
import '../css/interests.css';
import '../css/interest-animation/notes.css';
import '../css/interest-animation/poems.css';
import { useAppContext } from '../context/appContext';
import { Link } from 'react-router-dom';

export const Interests = () => {
  const {
    state: { showNotes, showPoems },
  } = useAppContext();

  return (
    <div className='window-main' style={{ backgroundColor: 'black' }}>
      <Slides interests={interests} />
      {showNotes && <Notes />}
      {showPoems && <Poems />}
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
  const {
    api: { setShowNotes, setShowPoems },
  } = useAppContext();

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
      setShowAnimation = (show: boolean) => setShowPoems(show);
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
      <Link
        className='interest-text-intro'
        to={interest.detailLink}
        onClick={() => window.scrollTo(0, 0)}
      >
        {interest.intro}
      </Link>
    </div>
  );
};

const Notes = () => {
  return (
    <div id='floating-window'>
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

const Poems = () => {
  return (
    <div id='floating-window'>
      <div className='poem-1'>
        我<br />是<br />清<br />都<br />山<br />水<br />郎
      </div>
      <div className='poem-2'>
        天<br />教<br />分<br />付<br />与<br />疏<br />狂
      </div>
      <div className='poem-3'>
        曾<br />批<br />给<br />雨<br />支<br />风<br />券
      </div>
      <div className='poem-4'>
        累<br />上<br />留<br />云<br />借<br />月<br />章
      </div>
      <div className='poem-5'>
        诗<br />万<br />首<br />，<br />酒<br />千<br />觞
      </div>
      <div className='poem-6'>
        几<br />曾<br />着<br />眼<br />看<br />侯<br />王
      </div>
      <div className='poem-7'>
        玉<br />楼<br />金<br />阙<br />慵<br />归<br />去
      </div>
      <div className='poem-8'>
        且<br />插<br />梅<br />花<br />醉<br />洛<br />阳
      </div>
    </div>
  );
};
