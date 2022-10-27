import React from "react";

function Contact() {
  return (
    <section className="contact text-center">
      <span>Contact</span>
      <div>
        <a href="mailto:robin_skladny@gmx.de">
          <i
            className="fa-solid fa-square-envelope fa-2x pt-4"
            id="icon-color"
          ></i>
        </a>
        <a href="https://github.com/Robynio" target="blank">
          <i className="fa-brands fa-github fa-2x ps-3" id="icon-color"></i>
        </a>
        <a href="https://github.com/Robynio" target="blank">
          <i className="fa-brands fa-linkedin fa-2x ps-3" id="icon-color"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
