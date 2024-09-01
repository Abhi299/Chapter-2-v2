import React, { useEffect, useState } from "react";
import { fetchArtists } from "../../services/ArtistsApi";
import { useNavigate } from "react-router-dom";
import "./Artists.css";
import { Audio } from "react-loader-spinner";
import Footer from "../Footer/Footer";

const ArtistsPage = () => {
  const [artistsByGenre, setArtistsByGenre] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getArtists = async () => {
      const data = await fetchArtists();
      setArtistsByGenre(data);
      setLoading(false);
    };

    getArtists();
  }, []);

  const handleCardClick = (artist) => {
    const formattedName = artist.artistName.toLowerCase().split(" ").join("-");
    navigate(`/artist/${encodeURIComponent(formattedName)}`, {
      state: { artist },
    });
  };

  return (
    <div className="artists-page">
      {loading ? (
        <div className="loader-container">
          <Audio
            height={50}
            width={50}
            radius={9}
            color="purple"
            ariaLabel="three-dots-loading"
          />
        </div>
      ) : (
        Object.keys(artistsByGenre).map((genre) => (
          <div key={genre} className="genre-section">
            <h2 className="genre-title">{genre}</h2>
            <div className="artists-list">
              {artistsByGenre[genre].map((artist, index) => (
                <div
                  key={index}
                  className="artist-card"
                  onClick={() => handleCardClick(artist)}
                >
                  <img
                    src={artist.image}
                    alt={artist.artistName}
                    className="artist-image"
                  />
                  <h3 className="artist-name">{artist.artistName}</h3>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
      <Footer />
    </div>
  );
};

export default ArtistsPage;
