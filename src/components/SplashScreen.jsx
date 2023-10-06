import DisplayLottie from "./DisplayLottie";
import {splashScreen} from "../assets/data/data";
import "../assets/css/splashScreen.css"

export default function SplashScreen() {

  return (
    <div className= "splash-container">
      <div>
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