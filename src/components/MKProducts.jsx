import React, { useContext } from "react";

//import data of mkBag from productCOntext
import { ProductContext } from "../contexts/ProductContext";

//cartContext data and button function
import { CartContext } from "../contexts/CartContext";
import { Button } from "@material-tailwind/react";

const MKProducts = () => {
  //destructure via useContext from productContext
  const { MKBagProducts } = useContext(ProductContext);

  //adding addCart function
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className=" ">
        <div className="relative">
          <div className="h-[100vh] overflow-auto ">
            <div className=" space-x-4 mb-2 grid md:grid-cols-3 l:grid-cols-12 me-5 m-2 mt-[150px] transition-all">
              {MKBagProducts.map((mkbag) => {
                const { id, img, name, price } = mkbag;

                return (
                  <div
                    key={id}
                    className="relative flex flex-col items-center text-center"
                  >
                    <img className="rounded-3xl w-48 h-45 " src={img}></img>
                    <p className=" text-black text-center w-60 font-medium text-sm m-5">
                      <p className="font-bold text-xs mb-2">Michael Kors</p>
                      <h6>{name}</h6>

                      <p className="font-light text-gray-800 mt-4">
                        {" "}
                        $ {price}
                      </p>
                      <div>
                        <Button onClick={() => addToCart(mkbag, mkbag.id)}>
                          Add to Cart
                        </Button>
                      </div>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MKProducts;
