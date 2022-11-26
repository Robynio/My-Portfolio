import React from "react";
import profilePic from "../assets/images/profile_pic.jpg";

function AboutMe() {
  return (
    <section className="about-me " id="about">
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
            <div id="mytext">
              <span style={{ fontSize: "40px", lineHeight: "normal" }}>*</span>{" "}
              Hi, I am Robin! <br />
              I am passionate about creating fully responsive, scalable websites
              and applications full stack.
              <br />
              See the soon to be expanded list of technologies I work with and a
              glimpse of some of my projects below! <br />I improve my skills on
              a regular basis. I am open to freelance work, collaborate on
              coding projects, job offers and sharing experiences in tech!
              <br />
              Contact me here{" "}
              <a
                href="#contacts"
                style={{
                  textDecoration: "none",
                }}
              >
                <i
                  className="fa-regular fa-paper-plane"
                  style={{
                    fontSize: "2rem",
                    color: "yellow",
                  }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
