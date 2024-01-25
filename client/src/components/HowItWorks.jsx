import { AllSteps } from "../utils/constant";
import Step from "./Step";
import "animate.css";
import Stepper from "./Stepper";
import "../App.css";
import { useEffect, useState } from "react";

const HowItWorks = () => {
  const [steps, setSteps] = useState(AllSteps);
  let starting = 0;

  //for adding the step
  const addStep = (newStep) => {
    steps.length >= 1 ? (starting = steps.length - 1) : (starting = 0);
    setSteps((prevSteps) => [...prevSteps, newStep]);
  };

  //for removing the step
  const removeStep = (stepId) => {
    const indexofId = steps.findIndex((step) => step.id === stepId);
    indexofId >= 1 ? (starting = indexofId - 1) : (starting = 0);
    if (steps.length > 1) {
      setSteps(steps.filter((step) => step.id !== stepId));
    }
    console.log(steps);
  };
  useEffect(() => {
    //call the function for adding the step with the newObject
    // addStep({
    //   id: 127,
    //   url: "https://s3-alpha-sig.figma.com/img/cb1e/1f0b/a3180756560ba103ef798823d21dc1ac?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ljp5r7sIPbdpyiOW3hhqJJqZPvMr5nhYIzPUjVePMbrDVo~c-dKBesx3bqFwANP7NLeXWEo6WxRGknlAlzdOvLRBMzzc76cbpF~2Xvrb0n58OEf8lqAXqSsNFfx-IsQv0v9Znx4rhqziJ5i09i29UbFEFZfLPZHeJ5lovKRpC5-vcJqvdERRb5f8DHhLmna31O9KRRd2bnOW2GvbKz1P7i-pCM1VdB5bfYes3P2Ff3Glg9OX-BNoHY4AUd1ORZJDO-h60KVaW6Zsc~7XYt6RDlRxGsfmVrenV94YAdsN~sM~8kYidLz7cMJ-sHz6p~U-V6SEUjbCZfH~dybIVkF6XQ__",
    //   text: "Earn Rewards",
    // });
    // addStep({
    //   id: 128,
    //   url: "https://s3-alpha-sig.figma.com/img/cb1e/1f0b/a3180756560ba103ef798823d21dc1ac?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ljp5r7sIPbdpyiOW3hhqJJqZPvMr5nhYIzPUjVePMbrDVo~c-dKBesx3bqFwANP7NLeXWEo6WxRGknlAlzdOvLRBMzzc76cbpF~2Xvrb0n58OEf8lqAXqSsNFfx-IsQv0v9Znx4rhqziJ5i09i29UbFEFZfLPZHeJ5lovKRpC5-vcJqvdERRb5f8DHhLmna31O9KRRd2bnOW2GvbKz1P7i-pCM1VdB5bfYes3P2Ff3Glg9OX-BNoHY4AUd1ORZJDO-h60KVaW6Zsc~7XYt6RDlRxGsfmVrenV94YAdsN~sM~8kYidLz7cMJ-sHz6p~U-V6SEUjbCZfH~dybIVkF6XQ__",
    //   text: "Earn Rewards",
    // });
    //call the function for removing the Step with particular Id
    // removeStep(128);
  }, []);

  return (
    <div className="flex flex-col flex-wrap justify-center absoute lg:flex-row lg:h-screen lg:overflow-y-hidden animate__animated animate__slideInLeft ">
      {steps &&
        steps.map((step, index) => (
          <div
            id={`step-${index}`}
            className="h-[200px] w-[200px] z-10  p-2 bg-[#714FFF] rounded-full border-2 border-blue-500 shadow-lg shadow-sky-500 mx-auto my-5 lg:my-0 mt-10 hover:cursor-pointer"
          >
            <Step step={step} index={index} />
          </div>
        ))}
      {steps.length > 1 &&
        steps
          .slice(starting, -1)
          .map((step, index) => <Stepper index={index} />)}
    </div>
  );
};

export default HowItWorks;
