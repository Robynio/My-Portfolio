import React from "react";
import Logo from "../assets/images/Original on Transparent.png";

function Footer() {
  function impressum(e) {
    e.preventDefault();
    const impressDiv = document.getElementById("impress-text");
    if (impressDiv.style.display !== "none") {
      return (impressDiv.style.display = "none");
    } else {
      return (impressDiv.style.display = "block");
    }
  }
  return (
    <>
      <div className="bigfoot">
        <span>
          &copy; Robin Skladny 2022
          <img
            src={Logo}
            style={{ width: "50px", marginLeft: "12px" }}
            alt="logoPic"
          ></img>
        </span>
        {/*<span id="impressum">
          {" "}
          <a
            style={{ textDecoration: "none", color: "white" }}
            href={{}}
            onClick={impressum}
          >
            legal disclosure / Impressum
          </a>
          <div
            className="impressum-card"
            id="impress-text"
            style={{ display: "none" }}
          >
            Impressum: <br />
            RS Web-Development <br />
            USt. IdNr: 16/536/00613 <br />
            Robin Skladny <br />
            Thomasstraße 15, 12053 Berlin <br />
            E-mail: robin_skladny40@gmx.de
            <br />
            Mobile: +49 156 78 193 751 <br />
          </div>
        </span>*/}
      </div>
    </>
  );
}

export default Footer;
