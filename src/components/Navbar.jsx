import React from "react";
import { NavHashLink } from "react-router-hash-link";

import Logo from "../assets/images/Original on Transparent.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav shadow rounded">
        <div className="nav-container container-fluid">
          <div to="#home" className="nav-div">
            <img id="logo" src={Logo} alt="Logo" />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#topnav"
            aria-controls="topnav"
            aria-expanded="false"
            aria-label="Toggle navigation "
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="topnav">
            <ul className="nav-list ml-auto">
              <li id="nav-title-name">
                <div to="#home">Home</div>
              </li>
              <li id="nav-title-name">
                <div to="#about">About</div>
              </li>
              <li id="nav-title-name">
                <div to="#technologies">Technologies</div>
              </li>
              <li id="nav-title-name">
                <div to="contact">Contact</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
