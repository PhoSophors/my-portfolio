import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import AnimatCursor from "../components/AnimatCursor"; // im oport AnimatedCursor from reactAnimatCursor
import Project from "../views/Project";
import HeroImg from "./Hero";
import Scrolltop from "../components/ScrollTop";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Skill from "./Skill";


const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
     <AnimatCursor/>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <HeroImg />
      <Skill />
      <Project />
      <Contact />
      <Footer />
      <Scrolltop />
    </>
  );
};

export default Home;
