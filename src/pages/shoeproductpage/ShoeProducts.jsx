import React from "react";

import NikeProducts from "./NikeProducts";

//import Hero show products
import HeroShowProducts from "./HeroShowProducts";




const ShoeProducts = () => {
  return (
    <div className="">
      <div className="w-[100%] flex justify-center mt-[100px]">
        <HeroShowProducts />
      </div>
      <NikeProducts />
    </div>
  );
};

export default ShoeProducts;
