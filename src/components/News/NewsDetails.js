import React from "react";
import { useLocation } from "react-router-dom";
import "./NewsDetails.css";
import Footer from "../Footer/Footer";

const NewsDetail = () => {
  const { state } = useLocation();
  const article = state ? state.article : null;

  if (!article) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <>
      {article.image && (
        <div className="news-image-container">
          <img src={article.image} alt="news-item" className="news-image" />
        </div>
      )}
      <div className="news-content">
        <h1>{article.headline}</h1>
        {article.content
          .replace(/\\n/g, "\n")
          .split("\n")
          .map((line, index) => (
            <p key={index}>{line}</p>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default NewsDetail;
