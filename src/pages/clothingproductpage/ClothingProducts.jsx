import React from "react";

//import pages

import HMProducts from "./HMProducts";
//import arrow up component
import ArrowUp from "../../components/arrowup/ArrowUp";

//import hero clothing products
import HeroClothingProducts from "./HeroClothingProducts";

const ClothingProducts = () => {
  return (
    <div>
      <div className="w-[100%] flex justify-center mt-[100px]">
        <HeroClothingProducts />
      </div>
      <HMProducts />
      <ArrowUp />
    </div>
  );
};

export default ClothingProducts;
