import React, { useState } from "react";
import api from "../api";
import "./UrlForm.css";

const UrlForm = ({ onShorten }) => {
  const [longUrl, setLongUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/api/shorten", { longUrl });
    onShorten(res.data.shortUrl);
    setLongUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="url-form">
      <input
        type="url"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default UrlForm;