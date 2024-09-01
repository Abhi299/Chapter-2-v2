import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchArticles from "../../services/NewsApi";
import "./News.css";
import Footer from "../Footer/Footer";
import { Audio } from "react-loader-spinner";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchArticles();
      if (Array.isArray(data)) {
        setArticles(data);
      } else {
        console.error("Unexpected API response format:", data);
      }
    };

    getArticles();
  }, []);

  const truncateContent = (content, length) => {
    return content.length > length
      ? content.substring(0, length) + "..."
      : content;
  };

  const handleReadMore = (index, article) => {
    navigate(`/news/${index}`, { state: { article } });
  };

  return (
    <>
      <h1 className="news-heading">Latest News</h1>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} className="news-item">
            {article.image && (
              <img
                src={article.image}
                alt="news-item"
                className="news-img"
              />
            )}
            <div className="news-text">
              <h3>{article.headline}</h3>
              <p style={{ whiteSpace: "pre-line" }}>
                {truncateContent(article.content, 400)}
              </p>
              <button onClick={() => handleReadMore(index, article)}>
                Read More
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="loader-container">
          <Audio
            height={50}
            width={50}
            radius={9}
            color="purple"
            ariaLabel="three-dots-loading"
          />
        </div>
      )}
      <Footer />
    </>
  );
};

export default NewsList;
