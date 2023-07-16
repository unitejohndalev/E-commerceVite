import React from "react";
import Footer from "../../components/Footer";

const AboutUsContent = () => {
  return (
    <div className="h-[100%] ">
      <div className="flex justify-center ">
        <div className="mt-[120px] w-[90%] h-[100%] md:flex md:gap-x-5 lg:max-w-[1240px]">
          <div
            className="w-[100%] h-[100%] flex-col justify-center items-center text-center
 md:items-start "
          >
            <div className="w-[100%]">
              <h1 className="text-[2rem] md:text-left">About Us</h1>
            </div>
            <div
              className="w-[90%] mt-10 m-auto h-[15vh] flex justify-center items-center
         md:w-[90%] md:h-[15vh] md:m-0 md:mt-2"
            >
              <p className="text-justify md:text-[.8rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                at atque hic consectetur nostrum consequuntur repellat quod.
                Officiis ratione enim, ipsa nam explicabo laudantium
                perspiciatis in voluptate id nemo saepe? Quia vitae enim sed
                aspernatur officiis a qui
              </p>
            </div>
            <div
              className="w-[90%] h-[50vh] mt-10 flex justify-center items-center m-auto 
          bg-blue-800 md:m-0 md:mt-5 md:w-[90%] md:h-[40vh]"
            >
              <p>IMG about us</p>
            </div>
          </div>
          <div className="w-[100%] flex justify-center gap-x-5 mt-10  md:flex-col md:mt-0 lg:relative ">
            <div className="w-[100%] flex flex-col items-center lg:flex-col lg:w-[49%] lg:absolute lg:left-0 lg:bottom-0">
              <div className="w-[90%] mb-2 h-[40vh] flex justify-center items-center  md:w-[100%] bg-blue-800">
                <p>Product IMG</p>
              </div>
              <div className="w-[90%] h-[18vh] flex justify-center items-center md:w-[100%] ">
                <div className="w-[100%] h-[25vh] flex items-center justify-center ">
                  <p className="text-justify md:text-[.8rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis, vel nostrum quisquam eveniet facilis vitae atque
                    rerum. Sunt molestiae optio natus nemo exercitationem vel,
                    quasi deserunt, quos minima nihil soluta.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex w-[45%] lg:flex-col absolute right-0 top-0">
              <div className=" w-[100%]  h-[18vh] mb-2 flex justify-center items-center">
                <div className="w-[100%] h-[25vh] flex items-center justify-cente">
                  <p className="text-justify text-[.8rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis, vel nostrum quisquam eveniet facilis vitae atque
                    rerum. Sunt molestiae optio natus nemo exercitationem vel,
                    quasi deserunt, quos minima nihil soluta.
                  </p>
                </div>
              </div>
              <div className="w-[100%] h-[40vh] flex justify-center items-center bg-blue-800 ">
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
