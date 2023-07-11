import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary relative p-10 border-solid border-2 border-yellow-800">
      <div className="max-w-[1240px] h-[50vh] m-auto flex justify-center border-solid border-2 border-blue-800 mb-10">
        <div className=" border-solid border-2 border-red-800 w-[100%] flex justify-center md:justify-between">
          <div className="w-[300px] h-[100%] border-solid border-2 border-yellow-800"></div>
          <div className="hidden md:flex w-[300px] h-[100%] border-solid border-2 border-yellow-800"></div>
          <div className="hidden lg:flex w-[300px] h-[100%] border-solid border-2 border-yellow-800"></div>
        </div>
        <div className="text-white text-center absolute bottom-2 w-[80%] border-solid border-2 border-red-800">
          <p className="">
            Copyright &copy; Ecommerce Shop 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
