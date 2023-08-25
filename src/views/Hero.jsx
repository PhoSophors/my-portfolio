import React from "react";
import ".././assets/css/heroimg.css";
import hero from "../assets/img/hero.png";

const Hero = () => {
  return (
    <section id="heroimg">
      <div className="hero">
        <div className="layer">
          <img className="hero-img" src={hero} alt="heroimg" />
        </div>

        <div className="content">
          <span id="text" data-value="SOPHORS PHO">
            {" "}
            SOPHORS PHO
          </span>
          <h1>SOFTWARE ENGINEER, FRONT END & BACK END DEVELOPER.</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
