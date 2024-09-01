import React from "react";
import "./About.css";
import Logo from "../../images/C2.png";
import CEO from "../../images/CEO.jpeg";
import CFO from "../../images/CFO.jpg";
import Footer from "../Footer/Footer";
import "../Footer/Footer.css";

const About = () => {
  return (
    <>
      <div className="about-grid-container">
        <div className="zigzag">
          <div className="about-grid-item">
            <div className="about-image-container" data-aos="fade-up">
              <img
                className="about-logo-image"
                loading="lazy"
                src={Logo}
                alt="Logo"
              />
            </div>
            <div className="about-content-container">
              <div className="about-content-text-container">
                <h3 className="about-content-heading">About Us</h3>
                <p className="about-content-paragraph">
                  Chapter 2 Entertainment is a dynamic and forward-thinking
                  music consulting and booking company headquartered in Madrid,
                  Spain. Company is founded on the belief that music transcends
                  borders and cultures, and it is our mission to connect
                  talented Latino and Spanish artists with the ever-expanding
                  Asian music market. With a combined wealth of industry
                  expertise and a deep understanding of both Latin and Asian
                  musical traditions, Chapter 2 Entertainment offers a unique
                  blend of services that empower artists to navigate
                  international frontiers while captivating new audiences.{" "}
                  <br /> <br />
                  The term 'Chapter 2' often signifies a new phase in life,
                  characterized by fresh experiences, personal development, and
                  shifts in perspectives, careers, relationships, and so forth.
                  For many, it represents a period of transition and change,
                  like embarking on a new job, relocating to a different city,
                  or stepping into parenthood. <br />
                  <br />
                  For artists, it could denote the exploration of new
                  opportunities within their career. In our case, 'Chapter 2'
                  encapsulates the launch of our company as a distinctive and
                  fresh experience, while also symbolizing a stage of our own
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="zigzag">
          <div className="about-grid-item">
            <div className="about-image-container" data-aos="fade-up">
              <img
                className="about-feature-image"
                loading="lazy"
                src={CEO}
                alt="CEO"
              />
            </div>
            <div className="about-content-container">
              <div className="about-content-text-container">
                <h3 className="about-content-heading">
                  Benson Zhang
                  <br />
                  CEO
                </h3>
                <p className="about-content-paragraph">
                  Benson Zhang possesses over 16 years of extensive expertise in
                  the realms of media, entertainment, and the music industry,
                  expertise in experience of building and managing a team from
                  scratch.
                  <br />
                  <br />
                  A proud alumnus of Berklee College of Music, Benson acquired a
                  Master's in Music Business in 2023 to begin his
                  entrepreneurial journey.
                  <br />
                  <br />
                  Benson founded "Chapter 2 Entertainment," an innovative music
                  consultancy headquartered in Madrid. His unwavering commitment
                  centers on empowering Spanish-speaking artists to conquer the
                  Asian music market while adeptly facilitating the introduction
                  and promotion of Asian talents in the European and South
                  American markets.
                  <br />
                  <br />
                  Benson's professional journey is a testament to his leadership
                  and expertise across pivotal roles within the industry.
                  Serving as the General Manager at Billboard in China, Benson
                  orchestrated and executed high-impact strategies that
                  propelled these entities to unprecedented heights, later
                  assuming the influential role of former content team for
                  YouTube Music in Taiwan. His diverse skill set was evident as
                  a compelling TV Presenter at Hong Kong-TVB and a Radio DJ at
                  Phoenix TV.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="zigzag">
          <div className="about-grid-item">
            <div className="about-image-container" data-aos="fade-up">
              <img
                className="about-feature-image"
                loading="lazy"
                src={CFO}
                alt="CFO"
              />
            </div>
            <div className="about-content-container">
              <div className="about-content-text-container">
                <h3 className="about-content-heading">
                  Vedansh Mishra
                  <br />
                  CFO
                </h3>
                <p className="about-content-paragraph">
                  Vedansh Shashvat Mishra, a graduate with a Master’s degree in
                  Global Entertainment and Music Business from Berklee College
                  of Music, is a versatile professional at the nexus of music,
                  marketing, and pop culture. His expertise spans the Indian
                  music landscape, bolstered by hands-on experience in data
                  analytics and social media marketing. With a diverse portfolio
                  encompassing over 150 Indian brands during his tenure at
                  BigBang.Social, Vedansh is known for spearheading impactful
                  campaigns. He's also the founder of inDNA Records, an
                  independent record label.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter about-newsletter">
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

export default About;
