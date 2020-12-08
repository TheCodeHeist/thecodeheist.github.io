import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.scss";
import logo from "./../assets/WhiteLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faChalkboardTeacher,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

function Navbar({ activeHome, activeAbout, activeLearn, activeProjects }) {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  return (
    <nav>
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Code Heist Logo" /> CodeHeist Community
      </Link>

      <button type="button" className="navbar-toggler" onClick={handleClick}>
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
      </button>

      <ul className={state ? "nav-links nav-open" : "nav-links"}>
        <li>
          <Link to="/" className={activeHome ? "links active" : "links"}>
            <FontAwesomeIcon icon={faHome} />
            &nbsp;&nbsp;&nbsp;&nbsp;Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={activeAbout ? "links active" : "links"}>
            <FontAwesomeIcon icon={faAddressCard} />
            &nbsp;&nbsp;&nbsp;&nbsp;About
          </Link>
        </li>
        <li>
          <Link to="/learn" className={activeLearn ? "links active" : "links"}>
            <FontAwesomeIcon icon={faChalkboardTeacher} />
            &nbsp;&nbsp;&nbsp;&nbsp;Learn
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={activeProjects ? "links active" : "links"}
          >
            <FontAwesomeIcon icon={faProjectDiagram} />
            &nbsp;&nbsp;&nbsp;&nbsp;Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
