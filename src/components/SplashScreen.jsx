import "../assets/css/SplashScreen.css";
import DisplayLottie from "./DisplayLottie";
import {splashScreen} from "../assets/data/data";


export default function SplashScreen() {

  return (
    <div className= "splash-container">
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