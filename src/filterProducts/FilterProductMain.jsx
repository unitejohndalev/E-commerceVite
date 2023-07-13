import React from "react";



//import filterproduct components
import HatMain from "./hat_products/HatMain";
import ClothMain from "./cloth_products/ClothMain";
import ShoeMain from "./shoe_products/ShoeMain";
// import BagMain from "./bag_products/BagMain";
// import AccMain from "./acc_products/AccMain";

// import Footer from "../components/Footer";

const FilterProductMain = () => {


  return (

      <div className=" h-[100vh] ">
        <div className="cursor-pointer">
          {/* <button className="">Clothes</button>
        <button className="">Shoes</button>
        <button className="">Bags</button>
        <button className="">Accessories</button> */}

          <HatMain />
          <ClothMain />
          <ShoeMain />
          {/* <BagMain/>
          <AccMain/> */}
        </div>
      </div>

   
  );
};

export default FilterProductMain;
