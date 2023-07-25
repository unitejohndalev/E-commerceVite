import React, { useContext } from 'react'


//import product context
import { ProductContext } from "../../contexts/ProductContext";

const HeroBagProducts = () => {
         const { allBagsMerge } = useContext(ProductContext);

         const filteredBagProduct = allBagsMerge.filter((productVideo) => {
           return productVideo.video3;
         });
  return (
    <div className="heroParent-container ">
      <div className="secondHeroParent-container">
        <div className="mapParent-container mt-0">
          {filteredBagProduct.map((product) => {
            const { id, video3 } = product;
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
                    src={video3}
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

export default HeroBagProducts