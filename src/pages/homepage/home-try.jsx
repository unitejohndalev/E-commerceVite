import React from "react";
import Footer from "../../components/Footer";
import VideoSection from "../../assets/shoppy.mp4";

//import react-slick
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

//import home data
import data from "../../data/Home.json";

const HomeContent = () => {
  const { homeContents } = data;

  return (
    <div className="h-[100%] ">
      {/* <div className=" flex flex-col bg-cover h-[100vh] w-[100%] mt-[100px]">
        <video
          loop
          autoPlay={true}
          muted
          src={VideoSection}
          type="video/mp4"
          className="w-[100vw] h-[80vh]"
        />
      </div> */}

      <div className=" flex justify-center mt-[100px] ">
        {/* wrapper container */}
        <div className=" w-[90%] md:max-w-[768px] lg:max-w-[1040px] xl:max-w-[1240px] ">
          {/* HERO SECTION */}
          <div className="flex justify-between w-[100%] h-[100vh] mt-[50px] ">
            TEXT POSITION
            <div className="w-[550px] h-[70vh] ">
              <div className=" mt-[150px]">
                <h1 className=" text-[2rem] border-red border-4 font-bold">
                  A TEXT TO LET USER KNOW WHAT TYPE OF WEBSITE THIS IS
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
          <div className="flex justify-center items-center w-[100%] lg:gap-x-5 relative mb-10 ">
            <div className=" flex flex-col justify-center items-center md:w-[768px] lg:w-[1024px]  font-medium text-[2rem] ">
              {homeContents.map((content, id) => {
                const { fTitle, sTitle, fInfo, sInfo, fImg, sImg, btnText } =
                  content;
                return (
                  <div
                    key={id}
                    className="relative flex w-[100%] md:gap-x-5 lg:w-[80%] justify-between  h-[80vh] mb-[100px]"
                  >
                    <div className=" flex flex-col justify-center items-center w-[100%] lg:w-[80%]">
                      <img className="h-[100%] w-[400px]" src={fImg} alt="" />
                      <div className="absolute bottom-5 flex flex-col items-center">
                        <h1 className="text-[2rem] mb-5">{fTitle}</h1>
                        <p className="text-[.9rem] mb-5">{fInfo}</p>
                        <button className="bg-red-800 text-white px-1 text-[1.3rem] ">
                          {btnText}
                        </button>
                      </div>
                    </div>
                    <div className="hidden h-[100%] font-medium w-[100%] lg:w-[80%] text-[2rem] text-center md:flex  md:justify-center md:items-center ">
                      <img className="h-[100%] w-[400px]" src={sImg} alt="" />
                      <div className="absolute bottom-5 flex flex-col items-center">
                        <h1 className="text-[2rem] mb-5">{sTitle}</h1>
                        <p className="text-[.9rem] mb-5">{sInfo}</p>
                        <button className="bg-red-800 text-white px-1 text-[1.3rem] ">
                          {btnText}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeContent;
