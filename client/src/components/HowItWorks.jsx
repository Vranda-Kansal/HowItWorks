import { AllSteps } from "../utils/constant";
import Step from "./Step";
import "animate.css";
import Stepper from "./Stepper";
import "../App.css";

const HowItWorks = () => {
  return (
    <div className="flex flex-col justify-center absoute lg:flex-row lg:h-screen lg:overflow-y-hidden">
      {AllSteps.map((step, index) => (
        <div
          key={index}
          id={`step-${index}`}
          className="h-[200px] w-[200px] z-10  p-2 bg-[#714FFF] rounded-full border-2 border-blue-500 shadow-lg shadow-sky-500 mx-auto my-5 animate__animated animate__slideInLeft lg:my-0 mt-10 hover:cursor-pointer"
        >
          <Step step={step} index={index} />
          {AllSteps.length > 1 && index < AllSteps.length - 1 && (
            <Stepper index={index} />
          )}
        </div>
      ))}
    </div>
  );
};

export default HowItWorks;
