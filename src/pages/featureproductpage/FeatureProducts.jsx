import React from "react";

//import filter Products
import FilterProductMain from "../../filterProducts/FilterProductMain";

//import hero for feature page
import HeroFeatureProducts from "./HeroFeatureProducts";

//import arrow up component
import ArrowUp from "../../components/arrowup/ArrowUp";

const FeatureProducts = () => {
  return (
    <div className="relative h-[100%]">
      <div className="w-[100%] flex justify-center mt-[100px]">
        <HeroFeatureProducts />
      </div>
      <div className="mb-10">
        <FilterProductMain />
      </div>
      <ArrowUp />
    </div>
  );
};

export default FeatureProducts;
