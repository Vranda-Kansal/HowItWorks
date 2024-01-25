import "animate.css";

const Step = ({ step, index }) => {
  return (
    <div className="flex flex-col items-center justify-center m-2 p-2 animate__animated animate__backInUp">
      <div className=" rounded-full overflow-hidden animate__animated animate__rotateIn  hover:animate-bounce  h-[50px] w-[50px]">
        <img
          src={step.url}
          alt={`Step ${index + 1}`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="m-2 p-2 text-center font-montserrat text-white text-[18px]">
        <div>Step: {index + 1}</div>
        <div>{step.text}</div>
      </div>
    </div>
  );
};
export default Step;
