import React, { useEffect, useState } from "react";
import "./NewsBar.css";

const FALLBACK = [
  { title: "Sengun's scintillating night tops Monday's action", url: "https://www.nba.com/news/live-updates-lamelo-balls-hornets-host-zion-williamsons-pelicans-in-a-matinee" },
  { title: "2026 NBA All-Star Game reserves revealed", url: "https://www.nba.com/news/2026-all-star-reserves" },
  { title: "Power Rankings, Week 16: Clippers high risers", url: "https://www.nba.com/news/power-rankings-2025-26-week-16" },
];

const NewsBar = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:4000/news");
        if (!res.ok) throw new Error("no proxy");
        const json = await res.json();
        setItems(json.slice(0, 3));
      } catch (err) {
        // fallback to static headlines when proxy isn't running
        setItems(FALLBACK);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    const id = setInterval(fetchNews, 2 * 60 * 1000); // refresh every 2 minutes
    return () => clearInterval(id);
  }, []);

  return (
    <div className="NewsBar">
      <div className="NewsBar-label">NBA News</div>
      <div className="NewsBar-list">
        {loading && <div className="NewsBar-loading">Loading news…</div>}
        {!loading && items.map((n, i) => (
          <a key={i} className="NewsBar-item" href={n.url} target="_blank" rel="noreferrer">
            {n.image && <img className="NewsBar-thumb" src={n.image} alt="thumb" />}
            <div className="NewsBar-title">{n.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsBar;
