import React, { useContext } from 'react'

//import product context
import { ProductContext } from "../../contexts/ProductContext";

const HeroHatProducts = () => {

      const { hatProducts } = useContext(ProductContext);

      const filteredHatProduct = hatProducts.filter((productVideo) => {
        return productVideo.video;
      });
  return (
    <div className="heroParent-container ">
      <div className="secondHeroParent-container">
        <div className="mapParent-container mt-0">
          {filteredHatProduct.map((product) => {
            const { id, video } = product;
            return (
              <div key={id} className="mapHeroParent-container">
                <div className="secondMapHeroParent-container">
                  <div className="textHero-container">
                    <div className="secondTextHero-container ">
                      <p>New styles just in!</p>
                      <h1 className="text-[1.5rem] md:text-[2rem] font-medium">
                        ADD your best sellers!
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
}

export default HeroHatProducts