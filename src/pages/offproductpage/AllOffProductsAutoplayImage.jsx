import React, { useContext } from "react";

//import product context
import { ProductContext } from "../../contexts/ProductContext";

//import embla carousel and autoplay
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const AllOffProductsAutoplayImage = () => {
  //call all state in product context
  const { hatProducts, shoeProducts, clothProducts } =
    useContext(ProductContext);

  //filter hat function
  const filterHatProducts = hatProducts.filter((hat) => {
    return hat.offprice;
  });

  //filter shoe function
  const filterShoeProducts = shoeProducts.filter((shoe) => {
    return shoe.offprice;
  });

  //filter cloth function
  const filterClothProducts = clothProducts.filter((cloth) => {
    return cloth.offprice;
  });

  //autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div
      className="overflow-hidden
       h-[50vh] mt-10 w-[400px] flex justify-center items-center
        transition-all "
      ref={emblaRef}
    >
      <div className="flex">
        {filterHatProducts.map((hat) => {
          const { id, img } = hat;
          return (
            <div className="embla__slide min-w-0 " key={id}>
              <div className="flex justify-center items-center">
                <img src={img} className="w-[400px] h-[400px]" alt="" />
              </div>
            </div>
          );
        })}
        {filterShoeProducts.map((shoe) => {
          const { id, img } = shoe;
          return (
            <div className="embla__slide min-w-0 " key={id}>
              <div className="flex justify-center items-center">
                <img src={img} className=" w-[400px] h-[400px]" alt="" />
              </div>
            </div>
          );
        })}
        {filterClothProducts.map((cloth) => {
          const { id, img } = cloth;
          return (
            <div className="embla__slide min-w-0 " key={id}>
              <div className="flex justify-center items-center">
                <img src={img} className=" w-[400px] h-[490px]" alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllOffProductsAutoplayImage;
