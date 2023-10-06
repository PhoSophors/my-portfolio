
import { useState, useEffect } from "react";
import AnimatCursor from "../components/AnimatCursor"; // im oport AnimatedCursor from reactAnimatCursor
import Project from "../pages/Project";
import HeroImg from "../pages/Hero";
import Scrolltop from "../components/ScrollTop";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import Skill from "../pages/Skill";
import { StyleProvider } from "../contexts/StyleContext";
import SplashScreen from "../components/SplashScreen";
import { splashScreen } from "../assets/data/data";
// import { useLocalStorage } from "../hook/useLocalStorage";
import Navbar from "../components/Navbar";



const Home = () => {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  // loading
  // const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  // const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  // const changeTheme = () => {
  //   setIsDark(!isDark);
  // };

  return (
    <div>
      <StyleProvider>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <AnimatCursor />

            {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}
            <Navbar />
            <HeroImg />
            <Skill />
            <Project />
            <Contact />
            <Footer />
            <Scrolltop />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Home;
