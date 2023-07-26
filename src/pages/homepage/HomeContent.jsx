import React, { useEffect, useRef } from "react";
import Footer from "../../components/Footer";
import VideoSection from "../../assets/shoppy.mp4";

//image import
import Shoes from "../../components/img/shoes.png";
import Bags from "../../components/img/herschel.jpg";
import Hats from "../../components/img/hats.jpg";

//import react-slick
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

//import home data
import data from "../../data/Home.json";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../styles/animation.css";
import { duration } from "@mui/material";

const HomeContent = () => {
  const { homeContents } = data;

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

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
          <div className="flex justify-center items-center w-[100%]  relative mb-10 ">
            <div className=" flex flex-col justify-center items-center md:w-[768px] lg:w-[1024px]  font-medium text-[2rem] "></div>
          </div>
          <div className="h-screen ">
            <div className="bg-shoes bg-cover">
              <div className="p-10 mt-10" data-aos="fade-right">
                <h2 className=" mt-[20rem] mb-[1rem] text-white font-bold text-5xl justify-center">
                  All brands of shoes are available.
                </h2>
                <br />
                <p
                  className="text-white text-3xl text-justify "
                  data-aos="fade-left"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  quia repellendus quo eligendi eos consectetur nam? Placeat,
                  consequatur quae aperiam numquam id ea nobis dolorem quia
                  omnis ex ipsum iure.
                </p>
              </div>
            </div>
          </div>
          <div className="h-screen">
            <div className="bg-bags bg-cover">
              <div className="p-10 mt-10" data-aos="fade-right">
                <h2 className=" mt-[20rem] mb-[1rem] text-white font-bold text-5xl justify-center">
                  Affordable new bag brands.
                </h2>
                <br />
                <p
                  className="text-white text-3xl text-justify "
                  data-aos="fade-left"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  quia repellendus quo eligendi eos consectetur nam? Placeat,
                  consequatur quae aperiam numquam id ea nobis dolorem quia
                  omnis ex ipsum iure.
                </p>
              </div>
            </div>
          </div>
          <div className="h-screen">
            <div className="bg-hat bg-cover">
              <div className="p-10 mt-10" data-aos="fade-right">
                <h2 className=" mt-[20rem] mb-[1rem] text-white font-bold text-5xl justify-center">
                  Hats available with new styles.
                </h2>
                <br />
                <p
                  className="text-white text-3xl justify-end text-justify "
                  data-aos="fade-left"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                  quia repellendus quo eligendi eos consectetur nam? Placeat,
                  consequatur quae aperiam numquam id ea nobis dolorem quia
                  omnis ex ipsum iure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeContent;
