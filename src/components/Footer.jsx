import React from "react";

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
  return (
    // change footer background color
    <footer className="bg-primary relative p-10 h-[60vh] border-solid border-2 border-yellow-800">
      <div
        className="max-w-[1240px] h-[35vh] m-auto flex justify-center
       border-solid border-2 border-blue-800 mb-10"
      >
        <div className=" border-solid border-2 border-red-800 w-[100%] flex justify-center md:justify-between">
          <div className="w-[300px] h-[100%] border-solid border-2 border-yellow-800"></div>
          <div className="hidden md:flex w-[300px] h-[100%] border-solid border-2 border-yellow-800"></div>
          <div className="hidden lg:flex w-[300px] h-[100%] border-solid border-2 border-yellow-800"></div>
        </div>
        <div
          className="text-white flex justify-center absolute bottom-2 w-[80%]
        h-[15vh] border-solid border-2 border-red-800"
        >
          {/* change icon color */}
          <div className="flex justify-evenly text-[1.2rem] md:text-[1rem] w-[420px] cursor-pointer">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaPinterest />
          </div>
          <div className="flex absolute bottom-0">
            <div className="">
              <Link to={"/"}>
                <img className="w-auto h-14 " src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="">
              <p className="font-extralight text-[.8rem] mt-9">
                PHP &copy; 2023 ExpressShop. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
