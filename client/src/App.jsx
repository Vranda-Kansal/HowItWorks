import { useState } from "react";
import HowItWorks from "./components/HowItWorks";
import "animate.css";

function App() {
  const [toggleMode, setToggleMode] = useState(true);

  const handleToggle = () => {
    setToggleMode(!toggleMode);
  };
  return (
    <div className={`${toggleMode && "dark"}`}>
      <div className="dark:bg-neutral-900">
        <div className="flex dark:bg-neutral-900 justify-center items-center animate__animated animate__slideInLeft">
          <div className=" dark:text-sky-600 text-black font-montserrat lg:font-[700] lg:text-[50px] text-[30px] top-[968px] m-5 text-center  sm:font-[600] sm:text-4xl">
            How It Works
          </div>
          <button
            className="w-10 h-10 bottom-10 right-10 p-1 border-2 border-black bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
            onClick={handleToggle}
          >
            {toggleMode ? "LHT" : "DRK"}
          </button>
        </div>
        <HowItWorks />
      </div>
    </div>
  );
}

export default App;
