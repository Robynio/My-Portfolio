import React from "react";

function Test() {
  return (
    <>
      <div id="first">This is the FIRST div</div>
      <div id="second">This is the SECOND div</div>
      <div id="third">This is the THIRD div</div>
      <button id="toggle">Hide THIRD div</button>
    </>
  );
}

const targetDiv = document.getElementById("third");
const btn = document.getElementById("toggle");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};

export default Test;
