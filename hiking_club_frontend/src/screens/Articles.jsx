import React from "react";
import "../styles/Articles.css";

const articles = [
  {
    title: "Peacock Hill",
    description:
      "Hiking is the activity of taking long, vigorous walks in nature for fun. Put on some sturdy shoes and bring along your water bottle — let's go hiking! We usually reserve the term hiking for walks in the countryside.",
  },
  {
    title: "Another Trail",
    description:
      "Explore scenic trails and breathtaking landscapes with our curated list of hikes. Whether you’re a beginner or an experienced hiker, there’s something for everyone!",
  },
];

const Articles = () => {
  return (
    <div className="articles-container">
      <h1 style = {{fontSize : '50px'}} className="articles-title">Articles</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <div className="article-image"></div>
            <div className="article-content">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
