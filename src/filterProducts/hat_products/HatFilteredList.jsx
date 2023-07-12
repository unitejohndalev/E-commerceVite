/* eslint-disable react/prop-types */
import React, { useContext } from "react";

//import add to cart function from cart context
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

const HatFiltered = (props) => {
  //add to cart function
  const { addToCart } = useContext(CartContext);
  return (
    <div className="relative w-[100%] h-[100vh]">
      <div className="flex flex-col items-center ">
        <div className="md:flex md:flex-wrap md:w-[840px] lg:flex lg:flex-wrap lg:mt-5 justify-center gap-x-5 lg:w-[1240px] ">
          {props.filterProductList.map((products) => {
            //destructure products
            const { name, img, price, status, gender, id } = products;
            return (
              <div
                key={id}
                className="mt-2 mb-2 lg:w-[285px] shadow-xl rounded-xl h-[390px] relative "
              >
                <div className="w-[100%] flex flex-col justify-center items-center ">
                  <div className="relative">
                    <div className="flex justify-center">
                      <button
                        onClick={() => addToCart(products, id)}
                        className="absolute bottom-2 btn-bg text-white py-[5px]
                         px-[10px] rounded-md hover:bg-transparent hover:text-black"
                      >
                        <p>Add to Cart</p>
                      </button>
                    </div>

                    <div className="absolute w-[100%] text-center">
                      <p>{name}</p>
                    </div>
                    <Link to={`/hatdescription/${id}`}>
                      <img
                        src={img}
                        alt=""
                        className="w-[350px] h-[320px] rounded-t-xl"
                      />
                    </Link>
                  </div>
                  <div className="flex w-[100%] justify-between mt-2">
                    <p className="ml-2">{status}</p>
                    <p className="mr-2">{`$ ${parseFloat(price).toFixed(
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
      <Footer/>
    </div>
  );
};

export default HatFiltered;
