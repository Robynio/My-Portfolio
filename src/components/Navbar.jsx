import React from "react";

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
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li id="nav-title-name">
                <a id="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li id="nav-title-name">
                <a id="nav-link" href="#about">
                  About
                </a>
              </li>
              <li id="nav-title-name">
                <a id="nav-link" href="#technology">
                  Technologies
                </a>
              </li>
              <li id="nav-title-name">
                <a id="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
