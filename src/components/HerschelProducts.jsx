import React, { useContext } from "react";

//import data
import { Link } from "react-router-dom";

//import //import data of mkBag from productCOntext
import { ProductContext } from "../contexts/ProductContext";

//cartContext data and button function
import { CartContext } from "../contexts/CartContext";
import { Button } from "@material-tailwind/react";

const HerschelProducts = () => {
  //destructure data via useContext from ProductContext
  const { HerschelBagProducts } = useContext(ProductContext);

  //adding button to add to cart
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className=" ">
        <div className="relative">
          <div className="h-[100vh] overflow-auto ">
            <div className=" space-x-4 mb-2 grid md:grid-cols-3 l:grid-cols-12 me-5 m-2 mt-[150px] transition-all">
              {HerschelBagProducts.map((herschelbag) => {
                const { id, name, price, img } = herschelbag;
                return (
                  <div
                    key={id}
                    className="relative flex flex-col items-center text-center"
                  >
                    <Link to={`/bagdescription/${id}`}>
                      <img className="rounded-3xl w-48 h-45 " src={img}></img>
                    </Link>
                    <div className="relative flex justify-center">
                      <p className=" text-black text-center w-60 font-medium text-sm m-5">
                        <p>Herschel</p>
                        <h1 className="font-light text-gray-800 mt-4">
                          {name}
                        </h1>

                        <p className="font-light text-gray-800 mt-4">
                          $ {price}
                        </p>
                        <div>
                          <Button
                            onClick={() =>
                              addToCart(herschelbag, herschelbag.id)
                            }
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </p>
                    </div>
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

export default HerschelProducts;
