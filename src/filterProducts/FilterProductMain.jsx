import React, { useEffect, useRef, useState } from "react";



//import filterproduct components
import HatMain from "./hat_products/HatMain";
import ClothMain from "./cloth_products/ClothMain";
import ShoeMain from "./shoe_products/ShoeMain";

const FilterProductMain = () => {


  return (
    <div className="relative h-[100vh] border-solid border-2 border-red-800">
      <div className="cursor-pointer">
        {/* <button className="">Clothes</button>
        <button className="">Shoes</button>
        <button className="">Bags</button>
        <button className="">Accessories</button> */}

        <HatMain />
        <ClothMain />
        <ShoeMain/>
      </div>
    </div>
  );
};

export default FilterProductMain;
