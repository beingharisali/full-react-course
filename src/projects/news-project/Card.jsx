import React from "react";

function Card({ title, description, author, url, urlToImage }) {
  return (
    <div className="card">
      <img src={urlToImage} alt="news" />
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="news-footer">
        <button>{author}</button>
        <a target="_blank" href={url}>
          Details
        </a>
      </div>
    </div>
  );
}

export default Card;
