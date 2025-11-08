import React, { useEffect, useState } from "react";
import Card from "./Card";
// import "./news.css";

const url =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=4fa932807d3247a1ac6fe5048016fafc";
function News() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  async function fetchNews() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.articles);
    setNews(data.articles);
  }
  function changeHandler(e) {
    console.log(e.target.value);
    setQuery(e.target.value);
  }
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <div>
      <div className="news-header flex flex-col items-center">
        <h1>News</h1>
        <div className="field">
          <input
            type="search"
            className="border rounded-sm p-1 w-96 mt-2"
            value={query}
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className="news flex flex-wrap justify-between w-[90%] mx-auto gap-2">
        {news
          .filter((meriNews) => {
            return meriNews.title.toLowerCase().includes(query);
          })
          .map((meriNews) => {
            return <Card {...meriNews} key={meriNews.title} />;
          })}
      </div>
    </div>
  );
}

export default News;
