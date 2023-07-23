import React from "react";
import Footer from "../../components/Footer";

//import aboutUs img
import shoppingBags from "../../components/img/aboutus_img/shopping_Bags.svg"
import shoppingOnline from "../../components/img/aboutus_img/online_Shopping.svg"
import shoppingPurchase from "../../components/img/aboutus_img/successful_purchase.svg"

const AboutUsContent = () => {
  return (
    <div className="h-[100%] font-montserrat">
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
              className="w-[90%] mt-10 m-auto flex justify-center items-center
         md:w-[90%] md:m-0 md:mt-2"
            >
              <p className="text-justify md:text-[.9rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                at atque hic consectetur nostrum consequuntur repellat quod.
                Officiis ratione enim, ipsa nam explicabo laudantium
                perspiciatis in voluptate id nemo saepe? Quia vitae enim sed
                aspernatur officiis a qui
              </p>
            </div>
            <div
              className="w-[90%] h-[50vh] mt-10 mb-10 flex justify-center items-center m-auto 
          md:m-0 md:mt-5 md:w-[90%] md:h-[40vh] lg:h-[100%]"
            >
              <img src={shoppingBags} alt="shoppingBags" />
            </div>
          </div>
          <div className="w-[100%] flex justify-center gap-x-5  md:flex-col md:mt-0 lg:relative ">
            <div className="w-[100%] flex flex-col items-center lg:flex-col lg:w-[48%] lg:absolute lg:left-0 lg:bottom-0 ">
              <div className="w-[90%] h-[40vh] flex justify-center items-center  md:w-[100%] ">
                <img src={shoppingOnline} alt="shoppingBags" />
              </div>
              <div className="w-[90%] flex justify-center items-center md:w-[100%] mt-5">
                <div className="w-[100%] flex items-center justify-center ">
                  <p className="text-justify md:text-[.9rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis, vel nostrum quisquam eveniet facilis vitae atque
                    rerum. Sunt molestiae optio natus nemo exercitationem vel,
                    quasi deserunt, quos minima nihil soluta.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex w-[48%] lg:flex-col absolute right-0 bottom-0 ">
              <div className="w-[90%] flex justify-center items-center md:w-[100%]">
                <div className="w-[100%] h-[100%] flex items-center justify-center">
                  <p className="text-justify md:text-[.9rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis, vel nostrum quisquam eveniet facilis vitae atque
                    rerum. Sunt molestiae optio natus nemo exercitationem vel,
                    quasi deserunt, quos minima nihil soluta.
                  </p>
                </div>
              </div>
              <div className="w-[100%] h-[40vh] flex justify-center items-center  mt-5">
                <img src={shoppingPurchase} alt="shoppingBags" />
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
