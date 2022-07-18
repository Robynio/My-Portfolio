import React from "react";
import profilePic from "../assets/images/profile_pic.jpg";

function AboutMe() {
  return (
    <div className="about-me" id="about">
      <div className="container overflow-hidden pt-5 pb-5">
        <div className="row justify-content-end gy-4">
          <div className="col-xl-4 col-lg-12 col-sm-12 m-auto text-center">
            <img
              className="shadow"
              src={profilePic}
              style={{ width: "300px", borderRadius: "50%" }}
              alt="profile"
            />
          </div>
          <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
            <div>
              "Hi, I am Robin. I live in Berlin and I am passionate about
              developing ideas and bring them to code with JavaScript, HTML,
              CSS. <br />I am able to make things look good in the frontend and
              love to structure and create the backend of things also. 🤖
              Technologies I work with: NODE.js, Express, Mongo-DB, Passport.js,
              REACT, Bootstrap... to be expanded soon! I love to learn and
              improve my skills on a regular basis. 🏀 When I am not coding I
              cook, I hoop or try not to fall off a horse! I am open to
              collaborate on coding projects, job offers and sharing experiences
              in tech! Feel free to contact me here..
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
