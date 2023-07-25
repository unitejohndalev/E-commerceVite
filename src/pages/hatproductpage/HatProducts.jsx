import React from "react";

//import hat products
import NikesHatProducts from "./NikesHatProducts";

//import hero hat products
import HeroHatProducts from "./HeroHatProducts";

const HatProducts = () => {
  return (
    <div>
      <div className="w-[100%] flex justify-center mt-[100px]">
        <HeroHatProducts />
      </div>
      <NikesHatProducts />
    </div>
  );
};

export default HatProducts;
