import React from "react";

function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="projects" id="secTitle">
          Projects<span className="blink_me">_</span>
        </div>

        <div className="shadow rounded-sm tablet content">
          <div
            id="carouselExampleCaptions"
            className="carousel slide position-absolute"
            data-bs-ride="carousel"
            style={{
              width: "100%",
              height: "55vh",
              position: "relative",
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
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="shoeShopImage"></div>
              </div>
              <div className="carousel-item">
                <div className="healifyAppImage"></div>
              </div>
              <div className="carousel-item">
                <div className="dolphinBankImage"></div>
              </div>
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
    </section>
  );
}

export default Projects;
