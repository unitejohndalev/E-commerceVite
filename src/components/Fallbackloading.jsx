import React from "react";

//import spinner from material tailwind
import { Spinner } from "@material-tailwind/react";

const Fallbackloading = () => {
  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center">
    <div>
      <Spinner />;
    </div>
    </div>
  );
};

export default Fallbackloading;
