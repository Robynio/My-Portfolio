import React from "react";
import healifyAppPic from "../assets/images/healifyApp_pic.png";
import dolphinBankPic from "../assets/images/dolphinBank_pic.png";
import shoeShopPic from "../assets/images/shoeShop_pic.png";

function Projects() {
  return (
    <section className="projects position-relative container-1" id="projects">
      Projects
      <div
        id="carouselExampleCaptions"
        className="carousel slide position-absolute top-50 start-50 translate-middle"
        data-bs-ride="carousel"
        style={{ border: "7px solid white" }}
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
    </section>
  );
}

export default Projects;
