import React from "react";

//import filter Products
// import HatMain from "../filterProducts/hat_products/HatMain";
import FilterProductMain from "../../filterProducts/FilterProductMain";

//import footer
import Footer from "../../components/Footer";

const FeatureProducts = () => {
  return (
    <div className="">
      <div className="w-[100%] flex justify-center mt-[100px]">
        <h1 className="text-[5rem]">Feature Products</h1>
      </div>
      <div className="mb-10">
        <FilterProductMain />
      </div>
      <Footer />
    </div>
  );
};

export default FeatureProducts;
