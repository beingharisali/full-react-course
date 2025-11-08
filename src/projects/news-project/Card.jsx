import React, { useState } from "react";

function Card({ id, title, description, author, url, urlToImage }) {
  const [readMore, setReadMore] = useState(false);
  // const shortenDesc = description && description.substring(0, 50);
  // console.log(shortenDesc);
  return (
    <div className="card w-80 rounded-md p-2 shadow-xl/20 my-4">
      <img src={urlToImage} alt="news" />
      <h4 className="font-semibold my-2">{title}</h4>
      <p>
        {readMore
          ? description && description
          : description && description.substring(0, 50)}
        <button
          className="readmore-btn ml-2 cursor-pointer"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "Show less" : "Read more"}
        </button>
      </p>
      <div className="news-footer flex justify-between">
        <button>{author}</button>
        <a target="_blank" href={url}>
          Details
        </a>
      </div>
    </div>
  );
}

export default Card;

// if (readMore === true) {
//   if (description === true) {
//     description;
//   } else {
//     description.substring(0, 100);
//   }
// }
