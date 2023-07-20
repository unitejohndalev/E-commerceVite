import React, { useContext } from "react";
//import product context
import { ProductContext } from "../../contexts/ProductContext";



const OffProductsHero = () => {
    const { clothProducts } = useContext(ProductContext);
      const filteredClothProduct = clothProducts.filter((productVideo) => {
        return productVideo.video;
      });
  return (
    <div className="heroParent-container ">
      <div className="secondHeroParent-container">
        <div className="mapParent-container  mt-0">
          {filteredClothProduct.map((product) => {
            const { id, video } = product;
            return (
              <div key={id} className="mapHeroParent-container">
                <div className="secondMapHeroParent-container">
                  <div className="textHero-container">
                    <div className="secondTextHero-container ">
                      <p>New styles added!</p>
                      <h1 className="text-[2rem] font-medium">
                        Up to 50% off
                      </h1>
                      <p className="hidden md:flex">
                        Shop your fashion favorites today!
                      </p>
                    </div>
                  </div>
                  <video
                    className="video-style"
                    width="370"
                    loop
                    autoPlay={true}
                    muted
                    src={video}
                  ></video>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OffProductsHero;

// //  .mapParent-container {
//     @apply flex flex-wrap w-[100%] md:flex md:flex-wrap md:w-[100%] lg:flex lg:flex-wrap lg:mt-10 justify-center gap-x-2 md:gap-x-5 lg:w-[100%] xl:w-[1234px];
//   }
