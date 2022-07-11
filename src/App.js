import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
