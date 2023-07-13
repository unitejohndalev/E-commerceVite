import React, { useContext } from "react";
//import product context
import { ProductContext } from "../../contexts/ProductContext";

const HeroFeatureProducts = () => {
  const { shoeProducts } = useContext(ProductContext);

  const filteredShoeProduct = shoeProducts.filter((productVideo) => {
    return productVideo.video;
  });
  return (
    <div className="relative w-[100%] ">
      <div className="flex flex-col items-center">
        <div className=" relative md:flex md:flex-wrap md:w-[840px] lg:flex lg:flex-wrap lg:mt-5 justify-end gap-x-5 lg:w-[1240px]">
          {filteredShoeProduct.map((product) => {
            const { id, video } = product;
            return (
              <div key={id} className="">
                <div
                  className="h-[80vh] md:w-[800px] lg:w-[1240px] flex justify-center items-center md:justify-end 
        relative mb-5"
                >
                  <div className="relative md:flex md:justify-center md:items-center h-[65vh] w-[400px] md:w-[800px] lg:w-[1240px] border-solid border-2 border-red-800">
                    <div
                      className="hidden absolute md:flex flex-col justify-center left-5 h-[65vh]
                     md:w-[350px] lg:w-[650px] off-bg text-white"
                    >
                      <div className="py-10 flex flex-col justify-center items-center">
                        <p>New styles just in!</p>
                        <h1 className="text-[2rem] font-medium">
                          ADD your best sellers!
                        </h1>
                        <p>Shop your fashion favorites today!</p>
                      </div>
                    </div>
                    <video
                      className="flex absolute right-5"
                      width="370"
                      loop
                      autoPlay={true}
                      muted
                      src={video}
                    ></video>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroFeatureProducts;
