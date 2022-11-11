import React from "react";

function Contact() {
  return (
    <section className="contact text-center pt-3" id="contacts">
      <div>
        <a href="mailto:robin_skladny@gmx.de">
          <i className="fa-solid fa-square-envelope fa-2x" id="icon-color"></i>
        </a>
        <a href="https://github.com/Robynio" target="blank">
          <i className="fa-brands fa-github fa-2x ps-5" id="icon-color"></i>
        </a>
        <a href="https://github.com/Robynio" target="blank">
          <i className="fa-brands fa-linkedin fa-2x ps-5" id="icon-color"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
