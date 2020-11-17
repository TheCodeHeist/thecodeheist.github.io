import React from "react";
import "./scss/Navbar.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav>
        <Link to="/" className="navbar-brand">
          Code Heist
        </Link>
        <ul>
          <Link to="/" className={`nav-links ${props.Home ? "active" : ""}`}>
            <li>Home</li>
          </Link>
          <Link
            to="/about"
            className={`nav-links ${props.About ? "active" : ""}`}
          >
            <li>About</li>
          </Link>
          <Link
            to="/learn"
            className={`nav-links ${props.Learn ? "active" : ""}`}
          >
            <li>Learn</li>
          </Link>
          <Link
            to="/portfolio"
            className={`nav-links ${props.Portfolio ? "active" : ""}`}
          >
            <li>Portfolio</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
