import React from "react";

//import pages
import { Link } from "react-router-dom";

import BagProductsChild from "./BagProductsChild";

//import hero bag products
import HeroBagProducts from "./HeroBagProducts";

const BagProducts = () => {
  return (
    <>
      <div className="w-[100%] flex justify-center mt-[100px]">
        <HeroBagProducts />
      </div>
      <BagProductsChild />
    </>
  );
};

export default BagProducts;
