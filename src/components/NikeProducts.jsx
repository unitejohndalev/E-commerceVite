import React, { useContext } from "react";

import { Link } from "react-router-dom";

//import product context to get shoes data
import { ProductContext } from "../contexts/ProductContext";


//import cart context
import { CartContext } from "../contexts/CartContext";
import { Button } from "@material-tailwind/react";


const NikeProducts = () => {
  //get hat products from product context
  const { shoeProducts } = useContext(ProductContext);

  //get addToCart function from cart context
  const { addToCart } = useContext(CartContext);

  return (
    <div className="h-[100vh] overflow-auto no-scrollbar ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-[200px] mt-[150px] w-[90%] m-auto transition-all">
        {/* map first data */}
        {shoeProducts.map((products) => {
          //destructure product shoes data
          const { id, name, price, gender, img } = products;

          return (
            <div
              key={id}
              className="mb-10 relative flex flex-col items-center text-center shadow-1 rounded-xl"
            >
              <div className="relative flex justify-center">
                {/* <h1 className="font-medium text-[3rem] absolute left-2">{id}</h1> */}
                <h1 className="font-medium text-[1.5rem] absolute -top-5 ">
                  {name}
                </h1>
                <div className="absolute right-5 top-5">
                  <Button onClick={() => addToCart(products, id)}>ADD</Button>
                </div>
                <div>
                  <Link to={`/shoedescription/${id}`}>
                    <img className=" rounded-xl" src={img} alt="" />
                  </Link>
                </div>
                <p className="font-light text-[1rem] absolute bottom-0 left-4">
                  {gender}
                </p>
                <p className="font-medium text-[1.5rem] absolute bottom-0 right-4">
                  $ {price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NikeProducts;
