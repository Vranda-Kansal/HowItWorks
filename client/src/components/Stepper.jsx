import Xarrow from "react-xarrows";
import "animate.css";

const Stepper = ({ index }) => {
  return (
    <div className=" absolute -z-10 ">
      <Xarrow
        start={`step-${index}`}
        end={`step-${index + 1}`}
        endAnchor="auto"
        path="smooth"
        color="#9BBDCF"
        strokeWidth={2}
        dashness={{ strokeLen: 10, nonStrokeLen: 15, animation: 1 }}
        curveness={0.4}
      />
    </div>
  );
};
export default Stepper;
