import React from "react";
import profilePic from "../assets/images/profilePic.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <div className="container overflow-hidden p-5">
        <div className="row justify-content-end gy-4">
          <div className="d-flex m-auto col-lg-3">
            <img
              className="shadow"
              src={profilePic}
              style={{ width: "35vh", borderRadius: "50%" }}
              alt="profile"
            />
          </div>
          <div className="col-lg-9">
            <div>
              Hi, I am Robin. I live in Berlin and I love to create things with
              JavaScript, HTML, CSS. Check my full stack and projects here..{" "}
              <br />
              elit lorem dolor dolor amet lorem sit ipsum ipsum amet consectetur
              dolor elit dolor ipsum amet. ipsum amet ipsum sit consectetur amet
              consectetur sit consectetur dolor consectetur sit elit lorem dolor
              ipsum
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
