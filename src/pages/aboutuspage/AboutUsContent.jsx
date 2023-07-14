import React from "react";
import Footer from "../../components/Footer";

const AboutUsContent = () => {
  return (
    <div className="h-[100%] bg-blue-800 md:bg-yellow-800">
      <div className="flex justify-center">
        <div className="mt-[120px] w-[90%] md:flex md:gap-x-5 lg:max-w-[1240px]">
          <div
            className="w-[100%] flex-col justify-center items-center text-center
           bg-green-800 md:items-start "
          >
            <div className="w-[100%]">
              <h1 className="text-[2rem] md:text-left bg-white">About Us</h1>
            </div>
            <div
              className="w-[60%] m-auto h-[15vh] mt-2 flex justify-center items-center
           bg-red-800 md:w-[100%] md:h-[25vh] md:m-0 md:mt-2 "
            >
              <p>TEXT about us</p>
            </div>
            <div
              className="w-[90%] h-[20vh] mt-2 flex justify-center items-center m-auto bg-yellow-800
          md:bg-blue-800 md:m-0 md:mt-2 md:w-[100%] md:h-[40vh]"
            >
              <p>IMG about us</p>
            </div>
          </div>
          <div className="w-[100%] flex justify-center gap-x-5 mt-10 bg-green-800 md:flex-col md:mt-0 lg:relative ">
            <div className="w-[100%] flex flex-col items-center lg:flex-col lg:w-[49%] lg:absolute lg:left-0 lg:bottom-0">
              <div className="w-[90%] h-[40vh] flex justify-center items-center bg-yellow-800 md:bg-blue-800 md:w-[100%]">
                <p>Product IMG</p>
              </div>
              <div className="w-[90%] mt-2 flex justify-center items-center md:w-[100%] ">
                <div className="w-[100%] h-[25vh] flex items-center justify-center bg-red-800">
                  <p>TEXT About product</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex w-[49%] lg:flex-col absolute right-0 top-0">
              <div className=" w-[100%] ">
                <div className="w-[100%] h-[25vh] flex items-center justify-center bg-red-800">
                  <p>TEXT About product</p>
                </div>
              </div>
              <div className="w-[100%] mt-2 h-[40vh] flex justify-center items-center bg-blue-800 ">
                <p>Product IMG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsContent;
