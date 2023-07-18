import React, { useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

//import react icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

//import logo
import Logo from "./img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showShop, setShowShop] = useState();
  const showToggle = () => {
    setShowShop(prev => ! prev);
    setShowHelp(false)
    setAboutUs(false)
  };
  const [aboutUs, setAboutUs] = useState()
  const aboutToggle = () => {
    setAboutUs(prev => !prev)
    setShowShop(false)
    setShowHelp(false)
  }

  const [showHelp, setShowHelp] = useState()
  const helpToggle = () => {
    setShowHelp(prev => !prev)
    setShowShop(false)
    setAboutUs(false)
  }
  return (
    // change footer background color
    <footer className="bg-primary relative p-10 h-[60vh] lg:h-[50vh] mt-10">
      <div className=" lg:w-[100%] xl:w-[1234px] h-[25vh] m-auto flex justify-center -mt-8 ">
        <div
          className="w-[100%] flex flex-col justify-center lg:w-[100%] xl:w-[1234px] lg:flex-row relative lg:justify-between
       "
        >
          <div className="relative h-[100%] flex items-center cursor-pointer">
            <div
              className="w-[100%] flex justify-between items-center px-2 py-1 rounded-sm bg-white
              lg:hidden"
              onClick={showToggle}
            >
              <p className="">Shop</p>
              {showShop === false ? (
                <div className=" text-[2rem] ">
                  <VscChevronDown />
                </div>
              ) : (
                <div className=" text-[2rem] ">
                  <VscChevronUp />
                </div>
              )}
            </div>

            <div className="hidden lg:flex ">
              <div className=" text-white lg:w-[100%] flex justify-between absolute top-0 ">
                <p className="text-[1.3rem] font-medium">Shop</p>
                <div className="flex flex-col gap-y-1 mt-2 absolute left-0 top-[30px]">
                  <div className="w-[50px]">
                    <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                      Hats
                    </p>
                  </div>
                  <div className="w-[50px]  ">
                    <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                      Cloths
                    </p>
                  </div>
                  <div className="w-[50px] ">
                    <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                      Shoes
                    </p>
                  </div>
                  <div className="w-[50px]  ">
                    <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                      Bags
                    </p>
                  </div>
                  <div className="w-[50px]">
                    <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                      Accessories
                    </p>
                  </div>
                </div>
                <div className="hidden lg:flex absolute left-[270px] w-[300px]">
                  <p className="text-[1.3rem] font-medium">About Us</p>
                  <div className="flex flex-col gap-y-1 mt-2 absolute top-[30px]">
                    <div className="w-[50px]">
                      <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                        News
                      </p>
                    </div>
                    <div className="w-[50px]  ">
                      <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                        Careers
                      </p>
                    </div>
                    <div className="w-[50px] ">
                      <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                        Investors
                      </p>
                    </div>
                    <div className="w-[50px]  ">
                      <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                        Purpose
                      </p>
                    </div>
                    <div className="w-[50px]">
                      <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                        Sustainability
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:flex absolute left-[600px] w-[200px]">
                  <p className="text-[1.3rem] font-medium">Get Help</p>
                  <div className="flex flex-col gap-y-1 mt-2 absolute top-[30px]">
                    <div className="w-[150px]">
                      <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                        Order Status
                      </p>
                    </div>
                    <div className="w-[150px]  ">
                      <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                        Shipping and Delivery
                      </p>
                    </div>
                    <div className="w-[50px] ">
                      <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                        Returns
                      </p>
                    </div>
                    <div className="w-[150px]  ">
                      <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                        Order Cancellation
                      </p>
                    </div>
                    <div className="w-[150px]">
                      <p className="font-medium text-[.8rem] text-white/60 hover:text-white">
                        Contact Us
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex lg:flex-col lg:absolute lg:left-[900px] lg:gap-y-2 xl:flex-row xl:justify-evenly text-[1.5rem] lg:w-[100%] xl:w-[380px] cursor-pointer">
                  <FaFacebookF className="hover:text-white/50 " />
                  <FaTwitter className="hover:text-white/50 " />
                  <FaInstagram className="hover:text-white/50 " />
                  <FaYoutube className="hover:text-white/50 " />
                  <FaPinterest className="hover:text-white/50 " />
                </div>
              </div>
            </div>

            {showShop && (
              <div className="w-[100%] absolute top-[32px] flex flex-col gap-y-1 z-20 bg-primary mt-5 lg:hidden">
                <div className=" p-2 bg-white rounded-sm hover:ml-2 hover:bg-white/80 active:bg-white">
                  Hats
                </div>
                <div className=" p-2 bg-white rounded-sm hover:ml-2 hover:bg-white/80 active:bg-white">
                  Cloths
                </div>
                <div className=" p-2 bg-white rounded-sm hover:ml-2 hover:bg-white/80 active:bg-white">
                  Shoes
                </div>
                <div className=" p-2 bg-white rounded-sm hover:ml-2 hover:bg-white/80 active:bg-white">
                  Bags
                </div>
                <div className=" p-2 bg-white rounded-sm hover:ml-2 hover:bg-white/80 active:bg-white">
                  Accessories
                </div>
              </div>
            )}
          </div>
     
            <div
              className="w-[100%] cursor-pointer flex justify-between items-center px-2 py-1 rounded-sm bg-white
              lg:hidden"
              onClick={aboutToggle}
            >
              <p className="">About Us</p>
              {aboutUs === false ? (
                <div className=" text-[2rem] ">
                  <VscChevronDown />
                </div>
              ) : (
                <div className=" text-[2rem] ">
                  <VscChevronUp />
                </div>
              )}
            </div>
     
          {aboutUs && (
            <div className="w-[100%] absolute top-[90px] flex flex-col gap-y-1 z-20 bg-primary mt-2 cursor-pointer lg:hidden">
              <div className=" p-2 bg-white rounded-sm hover:ml-2 hover:bg-white/80 active:bg-white">
                News
              </div>
              <div className=" p-2 bg-white rounded-sm hover:ml-2 hover:bg-white/80 active:bg-white">
                Careers
              </div>
       
            </div>
          )}
       <div className="h-[100%] flex items-center cursor-pointer relative w-[100%] lg:hidden">
            <div
              className="w-[100%] flex justify-between items-center px-2 py-1 rounded-sm bg-white
              lg:hidden"
              onClick={helpToggle}
            >
              <p className="">Get Help</p>
              {showHelp === false ? (
                <div className=" text-[2rem] ">
                  <VscChevronDown />
                </div>
              ) : (
                <div className=" text-[2rem] ">
                  <VscChevronUp />
                </div>
              )}
            </div>
          </div>
          {showHelp && (
            <div className="w-[100%] absolute top-[133px] flex flex-col gap-y-1 z-20 bg-primary mt-2 cursor-pointer lg:hidden">
              <div className=" p-2 bg-white rounded-sm hover:ml-2 hover:bg-white/80 active:bg-white">
                Order Status
              </div>
              <div className=" p-2 bg-white rounded-sm hover:ml-2 hover:bg-white/80 active:bg-white">
                Shipping and Delivery
              </div>
          
              <div className=" p-2 bg-white rounded-sm hover:ml-2 hover:bg-white/80 active:bg-white">
                Contact Us
              </div>
            </div>
          )}
        </div>
        <div
          className="text-white flex flex-col justify-center items-center absolute bottom-2 w-[90%] m-auto
        h-[25vh]"
        >
          <div className="h-[100%] flex flex-col items-center justify-between mb-[80px] lg:mb-0">
            {/* change icon color */}
            <div className="flex justify-evenly text-[1.2rem] md:text-[1rem] w-[100%] cursor-pointer lg:hidden">
              <FaFacebookF className="hover:text-black " />
              <FaTwitter className="hover:text-black " />
              <FaInstagram className="hover:text-black " />
              <FaYoutube className="hover:text-black " />
              <FaPinterest className="hover:text-black " />
            </div>
            <div className="w-[90%] mt-2 lg:w-[500px] lg:mt-10">
              <p className="text-[.7rem] text-center font-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Necessitatibus error optio nihil et doloribus eveniet rerum sed
                quia sint praesentium fuga animi, dolor ad eos non deleniti vel
                quasi possimus!
              </p>
            </div>
            <div className="flex items-center justify-center w-[100%] ">
              <div className="">
                <Link to={"/"}>
                  <img className="w-auto h-14 " src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="">
                <p className="font-extralight text-[.8rem] mt-9">
                  PH &copy; 2023 ExpressShop. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
