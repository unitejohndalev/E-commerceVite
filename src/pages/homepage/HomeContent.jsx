import React from "react";
import Footer from "../../components/Footer";




const HomeContent = () => {

  return (
    <div className="h-[100%] ">
      {/* container */}
      <div className=" flex justify-center mt-[100px] ">
        {/* wrapper container */}
        <div className=" w-[90%] md:max-w-[768px] lg:max-w-[1040px] xl:max-w-[1240px] ">
          {/* HERO SECTION */}
          <div className="flex justify-between w-[100%] h-[100vh] mt-[50px] ">
          {/* TEXT POSITION */}
            <div className="w-[550px] h-[70vh] ">
              <div className=" mt-[150px]">
                <h1 className=" text-[2rem] border-red border-4 font-bold">
                  DISPLAY SOMETHING TO CATCH USER ATTENTION
                </h1>
                <button className="bg-red-800 text-white px-4 py-2 mt-5">
                  Shop now
                </button>
              </div>
            </div>
            {/* CAN EDIT IMG POSITION */}
            <div className="hidden md:flex w-[600px] h-[70vh] relative justify-center items-center">
              {/* FIRST IMAGE */}
              <div className="bg-yellow-800 w-[350px] h-[80%] absolute bottom-0 z-10">
                <img src="" alt="" className="w-[100%] h-[100%]" />
              </div>
              {/* SECOND IMAGE */}
              <div className="hidden lg:flex bg-blue-800 w-[350px] h-[80%] absolute right-0 top-0 z-[9]">
                <img src="" alt="" className="h-[100%] w-[100%]" />
              </div>

              {/* THIRD IMAGE */}
              <div className="hidden lg:flex bg-pink-800 w-[350px] h-[80%] absolute left-0 z-[8]">
                <img src="" alt="" className="h-[100%] w-[100%]" />
              </div>
            </div>
          </div>
          {/* PRODUCT SECTION, CAN EDIT ORDER*/}
          {/* first product section*/}
          <div className="flex justify-center items-center w-[100%] h-[60vh] lg:h-[70vh] bg-red-800 lg:gap-x-10">
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
