import React from "react";

//import filter Products
// import HatMain from "../filterProducts/hat_products/HatMain";
import FilterProductMain from "../filterProducts/FilterProductMain";

const FeatureProducts = () => {
  return (
    <div className="h-[100vh] overflow-hidden">
      <FilterProductMain />
      <div className="w-[100%] flex justify-center mt-[100px]">
        <h1 className="text-[5rem]">Feature Products</h1>
      </div>
    </div>
  );
};

export default FeatureProducts;
