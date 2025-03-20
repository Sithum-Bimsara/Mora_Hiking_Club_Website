import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Knowledge.css";

const Knowledge = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   // Fetch knowledge from the backend
  //   axios
  //     .get("http://localhost:8081/api/knowledge") // Adjust the URL if needed
  //     .then((response) => {
  //       setArticles(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching knowledge:", error);
  //     });
  // }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/knowledge");
        setArticles(response.data);
      } catch (error) {
        console.error("Error fetching knowledge:", error);
      }
    };

    fetchArticles();
  }, []);

  // Filter articles based on the search term
  const filteredArticles = articles.filter((article) =>
    article.topic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="articles-container">
      <h1 style={{ fontSize: "50px" }} className="articles-title">Knowledge</h1>
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
          filteredArticles.map((article, index) => (
            <div key={index} className="article-card">
              <div className="article-image"></div>
              <div className="article-content">
                <h2>{article.topic}</h2>
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

export default Knowledge;
