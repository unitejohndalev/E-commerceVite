import React, { useContext } from "react";
import { Link } from "react-router-dom";

//import product context to get cloths data
import { ProductContext } from "../../contexts/ProductContext";

//import cart context
import { CartContext } from "../../contexts/CartContext";
import { Button } from "@material-tailwind/react";

//import footer
import Footer from "../../components/Footer";

const HMProducts = () => {
  //get cloth products from product context
  const { clothProducts } = useContext(ProductContext);

  //get addToCart function from cart context
  const { addToCart } = useContext(CartContext);

  return (
    <div className="relative w-[100%] h-[100vh]">
      <div className="mt-[130px] flex flex-col items-center ">
        <div className="md:flex md:flex-wrap md:w-[840px] lg:flex lg:flex-wrap lg:mt-10 justify-center gap-x-5 lg:w-[1240px]">
          {/* map first data */}
          {clothProducts.map((clothproducts) => {
            //destructure product hats data
            const { id, name, price, img, gender } = clothproducts;

            return (
              <div
                key={id}
                className="mt-2 mb-2 lg:w-[285px] shadow-xl rounded-md h-[450px] relative"
              >
                <div className="w-[100%] flex flex-col justify-center items-center ">
                  <div className="relative">
                    <div className="flex justify-center">
                      <button
                        onClick={() => addToCart(clothproducts, id)}
                        className="absolute bottom-2 bg-blue-400 text-white py-[5px]
                         px-[10px] rounded-sm hover:bg-transparent hover:text-black"
                      >
                        <p>Add to Cart</p>
                      </button>
                    </div>
                    <div className="absolute w-[100%] text-center">
                      <p>{name}</p>
                    </div>
                    <Link to={`/clothdescription/${id}`}>
                      <img
                        src={img}
                        alt=""
                        className="w-[350px] h-[390px] rounded-t-md"
                      />
                    </Link>
                  </div>

                  <div className="flex w-[100%] justify-between mt-2">
                    <p className=" ml-2">{`$ ${parseFloat(price).toFixed(
                      2
                    )}`}</p>
                  </div>
                  <div className="text-left w-[100%] absolute bottom-2">
                    <p className="font-light text-[.8rem] ml-2">{gender}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HMProducts;