import React from "react";

function Contact() {
  return (
    <section className="contact text-center pt-5" id="contacts">
      <div>
        <a href="mailto:robin.skladny40@gmail.com" className="icon">
          <i
            className="blink-2 fa-solid fa-square-envelope fa-2x"
            id="icon-color-1"
          ></i>
        </a>
        <a href="https://github.com/Robynio" target="blank">
          <i
            className="blink-2 fa-brands fa-github fa-2x ps-5"
            id="icon-color-1"
          ></i>
        </a>
        <a href="https://www.linkedin.com/in/robin-skladny/" target="blank">
          <i
            className="blink-2 fa-brands fa-linkedin fa-2x ps-5"
            id="icon-color-1"
          ></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
