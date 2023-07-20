import React, { useContext } from "react";
//import product context
import { ProductContext } from "../../contexts/ProductContext";

const HeroFeatureProducts = () => {
  const { shoeProducts } = useContext(ProductContext);

  const filteredShoeProduct = shoeProducts.filter((productVideo) => {
    return productVideo.video;
  });
  return (
    <div className="heroParent-container ">
      <div className="secondHeroParent-container">
        <div className="mapParent-container">
          {filteredShoeProduct.map((product) => {
            const { id, video } = product;
            return (
              <div key={id} className="mapHeroParent-container">
                <div className="secondMapHeroParent-container">
                  <div className="textHero-container ">
                    <div className="secondTextHero-container ">
                      <p>New styles just in!</p>
                      <h1 className="text-[2rem] font-medium ">
                        ADD your best sellers!
                      </h1>
                      <p className="hidden md:flex">Shop your fashion favorites today!</p>
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

export default HeroFeatureProducts;
