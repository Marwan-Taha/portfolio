import React from "react";
import Marquee from "react-fast-marquee";

import TechStack from "./TechStack";

import "./hero.css"

export default function () {

  function handleClick() {
    const aboutSection = document.getElementById("About"); // Assuming your Hero section has an ID
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" }); // Scroll to Hero section
    }
  }

  
  return (
    <section id="Hero" className="hero-section">
      <div className="hero">
        <div className="hero-content-container">
          <h1>Hi, <span className="small">I'm</span> Marwan,</h1>
          <h2 className="nickname-container"><span className="aka">a.k.a</span> <span className="nickname">CHEERS.</span></h2>
          <h3 className="job-title">Fullstack Web Developer</h3>
          <p style={{
            fontSize: "1.1rem",
            fontWeight: "200",
            alignSelf: "flex-start",
          }}>Tech stack</p>
          <Marquee speed={20} autoFill>
            <TechStack />
          </Marquee>

        </div>

      </div>
      <a onClick={handleClick}>
        <div className="mouse-button">
          <div className="scroll-wheel"></div>
        </div>
      </a>

    </section>
  );
}
