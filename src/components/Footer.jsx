import React from "react";
import Logo from "../assets/images/Original on Transparent.png";

function Footer() {
  return (
    <div className="bigfoot">
      <span>
        &copy; Robin Skladny 2022
        <img
          src={Logo}
          style={{ width: "50px", marginLeft: "12px" }}
          alt="logoPic"
        ></img>
      </span>
    </div>
  );
}

export default Footer;
