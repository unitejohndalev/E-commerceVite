import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const ToggleButton = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleClick = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className=" w-[80vw] mt-[20rem] h-[100vh]  ml-0  ">
      <div className="flex ml-auto top-[5rem] w-[100%]  ">
        <button
          className=" bg-deep-orange-50 hover:bg-cyan-200 border-l-0 border-black border-solid border-2  ml-[100%] mb-[-4.5rem]  text-lg items-center p-2 rounded-md"
          onClick={handleClick}
        >
          {isSignUp ? "Sign up" : "Sign in"}
        </button>
      </div>
      {isSignUp ? <Login /> : <Register />}
    </div>
  );
};
export default ToggleButton;
