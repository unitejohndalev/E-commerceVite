import React, { useContext } from "react";

//import product context
import { ProductContext } from "../../contexts/ProductContext";

//import embla carousel and autoplay
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const AllOffProductsAutoplayImage = () => {
  //call all state in product context
  const { clothProducts } =
    useContext(ProductContext);


  //filter cloth function
  const filterClothProducts = clothProducts.filter((cloth) => {
    return cloth.offprice;
  });

  //autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div
      className="overflow-hidden
       h-[100%] mt-0 w-[400px] flex justify-center items-center
        transition-all "
      ref={emblaRef}
    >
      <div className="flex">
        {filterClothProducts.map((cloth) => {
          const { id, img } = cloth;
          return (
            <div className="embla__slide min-w-0  " key={id}>
              <div className="flex justify-center items-center">
                <img src={img} className="w-[370px] h-[100%]" alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllOffProductsAutoplayImage;
