import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./news.css";

const url =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=4fa932807d3247a1ac6fe5048016fafc";
function News() {
  const [news, setNews] = useState([]);
  async function fetchNews() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.articles);
    setNews(data.articles);
  }
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <h1>News</h1>
      <div className="news">
        {news.map((meriNews) => {
          return <Card {...meriNews} />;
        })}
      </div>
    </div>
  );
}

export default News;
