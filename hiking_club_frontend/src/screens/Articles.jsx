import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/articles");
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter((article) =>
    article.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="articles-container">
      <h1 style={{ fontSize: "50px" }} className="articles-title">Articles</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="articles-grid">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-image">
                {article.images_link && <img src={article.images_link} alt={article.topic} />}
              </div>
              <div className="article-content">
                <h2>{article.topic}</h2>
                <p>{article.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
};

export default Articles;
