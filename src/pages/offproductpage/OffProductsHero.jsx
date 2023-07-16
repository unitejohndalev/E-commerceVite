import React from "react";

import AllOffProductsAutoplayImage from "./AllOffProductsAutoplayImage"

const OffProductsHero = () => {

  return (
    <div className="heroParent-container ">
      <div className="secondHeroParent-container">
        <div
          className=" h-[80vh] md:w-[800px] lg:w-[1240px] flex justify-center items-center md:justify-end 
        relative"
        >
          <div className=" relative md:flex md:justify-center md:items-center h-[65vh] w-[400px] md:w-[800px] lg:w-[1240px]">
            <div className="textHero-container mt-5">
              <div className="secondTextHero-container ">
                <p>New styles just in!</p>
                <h1 className="text-[2rem] font-medium">
                  ADD your best sellers!
                </h1>
                <p>Shop your fashion favorites today!</p>
              </div>
            </div>
            <div className="flex absolute right-5 ">
              <AllOffProductsAutoplayImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffProductsHero;
