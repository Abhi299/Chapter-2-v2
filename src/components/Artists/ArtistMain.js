import React from "react";
import { useLocation } from "react-router-dom";
import "./Artists.css";

const ArtistMain = () => {
  const location = useLocation();
  const { artist } = location.state || {};

  if (!artist) {
    return <div>Artist data not available.</div>;
  }

  const { artistName, image, description } = artist;

  return (
    <div className="artist-main">
      <h1 className="artist-main-title">{artistName}</h1>
      <img src={image} alt={artistName} className="artist-main-image" />
      <p className="artist-main-description">{description}</p>
    </div>
  );
};

export default ArtistMain;
