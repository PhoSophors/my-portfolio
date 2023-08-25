import React from "react";
import "../assets/css/homeStyle.css";
import Project from "../views/Project";
import HeroImg from "./Hero";
import Scrolltop from "../components/ScrollTop";
import Expertise from "./Expertise";
import Contact from "./Contact";
import Footer from "../components/Footer/Footer";

import { motion, useScroll, useSpring } from "framer-motion";
import Background from "../components/Background/Backround";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  //

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <HeroImg />
      <Expertise />
      <Project />
      <Contact />
      <Footer />
      <Scrolltop />
    </>
  );
};

export default Home;
