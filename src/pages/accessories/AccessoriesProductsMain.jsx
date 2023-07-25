import React from "react";

import AccessoriesChild from "./AccessoriesChild";

//import arrow up component
import ArrowUp from "../../components/arrowup/ArrowUp";

//import hero acc products
import HeroAccProducts from "./HeroAccProducts";

const AccessoriesProducts = () => {
  return (
    <>
      <div className="w-[100%] flex justify-center mt-[100px]">
        <HeroAccProducts />
      </div>
      <AccessoriesChild />
      <ArrowUp />
    </>
  );
};

export default AccessoriesProducts;
