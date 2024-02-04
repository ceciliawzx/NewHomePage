import React, { useEffect } from "react";
import "../css/interests.css";
import { useAppContext } from "../context/appContext";
import { interestUrl } from "../data/data";
import { useNavigate } from 'react-router-dom';
import { mainUrl } from '../data/data';

export const InterestDetail = ({ photoUrls }: { photoUrls: string[] }) => {
  const {
    api: { setCurrPage },
  } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    setCurrPage(interestUrl);
  }, []);

  // Function to handle going back to the project page
  const handleGoBack = () => {
    navigate(interestUrl); // Replace with your project page URL
  };
  
  return (
    <div
      className="window-main"
      style={{
        flexWrap: "wrap",
        flexDirection: "row",
        justifyItems: "center",
        backgroundColor: "black",
      }}
    >
      <div className="back-button" onClick={handleGoBack}>
        <img
          className="back-button-img"
          src={`${mainUrl}icon/back.png`}
          alt="Back"
        />
      </div>
      {photoUrls.map((photoUrl, i) => (
        <Photo bgUrl={photoUrl} />
      ))}
    </div>
  );
};

const Photo = ({ bgUrl }: { bgUrl: string }) => {
  return (
    <div className="interest-detail-photo">
      <div
        className="photo-entry"
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      ></div>
    </div>
  );
};
