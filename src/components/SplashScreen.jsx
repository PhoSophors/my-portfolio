import {useContext} from "react";
import "../assets/css/SplashScreen.css";
import DisplayLottie from "./DisplayLottie";
import {splashScreen} from "../assets/data/data";
import StyleContext from "../contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">
          <>Pho Sophors</>
        </span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}