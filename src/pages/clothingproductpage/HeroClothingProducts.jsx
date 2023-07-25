import React, { useContext } from 'react'

//import product context
import { ProductContext } from "../../contexts/ProductContext";

const HeroClothingProducts = () => {

         const { clothProducts } = useContext(ProductContext);

         const filteredClothProduct = clothProducts.filter((productVideo) => {
           return productVideo.video2;
         });
  return (
    <div className="heroParent-container ">
      <div className="secondHeroParent-container">
        <div className="mapParent-container mt-0">
          {filteredClothProduct.map((product) => {
            const { id, video2 } = product;
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
                    src={video2}
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

export default HeroClothingProducts