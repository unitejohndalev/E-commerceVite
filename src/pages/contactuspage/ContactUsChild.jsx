/* eslint-disable react/no-unescaped-entities */
import React from "react";


import Footer from "../../components/Footer";

const ContactUsChild = () => {
  return (
    <div className="h-[100%] font-montserrat flex flex-col">
      <div className="flex justify-center items-center ">
        <div className="h-[100%]  mt-[100px] flex flex-col items-center lg:w-[1024px] xl:w-[1234px]">
          <div className="py-[20px] w-[100%] flex justify-center items-center text-center font-medium">
            <h1 className="text-[1.8rem] lg:text-[2.5rem] font-semibold leading-tight w-[90%]">
              WE'D LOVE TO HEAR FROM YOU
            </h1>
          </div>
          <div className="w-[100%] lg:w-[90%] relative flex flex-col items-center lg:flex-row lg:gap-x-5 h-[100%]">
            <div className="p-2 pb-5 flex flex-col w-[90%] shadow-sm rounded-sm bg-white lg:mt-10 lg:h-[50vh] relative">
              <div className="w-[100%] text-center py-5">
                <p className="font-semibold text-[.9rem] lg:text-[1.2rem]">
                  I WANT TO KNOW WHERE MY ORDER IS
                </p>
              </div>
              <div className="w-[100%] pb-5 leading-tight ">
                <p className="text-[.9rem] lg:text-[1.2rem]">
                  Enter the order number found in the order confirmation email
                </p>
              </div>
              <div className="flex flex-col lg:mt-[20px]">
                <p className="mb-2 lg:text-[1.2rem]">Order no*</p>
                <input
                  className="py-5 mb-[30px] placeholder:pl-2 bg-primary/10 placeholder:text-black"
                  type="text"
                  placeholder="e.g 3123567890"
                />
                <div className="w-[100%] flex items-center justify-center">
                  <button className="bg-primary/60 text-white font-semibold py-3 px-12 lg:text-[1.2rem] lg:absolute lg:bottom-[20px]">
                    Track my order
                  </button>
                </div>
              </div>
            </div>
            <div className="p-2 flex flex-col mt-[100px] pb-5 w-[90%] shadow-sm rounded-sm bg-white lg:mt-10 lg:h-[50vh] relative">
              <div className="w-[100%] text-center py-5">
                <p className="font-semibold text-[.9rem] lg:text-[1.2rem]">
                  I WANT TO RETURN SOMETHNG
                </p>
              </div>
              <div className="w-[100%] pb-5 leading-tight">
                <p className="text-[.9rem] lg:text-[1.2rem]">
                  Register returns easily online. All you need is the order
                  number found in the order confirmation email, and the email
                  address used when placing your order.
                </p>
              </div>
              <div className="w-[100%] flex items-center justify-center lg:mt-[100px]">
                <button className="bg-primary/60 text-white font-semibold py-3 px-12 lg:text-[1.2rem] lg:absolute lg:bottom-[20px]">
                  Register a return
                </button>
              </div>
            </div>
          </div>

          <div className="p-2 flex flex-col mt-[100px] w-[90%] shadow-sm rounded-sm lg:w-[1024px]">
            <div className="w-[100%] text-center">
              <p className="font-semibold text-[.9rem] lg:text-[1.2rem]">
                CALL US
              </p>
              <div className="w-[100%] pb-5 leading-tight">
                <p className="text-[.9rem] lg:text-[1.2rem]">855-SHPY-SHOP</p>
                <p className="text-[.9rem] lg:text-[1.2rem]">
                  855-***-**** (Toll-free)
                </p>
              </div>
            </div>
            <div className="w-[100%] text-center">
              <p className="font-semibold text-[.9rem] lg:text-[1.2rem]">
                OPENING HOURS
              </p>
              <div className="w-[100%] pb-5 leading-tight">
                <p className="text-[.9rem] lg:text-[1.2rem]">
                  We offer 24/7 customer service
                </p>
                <p className="text-[.9rem] lg:text-[1.2rem]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  a harum quos quo ducimus veritatis.
                </p>
              </div>
            </div>
            <div className="w-[100%] text-center">
              <p className="font-semibold text-[.9rem] lg:text-[1.2rem]">
                LET'S CONNECT ON SOCIAL MEDIA
              </p>
              <div className="w-[100%] pb-5 leading-tight flex flex-col">
                <a className="text-[.9rem] lg:text-[1.2rem]">Facebook</a>
                <a className="text-[.9rem] lg:text-[1.2rem]">Twitter</a>
                <a className="text-[.9rem] lg:text-[1.2rem]">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsChild;
