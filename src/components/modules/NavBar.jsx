import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("bybook-theme");
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = stored ? stored === "dark" : prefersDark;
    setIsDark(shouldUseDark);
    document.body.classList.toggle("theme-dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.body.classList.toggle("theme-dark", next);
      localStorage.setItem("bybook-theme", next ? "dark" : "light");
      return next;
    });
  };

  const NavList = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/aboutme/" },
    { name: "Blog", path: "/blog/" },
    { name: "Gallery", path: "/gallery/" }
  ]

  return (
    <div className="NavBar-stack">
      <nav className="NavBar-container">
          {NavList.map((item, index) => (
            <Link key={index} to = {item.path} className = 'NavBar-link'>
              {item.name}
            </Link>
          ))}
      </nav>
      <button className="NavBar-toggle" type="button" onClick={toggleTheme}>
        {isDark ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}

export default NavBar;
