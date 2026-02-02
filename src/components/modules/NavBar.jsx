import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = () => {
  const NavList = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about/" },
    { name: "Blog", path: "/blog/" },
    { name: "Gallery", path: "/gallery/" }
  ]

  return (
    <nav className = 'NavBar-container'>
        {NavList.map((item, index) => (
          <Link key={index} to = {item.path} className = 'NavBar-link'>
            {item.name}
          </Link>
        ))}
    </nav>
  );
}

export default NavBar;