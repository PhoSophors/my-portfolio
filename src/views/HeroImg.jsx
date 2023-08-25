import React from "react";
import ".././assets/css/heroimg.css";
import hero from '../assets/img/hero.png';

const HeroImg = () => {
  return (
    <section id="heroimg">
      <div className="hero">
        <div className="layer">
          <img
            className="hero-img"
            src={hero}
            alt="heroimg"
          />
        </div>

        <div className="content">
          <span id="text" data-value="SOPHORS PHO">
            {" "}
            SOPHORS PHO
          </span>
          <h1>SOFTWARE ENGINEER, FRONT END & BACK END DEVELOPER.</h1>
          <div>
            {/* <Link to="/project" className="btn">projects</Link>
              <Link to="/contact" className="btn btn-alt">contact</Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImg;
