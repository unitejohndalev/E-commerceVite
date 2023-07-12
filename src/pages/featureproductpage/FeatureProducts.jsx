import React from "react";

//import filter Products
import FilterProductMain from "../../filterProducts/FilterProductMain";

//import hero for feature page
import HeroFeatureProducts from "./HeroFeatureProducts";

//import footer
// import Footer from "../../components/Footer";

const FeatureProducts = () => {
  return (
    <div className="">
      <div className="w-[100%] flex justify-center mt-[100px]">
        <HeroFeatureProducts/>
      </div>
      <div className="mb-10">
        <FilterProductMain />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default FeatureProducts;
