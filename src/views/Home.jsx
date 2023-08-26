import React from "react";
import "../assets/css/homeStyle.css";
import Project from "../views/Project";
import HeroImg from "./Hero";
import Scrolltop from "../components/ScrollTop";
import Expertise from "./Expertise";
import Contact from "./Contact";
import Footer from "../components/Footer/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import '../assets/css/CursorCuztomize.css';



const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  // set cursor pointer customize 
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
  });
  
  document.addEventListener('click', e => {
      cursor.classList.add("expand");
      setTimeout(() => {
          cursor.classList.remove("expand");
      }, 500);
  });
  //

  return (
    <>
     <div class="cursor"/>
     
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
