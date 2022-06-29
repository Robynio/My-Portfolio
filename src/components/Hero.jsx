import React from "react";
import profilePic from "../assets/images/profilePic.jpg";

function Hero() {
  return (
    <div className="container-1">
      <div className="container overflow-hidden p-5">
        <div className="row justify-content-end gy-4">
          <div className="col-lg-2">
            <img
              className="shadow rounded"
              src={profilePic}
              style={{ width: "22vh" }}
              alt="profile"
            />
          </div>
          <div className="col-lg-10">
            <div className="p-3 border bg-light shadow rounded">
              Hi, I am Robin. I live in Berlin and I love to create things with
              JavaScript, HTML, CSS. Check my full stack and projects here..{" "}
              <br />
              elit lorem dolor dolor amet lorem sit ipsum ipsum amet consectetur
              dolor elit dolor ipsum amet. ipsum amet ipsum sit consectetur amet
              consectetur sit consectetur dolor consectetur sit elit lorem dolor
              ipsum
            </div>
          </div>
          <div className="row justify-content-end gy-3">
            <div className="col-md-12">
              <div className="d-flex justify-content-around p-3 ">
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
    </div>
  );
}

export default Hero;
