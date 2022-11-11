import React from "react";
import healifyAppPic from "../assets/images/healifyApp_pic.png";
import dolphinBankPic from "../assets/images/dolphinBank_pic.png";
import shoeShopPic from "../assets/images/shoeShop_pic.png";

function Projects() {
  return (
    <section
      className="container-1"
      id="projects"
      style={{
        paddingBottom: "60px",
        paddingTop: "60px",
      }}
    >
      <div className="projects-container">
        <div
          className="projects"
          style={{
            fontSize: "65px",
            color: "white",
            paddingTop: "20vh",
          }}
        >
          Projects
        </div>

        <div
          className="shadow rounded-sm tablet content"
          style={{
            marginLeft: "50px",
          }}
        >
          <div
            id="carouselExampleCaptions"
            className="carousel slide position-absolute"
            data-bs-ride="carousel"
            style={{
              width: "100%",
              height: "55vh",
            }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={dolphinBankPic}
                  className="d-block w-100"
                  alt="dolphinBankPic"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={shoeShopPic}
                  className="d-block w-100"
                  alt="shoeShopPic"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={healifyAppPic}
                  className="d-block w-100"
                  alt="healifyAppPic"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={healifyAppPic}
                  className="d-block w-100"
                  alt="healifyAppPic"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
