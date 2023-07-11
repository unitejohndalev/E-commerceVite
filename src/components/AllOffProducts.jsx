import React, { useContext, useEffect, useState } from "react";

//import footer
import Footer from "./Footer";

//import icons from react
import { BsPlus, BsEyeFill } from "react-icons/bs";

//import add to cart function from cart context
import { CartContext } from "../contexts/CartContext";

//import product context to get all json data
import { ProductContext } from "../contexts/ProductContext";

import { Link } from "react-router-dom";
import AllOffProductsAutoplayImage from "./AllOffProductsAutoplayImage";

const AllOffProducts = () => {
  //add to cart function
  const { addToCart } = useContext(CartContext);

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
  const filterClothProduct = clothProducts.filter((cloth) => {
    return cloth.offprice;
  });

  //state for more
  //set state value into conditional statement
  //use JSON.parse to convert it to JSON string
  //use localStorage.getItem to get data from localstorage
  const [more, setMore] = useState(
    JSON.parse(localStorage.getItem("state") || false)
  );

  //to control show more... onClick
  const toggleShow = () => {
    if (more === false) {
      setMore(true);
    } else {
      setMore(false);
    }
  };

  //set localstorage and name it "state"
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(more));
  }, [more]); //remember every side effect must return a parameter, here in case state more is set, since it's a variable and changing

  return (
    <div className="relative w-[100%] h-[100vh] overflow-auto no-scrollbar">
      <div className="mt-[130px] flex flex-col items-center">
        <div
          className="h-[80vh] md:w-[800px] lg:w-[1040px] flex justify-center md:justify-end
        relative mb-5 border-solid border-2 border-red-800"
        >
          <div className="absolute top-0 md:left-5 md:flex">
            <p className="text-[1.5rem] lg:text-[3rem] font-light">
              <span className="text-[2rem] lg:text-[5rem] font-medium">
                OFF
              </span>
              for the week
            </p>
          </div>
          <div className="hidden md:flex">

            <div className=" absolute left-5 bottom-10 h-[50vh] md:w-[300px] lg:w-[550px] border-solid border-2 border-red-800">some text/img whatever</div>
          </div>
          <div>
            <AllOffProductsAutoplayImage />
          </div>
        </div>
        <div className="lg:flex lg:flex-wrap lg:mt-10 justify-center gap-x-5 lg:w-[1240px] ">
          {filterHatProducts.map((filteredproduct) => {
            const { id, name, price, offprice, img, gender } = filteredproduct;
            return (
              <div
                key={id}
                className="mt-2 mb-2 lg:w-[285px] shadow-xl rounded-xl h-[390px] relative"
              >
                <div className="w-[100%] flex flex-col justify-center items-center ">
                  <div className="relative">
                    <div className="flex justify-center">
                      <button
                        onClick={() => addToCart(filteredproduct, id)}
                        className="absolute bottom-2 bg-blue-400 text-white py-[5px]
                         px-[10px] rounded-md hover:bg-transparent hover:text-black"
                      >
                        <p>Add to Cart</p>
                      </button>
                    </div>
                    <div className="absolute w-[100%]">
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
                    <p className="ml-2">$ {offprice}</p>
                    <p className="line-through text-red-700 mr-2">{`$ ${parseFloat(
                      price
                    ).toFixed(2)}`}</p>
                  </div>
                  <div className="text-left w-[100%] absolute bottom-2">
                    <p className="font-light text-[.8rem] ml-2">{gender}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:flex lg:flex-wrap lg:mt-0 justify-center gap-x-5 lg:w-[1240px] ">
          {filterShoeProducts.map((filteredproduct) => {
            const { id, name, price, offprice, img, gender } = filteredproduct;
            return (
              <div
                key={id}
                className="mt-2 mb-2 lg:w-[285px] shadow-xl rounded-xl h-[390px] relative"
              >
                <div className="w-[100%] flex flex-col justify-center items-center">
                  <div className="relative">
                    <div className="flex justify-center">
                      <button
                        onClick={() => addToCart(filteredproduct, id)}
                        className="absolute bottom-2 bg-blue-400 text-white py-[5px]
                         px-[10px] rounded-md hover:bg-transparent hover:text-black"
                      >
                        <p>Add to Cart</p>
                      </button>
                    </div>
                    <div className="absolute w-[100%]">
                      <p>{name}</p>
                    </div>

                    <Link to={`/shoedescription/${id}`}>
                      <img
                        src={img}
                        alt=""
                        className="w-[350px] h-[320px] rounded-t-xl"
                      />
                    </Link>
                  </div>

                  <div className="flex w-[100%] justify-between mt-2">
                    <p className="ml-2">$ {offprice}</p>
                    <p className="line-through text-red-700 mr-2">{`$ ${parseFloat(
                      price
                    ).toFixed(2)}`}</p>
                  </div>
                  <div className="text-left w-[100%] absolute bottom-2">
                    <p className="font-light text-[.8rem] ml-2">{gender}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {more && (
          <div className="lg:flex lg:flex-wrap lg:mt-0 justify-center gap-x-5 lg:w-[1240px] ">
            {filterClothProduct.map((filteredproduct) => {
              const { id, name, price, offprice, img, gender } =
                filteredproduct;
              return (
                <div
                  key={id}
                  className="mt-2 mb-2 lg:w-[285px] shadow-xl rounded-xl h-[460px] relative"
                >
                  <div className="w-[100%] flex flex-col justify-center items-center">
                    <div className="relative">
                      <div className="flex justify-center">
                        <button
                          onClick={() => addToCart(filteredproduct, id)}
                          className="absolute -bottom-3 bg-blue-400 text-white py-[5px] active:bg-blue-400 active:text-white
                         px-[10px] rounded-md hover:bg-transparent hover:text-black"
                        >
                          <p>Add to Cart</p>
                        </button>
                      </div>
                      <div className="absolute w-[100%]">
                        <p>{name}</p>
                      </div>

                      <Link to={`/clothdescription/${id}`}>
                        <img
                          src={img}
                          alt=""
                          className="w-[350px] h-[390px] rounded-t-xl"
                        />
                      </Link>
                    </div>
                    <div className="flex w-[100%] justify-between mt-5">
                      <p className="ml-2">$ {offprice}</p>
                      <p className="line-through text-red-700 mr-2">{`$ ${parseFloat(
                        price
                      ).toFixed(2)}`}</p>
                    </div>
                    <div className="text-left w-[100%] absolute bottom-1">
                      <p className="font-light text-[.8rem] ml-2">{gender}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {more === false ? (
          <h1
            className="font-medium mt-5 mb-5 cursor-pointer"
            onClick={toggleShow}
          >
            More ....
          </h1>
        ) : (
          <h1
            className="font-medium mt-5 mb-5 cursor-pointer"
            onClick={toggleShow}
          >
            Hide ...
          </h1>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default AllOffProducts;
