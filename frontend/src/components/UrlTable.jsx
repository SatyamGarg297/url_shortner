import React, { useEffect, useState } from "react";
import api from "../api";
import "./UrlTable.css";

const UrlTable = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    api.get("/api/urls").then(res => setUrls(res.data));
  }, []);

  return (
    <div className="url-table-container">
      <table className="url-table">
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Original URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url._id}>
              <td><a href={`/${url.shortCode}`} target="_blank" rel="noreferrer">{url.shortCode}</a></td>
              <td>{url.longUrl}</td>
              <td className="clicks-cell">{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlTable;
