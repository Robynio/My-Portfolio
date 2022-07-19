import React from "react";

import Logo from "../assets/images/Original on Transparent.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md nav shadow rounded">
      <div className="nav-container container">
        <a className="navbar-brand" href="/">
          <img id="logo" src={Logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler navbar-dark "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item nav-title-name nav-list">
              <a
                className="nav-link custom-nav-link active"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item nav-title-name nav-list me-0">
              <a className="nav-link custom-nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item nav-title-name nav-list">
              <a className="nav-link custom-nav-link" href="#technology">
                Technologies
              </a>
            </li>
            <li className="nav-item nav-title-name nav-list">
              <a className="nav-link custom-nav-link" href="#contact">
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
