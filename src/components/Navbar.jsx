import React from "react";
import Logo from "../assets/images/Original on Transparent.png";

function Navbar() {
  return (
    <div>
      <nav className="nav shadow rounded">
        <ul className="nav-list">
          <li id="nav-title-name">Robin Skladny </li>
          <li id="nav-title">Web Developer</li>
          <li>
            <img id="logo" src={Logo} alt="Logo" />
          </li>
        </ul>
        <div></div>
      </nav>
    </div>
  );
}

export default Navbar;
