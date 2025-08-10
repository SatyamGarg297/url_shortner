import React, { useState } from "react";
import UrlForm from "../components/UrlForm";
import "./HomePage.css";

const HomePage = () => {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <div className="home-container">
      <h1 className="home-title">URL Shortener</h1>
      <UrlForm onShorten={setShortUrl} />
      {shortUrl && (
        <div className="short-url-container">
          <p className="short-url-text">Short URL:</p>
          <a href={shortUrl} target="_blank" rel="noreferrer" className="short-url-link">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default HomePage;