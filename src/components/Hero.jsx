import React from "react";

function Hero() {
  return (
    <div className="container-1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hero-container text-center">
              I am A{" "}
              <span className="title-color shadow rounded">
                Developer<span className="blink_me">_</span>
              </span>
            </div>
            <div className="d-flex justify-content-around py-5">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="jsTab"
              >
                <img
                  className="icon1"
                  src="https://skillicons.dev/icons?i=js"
                  alt="icon"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                target="htmlTab"
              >
                <img
                  className="icon2"
                  src="https://skillicons.dev/icons?i=html"
                  alt="icon"
                />
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="cssTab"
              >
                <img
                  className="icon3"
                  src="https://skillicons.dev/icons?i=css"
                  alt="icon"
                />
              </a>
              <a href="https://reactjs.org/" target="reactTab">
                <img
                  className="icon4"
                  src="https://skillicons.dev/icons?i=react"
                  alt="icon"
                />
              </a>
              <a href="https://nodejs.org/" target="blank">
                <img
                  className="icon5"
                  src="https://skillicons.dev/icons?i=nodejs"
                  alt="icon"
                />
              </a>
              <a href="https://expressjs.com/ " target="blank">
                <img
                  className="icon6"
                  src="https://skillicons.dev/icons?i=express"
                  alt="icon"
                />
              </a>
              <a href="https://www.mongodb.com/" target="blank">
                <img
                  className="icon7"
                  src="https://skillicons.dev/icons?i=mongodb"
                  alt="icon"
                />
              </a>
              <a href="https://getbootstrap.com/" target="blank">
                <img
                  className="icon8"
                  src="https://skillicons.dev/icons?i=bootstrap"
                  alt="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
