import React from "react";

function Technologies() {
  return (
    <section
      className="container-1 text-center pt-5"
      id="technology"
      style={{ fontSize: "2rem" }}
    >
      {" "}
      <h1 style={{ color: "white", "font-size": "3.2rem" }}>
        Technologies<span className="blink_me">_</span>
      </h1>
      <div
        className="container d-flex justify-content-around row row-cols-1 row-cols-md-3 pb-5 gx-5 gy-5"
        style={{ margin: "auto" }}
      >
        <div className="card shadow border-0 m-5">
          <i
            className="text-center fab fa-html5 fa-4x pt-5"
            style={{ color: "orangered" }}
          ></i>
          <div className="card-body">
            <p className="card-text text-center">HTML</p>
          </div>
        </div>
        <div className=" card shadow border-0 m-5">
          <i
            className="text-center fab fa-css3 fa-4x pt-5"
            style={{ color: "mediumblue" }}
          ></i>
          <div className="card-body">
            <p className="card-text text-center">CSS</p>
          </div>
        </div>
        <div className=" card shadow border-0 m-5">
          <i
            className="text-center fab fa-sass fa-4x pt-5"
            style={{ color: "plum" }}
          ></i>
          <div className="card-body">
            <p className="card-text text-center">Sass</p>
          </div>
        </div>
        <div className=" card shadow border-0 m-5">
          <i
            className="text-center fab fa-js-square fa-4x pt-5"
            style={{ color: "gold" }}
          ></i>
          <div className="card-body">
            <p className="card-text text-center">JavaScript</p>
          </div>
        </div>
        <div className=" card shadow border-0 m-5">
          <i
            className="text-center fab fa-react fa-4x pt-5"
            style={{ color: "deepskyblue" }}
          ></i>
          <div className="card-body">
            <p className="card-text text-center">React</p>
          </div>
        </div>
        <div className=" card shadow border-0 m-5">
          <i
            className="text-center fab fa-node-js fa-4x pt-5"
            style={{ color: "yellowgreen" }}
          ></i>
          <div className="card-body">
            <p className="card-text text-center">Node.js</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
const technologies = [
  {
    JavaScript: <i classNameName="fa-brands fa-js-square">lala</i>,
  },
  { HTML: <i classNameName="fa-brands fa-html5">lili</i> },
  { CSS: <i classNameName="fa-brands fa-css3">lolo</i> },
  { Sass: <i classNameName="fa-brands fa-sass">dkdkkd</i> },
  { Bootstrap: <i classNameName="fa-brands fa-bootstrap">djdj</i> },
  { "React.js": <i classNameName="fa-brands fa-react">oooo</i> },
  { "Node.js": <i classNameName="fa-brands fa-node-js">zzzz</i> },
];

function Technologies() {
  return (
    <div classNameName="card technologies" style={{ width: "18rem" }}>
      {technologies.map((technology) => {
        return (
          
          <div>
            <img src={technology.value} classNameName="card-img-top" alt="..." />
            <div classNameName="card-body">
              <p classNameName="card-text">{technology.key}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

*/

export default Technologies;
