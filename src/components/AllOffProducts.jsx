import React, { useContext } from "react";

//import product context to get all json data
import { ProductContext } from "../contexts/ProductContext";

const AllOffProducts = () => {
  const { hatProducts,
          shoeProducts,
          clothProducts } = useContext(ProductContext);

  const filterHatProducts = hatProducts.filter((hat) => {
    return hat.offprice;
  });

  return (
    <div className="border-solid border-2 border-yellow-800 relative w-[100%]">
      <div className="mt-[250px] h-[100vh] lg:h-[50vh]
       lg:flex lg:mt-0 justify-center gap-x-5
      ">
        {filterHatProducts.map((filteredproduct) => {
          console.log(filteredproduct);
          const { id, name, price, offprice, img, gender } = filteredproduct;
          console.log(img);
          return (
            <div key={id} className="mt-2 border-solid border-2 border-red-800">
              <div className="w-[100%] flex flex-col justify-center items-center">
                <div>
                  <p>{name}</p>
                  <img src={img} alt="" className="w-[225px] h-[250px]" />
                  <div className="flex justify-between font-light">
                    <p>$ {offprice}</p>
                    <p className="line-through text-red-700">$ {price}</p>
                  </div>
                  <div className="text-left">
                    <p className="font-light text-[.8rem]">{gender}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllOffProducts;
