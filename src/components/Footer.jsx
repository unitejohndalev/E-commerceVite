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
  const [showShop, setShowShop] = useState(false);
  const showToggle = () => {
    setShowShop((prev) => !prev);
  };
  return (
    // change footer background color
    <footer className="bg-primary relative p-10 h-[60vh] mt-10">
      <div className="lg:w-[1240px] h-[25vh] m-auto flex justify-center -mt-8 ">
        <div
          className="w-[100%] flex flex-col justify-center lg:w-[1240px] lg:flex-row relative
       "
        >
          <div className="relative h-[100%] flex items-center cursor-pointer lg:absolute lg:left-0">
            <div
              className="w-[100%] flex justify-between items-center px-2 py-1 rounded-sm bg-white
              lg:w-[300px] lg:absolute lg:top-0 z-10"
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

            {showShop && (
              <div className="w-[100%] absolute top-[55px] flex flex-col gap-y-2 z-20 bg-primary mt-2 lg:w-[300px] lg:top-[40px]">
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
          <div className="h-[100%] flex items-center cursor-pointer relative w-[100%]">
            <div className="w-[100%] px-2 py-2 rounded-sm bg-white hover:bg-white/80 active:bg-white lg:w-[300px] lg:absolute lg:top-0 lg:-right-[150px]">
              <p className="">About Us</p>
            </div>
          </div>
          <div className="h-[100%] flex items-center cursor-pointer relative w-[100%]">
            <div className="w-[100%] px-2 py-2 rounded-sm bg-white hover:bg-white/80 active:bg-white lg:w-[300px] lg:absolute lg:top-0 lg:right-0">
              <p className="">Contact Us</p>
            </div>
          </div>
        </div>
        <div
          className="text-white flex flex-col justify-center items-center absolute bottom-2 w-[90%] m-auto
        h-[25vh]"
        >
          <div className="h-[100%] flex flex-col items-center justify-between">
            {/* change icon color */}
            <div className="flex justify-evenly text-[1.2rem] md:text-[1rem] w-[420px] cursor-pointer ">
              <FaFacebookF className="hover:text-black " />
              <FaTwitter className="hover:text-black " />
              <FaInstagram className="hover:text-black " />
              <FaYoutube className="hover:text-black " />
              <FaPinterest className="hover:text-black " />
            </div>
            <div className="w-[90%]">
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
