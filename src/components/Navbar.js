import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";
import logo from "./../assets/WhiteLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressCard,
  faChalkboardTeacher,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav>
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Code Heist Logo" /> CodeHeist Community
        </Link>

        <button type="button" className="navbar-toggler" onClick={this.handleClick}>
          <div className="bars"></div>
          <div className="bars"></div>
          <div className="bars"></div>
        </button>

        <ul className={this.state.clicked ? "nav-links nav-open" : "nav-links"}>
          <li>
            <Link to="/" className={this.props.activeHome ? "links active" : "links"}>
              <FontAwesomeIcon icon={faHome} />
              &nbsp;&nbsp;&nbsp;&nbsp;Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={this.props.activeAbout ? "links active" : "links"}>
              <FontAwesomeIcon icon={faAddressCard} />
              &nbsp;&nbsp;&nbsp;&nbsp;About
            </Link>
          </li>
          <li>
            <Link to="/learn" className={this.props.activeLearn ? "links active" : "links"}>
              <FontAwesomeIcon icon={faChalkboardTeacher} />
              &nbsp;&nbsp;&nbsp;&nbsp;Learn
            </Link>
          </li>
          <li>
            <Link to="/projects" className={this.props.activeProjects ? "links active" : "links"}>
              <FontAwesomeIcon icon={faProjectDiagram} />
              &nbsp;&nbsp;&nbsp;&nbsp;Projects
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
