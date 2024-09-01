import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-3d-carousel";
import { fetchArtists } from "../../services/ArtistsApi";
import Hero from "../../images/hero.jpeg";
import FeatImage01 from "../../images/feature1.jpg";
import FeatImage02 from "../../images/feature2.jpg";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [artistsByGenre, setArtistsByGenre] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artistsData = await fetchArtists();
        setArtistsByGenre(artistsData);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1 className="hero-heading">
            Embark on a sensational journey that bridges talent between Europe,
            Latin America, and the Asian market, while also bringing Asian
            artists to the stages of Europe and Latin America.
          </h1>
        </div>
        <img src={Hero} alt="Hero" className="hero-image" />
      </div>
      <div className="about-us">
        <h2>About C2E</h2>
        <h4>
          Chapter 2 Entertainment is a dynamic and forward-thinking music
          consulting and booking company headquartered in Madrid, Spain.
        </h4>
        <NavLink to="/about" className="rounded-button">
          More about us
        </NavLink>
      </div>
      <div className="grid-container">
        <div className="grid-item first">
          <div className="image-container" data-aos="fade-up">
            <img
              className="feature-image"
              loading="lazy"
              src={FeatImage01}
              alt="Features 01"
            />
          </div>
          <div className="content-container">
            <div className="content-text-container">
              <h3 className="content-heading">
                Introducing Dynamic Artists to the Asian Market
              </h3>
              <p className="content-paragraph">
                At Chapter 2 Entertainment, we’re revolutionizing the industry
                by bringing unmatched Latin and Spanish performers to the Asian
                forefront. We handpick talent that's ready to wow audiences
                across borders.
              </p>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <div className="image-container" data-aos="fade-up">
            <img
              className="feature-image"
              loading="lazy"
              src={FeatImage02}
              alt="Features 02"
            />
          </div>
          <div className="content-container">
            <div className="content-text-container">
              <h3 className="content-heading">
                A Fusion of Cultures and Diverse Experiences
              </h3>
              <p className="content-paragraph">
                This musical movement unites hearts and souls all around Asia.
                Be part of the amazing blend of vibrant cultures and immerse in
                the unparalleled experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Slider />
      <div className="artists">
        <h2 className="artists-heading">Meet our Clients</h2>
        <Carousel
          height="35vw"
          width="65vw"
          interval="3000"
          showStatus={false}
          isShadow={false}
        >
          {Object.keys(artistsByGenre).map((genre) =>
            artistsByGenre[genre].map((artist) => (
              <img
                key={artist.artistName}
                src={artist.image}
                alt={artist.artistName}
                className="carousel-image"
              />
            ))
          )}
        </Carousel>
      </div>
      <div className="newsletter">
        <div className="newsletter-text">
          <h2>Stay in the loop</h2>
          <h4>
            Subscribe to our newsletter and be the first to receive exclusive
            updates and news from artists of Chapter 2 Entertainment.
          </h4>
        </div>
        <div className="newsletter-field-section">
          <input
            className="newsletter-field"
            type="email"
            placeholder="Enter your Email ID"
          />
          <button className="newsletter-button">Subscribe</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
