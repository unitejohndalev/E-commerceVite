import React from "react";
import Footer from "../../components/Footer";

const HomeContent = () => {
  return (
    <div className="h-[100%] bg-green-800">
      {/* container */}
      <div className=" flex justify-center mt-[100px] ">
        {/* wrapper container */}
        <div className="w-[90%] md:max-w-[768px] lg:max-w-[1040px]">
          {/* hero section */}
          <div className="flex justify-center items-center w-[100%] h-[70vh] lg:h-[80vh] bg-red-800">
            <h1 className="font-medium text-[2rem] text-center">
              DISPLAY SOMETHING TO CATCH USER ATTENTION
            </h1>
          </div>
          {/* first product section*/}
          <div className="flex justify-center items-center w-[100%] h-[60vh] lg:h-[70vh] mt-10 bg-red-800 lg:gap-x-10">
            <div className=" flex justify-center items-center h-[100%] w-[100%] font-medium text-[2rem] lg:w-[49%] bg-yellow-800">
              <div>PRODUCT IMG</div>
            </div>
            <div className="hidden h-[100%] w-[100%] font-medium text-[2rem] text-center lg:flex lg:w-[49%] lg:justify-center lg:items-center bg-yellow-800">
              <div>PRODUCT IMG</div>
            </div>
          </div>
          {/* second product seciton*/}
          <div className="flex justify-center items-center w-[100%] h-[60vh] lg:h-[70vh] mt-10 bg-red-800 lg:gap-x-10">
            <div className=" flex justify-center items-center h-[100%] w-[100%] font-medium text-[2rem] lg:w-[49%] bg-yellow-800">
              <div>PRODUCT IMG</div>
            </div>
            <div className="hidden h-[100%] w-[100%] font-medium text-[2rem] text-center lg:flex lg:w-[49%] lg:justify-center lg:items-center bg-yellow-800">
              <div>PRODUCT IMG</div>
            </div>
          </div>
          {/* third product section*/}
          <div className="flex justify-center items-center w-[100%] h-[60vh] lg:h-[70vh] mt-10 bg-red-800 lg:gap-x-10">
            <div className=" flex justify-center items-center h-[100%] w-[100%] font-medium text-[2rem] lg:w-[49%] bg-yellow-800">
              <div>PRODUCT IMG</div>
            </div>
            <div className="hidden h-[100%] w-[100%] font-medium text-[2rem] text-center lg:flex lg:w-[49%] lg:justify-center lg:items-center bg-yellow-800">
              <div>PRODUCT IMG</div>
            </div>
          </div>
          {/* fourth product section*/}
          <div className="flex justify-center items-center w-[100%] h-[60vh] lg:h-[70vh] mt-10 bg-red-800 lg:gap-x-10">
            <div className=" flex justify-center items-center h-[100%] w-[100%] font-medium text-[2rem] lg:w-[49%] bg-yellow-800">
              <div>PRODUCT IMG</div>
            </div>
            <div className="hidden h-[100%] w-[100%] font-medium text-[2rem] text-center lg:flex lg:w-[49%] lg:justify-center lg:items-center bg-yellow-800">
              <div>PRODUCT IMG</div>
            </div>
          </div>
          {/* fifth product section*/}
          <div className="flex justify-center items-center w-[100%] h-[60vh] lg:h-[70vh] mt-10 bg-red-800 lg:gap-x-10">
            <div className=" flex justify-center items-center h-[100%] w-[100%] font-medium text-[2rem] lg:w-[49%] bg-yellow-800">
              <div>PRODUCT IMG</div>
            </div>
            <div className="hidden h-[100%] w-[100%] font-medium text-[2rem] text-center lg:flex lg:w-[49%] lg:justify-center lg:items-center bg-yellow-800">
              <div>PRODUCT IMG</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeContent;
