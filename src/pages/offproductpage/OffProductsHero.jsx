import React from "react";

import AllOffProductsAutoplayImage from "./AllOffProductsAutoplayImage";

const OffProductsHero = () => {
  return (
    <div className="heroParent-container ">
      <div className="secondHeroParent-container ">
        <div className="offThirdParent-container ">
          <div className="textHero-container mt-5 w-[100vw]  ">
            <div className="secondTextHero-container ">
              <p>New styles added!</p>
              <h1 className="text-[2rem] font-medium">Up to 50% off</h1>
              <p className="hidden md:flex">
                Shop your fashion favorites today!
              </p>
            </div>
          </div>
          <div className="flex absolute lg:right-5 ">
              <AllOffProductsAutoplayImage />
            </div>
        </div>
      </div>
    </div>
  );
};

export default OffProductsHero;
