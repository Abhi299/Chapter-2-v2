import React from "react";
import "./Services.css";
import Footer from "../Footer/Footer";

const Services = () => {
  return (
    <>
      <div class="container">
        <div class="service-card">
          <h2>Booking</h2>
          <p>
            Chapter 2 Entertainment provides top-tier booking services, focusing
            on the Asian market. We connect global artists with club owners,
            concert promoters, and festival organizers to secure premier
            performance opportunities across Asia, tailored to each artist's
            needs.
          </p>
          <a href="mailto:Benson@chaptertwoent.com">
            <button>Enquire</button>
          </a>
        </div>
        <div class="service-card">
          <h2>Consulting</h2>
          <p>
            Specializing in the Asian market, Chapter 2 Entertainment offers
            expert consulting services, including DSP pitching, social media
            management, radio and TV pitching, data analysis, and market entry
            strategies. We guide artists and labels through the complexities of
            the Asian music industry, ensuring strategic growth and market
            success.
          </p>
          <a href="mailto:Benson@chaptertwoent.com">
            <button>Enquire</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
