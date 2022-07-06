import React from "react";
import Logo from "../assets/images/Original on Transparent.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav shadow rounded">
        <div className="nav-container container-fluid">
          <a href="#home">
            <img id="logo" src={Logo} alt="Logo" />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#topnav"
            aria-controls="topnav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="topnav">
            <ul className="nav-list ml-auto">
              <li id="nav-title-name">Home</li>
              <li id="nav-title-name">About</li>
              <li id="nav-title-name">Technologies</li>
              <li id="nav-title-name">Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
