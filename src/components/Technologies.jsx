import React from "react";

function Technologies() {
  return (
    <section id="technologies" className="technologies text-center pt-5">
      {" "}
      Technologies
      <div
        className=" container row row-cols-1 row-cols-md-3 pb-5 gx-5 gy-5"
        style={{ margin: "auto" }}
      >
        <div className="card shadow rounded-3">
          <i className="text-center fab fa-html5 fa-5x pt-5"></i>
          <div className="card-body">
            <p className="card-text text-center">HTML</p>
          </div>
        </div>
        <div className=" card shadow rounded-3">
          <i className="text-center fab fa-css3 fa-5x pt-5"></i>
          <div className="card-body">
            <p className="card-text text-center">CSS</p>
          </div>
        </div>
        <div className=" card shadow rounded-3">
          <i className="text-center fab fa-sass fa-5x pt-5"></i>
          <div className="card-body">
            <p className="card-text text-center">Sass</p>
          </div>
        </div>
        <div className=" card shadow rounded-3">
          <i className="text-center fab fa-js-square fa-5x pt-5"></i>
          <div className="card-body">
            <p className="card-text text-center">JavaScript</p>
          </div>
        </div>
        <div className=" card shadow rounded-3">
          <i className="text-center fab fa-react fa-5x pt-5"></i>
          <div className="card-body">
            <p className="card-text text-center">React</p>
          </div>
        </div>
        <div className=" card shadow rounded-3">
          <i className="text-center fab fa-node-js fa-5x pt-5"></i>
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
