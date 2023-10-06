import {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "./loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const animationData = this.props.animationData;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
        />
      </Suspense>
    );
  }
}