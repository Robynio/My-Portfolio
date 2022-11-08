import React from "react";

import Logo from "../assets/images/Original on Transparent.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md fixed-top nav shadow rounded">
      <div className="nav-container container">
        <a className="navbar-brand" href="#home">
          <img id="logo" src={Logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler navbar-dark collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav-list"
          id="navbarTogglerDemo01"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item nav-title-name nav-item">
              <a
                className="nav-link custom-nav-link active"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item nav-title-name nav-item me-0">
              <a className="nav-link custom-nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item nav-title-name nav-item">
              <a className="nav-link custom-nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item nav-title-name nav-item">
              <a className="nav-link custom-nav-link" href="#technology">
                Technologies
              </a>
            </li>
            <li className="nav-item nav-title-name nav-item">
              <a className="nav-link custom-nav-link" href="#contacts">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
