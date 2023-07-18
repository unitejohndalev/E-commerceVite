import React, { useContext } from "react";

//import useNavigate from react-dom
//by using this hook we can navigate back programmatically
import { Link, useNavigate } from "react-router-dom";

//import cart context
import { CartContext } from "./CartContext";
import { Button } from "@material-tailwind/react";

//import react icons
import { IoMdAdd, IoMdRemove, IoMdClose } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import Footer from "../components/Footer";

const YourCartContext = () => {
  //get cart state in cart context
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
    total,
  } = useContext(CartContext);

  //navigate hook, when back button is clicked it'll back 1 page
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="h-[100%] ">
      <div className="flex mt-[100px] justify-center items-center">
        <div className="w-[100%] md:max-w-[768px] lg:max-w-[1240px] flex items-center justify-center">
          {/* navigate back button */}
          <button
            onClick={goBack}
            className="absolute left-2 lg:left-5 top-[110px] text-white
       p-2 rounded-sm btn-bg z-10"
          >
            BACK
          </button>
          <div className="relative w-[90%] mt-[60px] h-[100%] ">
            {cart.length === 0 ? (
              <div className=" flex justify-center items-center h-[50vh]">
                <p className="text-[2rem] font-medium">Your Cart is empty!</p>
              </div>
            ) : (
              <div className="lg:h-[80vh] lg:w-[58%] lg:overflow-x-hidden lg:over">
                <div className="h-[80%] relative mt-10 flex flex-col">
                  {cart.map((products, idx) => {
                    //destructure hats data
                    const { id, name, price, img, amount } = products;
                    return (
                      <div
                        key={idx}
                        className="w-[100%] shadow-sm lg:shadow-none rounded-sm "
                      >
                        <div
                          className="relative flex w-[95%] 
            mt-5 shadow-sm rounded-sm  lg:h-[22%] lg:shadow-none lg:ml-2"
                        >
                          <div className="relative lg:h-[100%] lg:hidden">
                            <Link to={`/allproductsearch/${id}`}>
                              <img
                                src={img}
                                alt="imgProduct"
                                className="w-[100px] p-1 rounded-sm lg:w-[200px] lg:h-[150px]"
                              />
                            </Link>
                          </div>
                          <div className=" w-[100%] p-2 relative  lg:h-[150px] lg:flex lg:items-center lg:justify-start lg:shadow-xl">
                            <div className="hidden lg:h-[100%] lg:flex lg:justify-center lg:items-center  ">
                              <Link to={`/allproductsearch/${id}`}>
                                <img
                                  src={img}
                                  alt="imgProduct"
                                  className="w-[150px] p-1 rounded-sm  lg:h-[150px]"
                                />
                              </Link>
                            </div>
                            <div className="flex absolute top-0 lg:w-[80%] lg:left-[180px]">
                              <h1 className="lg:text-[1.3rem] lg:font-light">
                                {name}
                              </h1>
                            </div>
                            <div
                              className="absolute right-1 top-0 lg:text-[1.2rem] lg:top-2 lg:right-2 cursor-pointer"
                              onClick={() => removeFromCart(id)}
                            >
                              <IoMdClose />
                            </div>
                            <div className="flex flex-row ">
                              <div
                                className="flex justify-center items-center gap-x-2 absolute
                  bottom-1 lg:bottom-2 lg:left-[180px] lg:text-[1.2rem]"
                              >
                                <Button
                                  className="bg-white text-black !rounded-sm"
                                  onClick={() => decreaseAmount(id)}
                                >
                                  <IoMdRemove className="lg:text-[1rem]" />
                                </Button>
                                <div className="w-[20px] text-center">
                                  <p className="">{amount}</p>
                                </div>
                                <Button
                                  className="bg-white text-black !rounded-sm"
                                  onClick={() => increaseAmount(id)}
                                >
                                  <IoMdAdd className="lg:text-[1rem]" />
                                </Button>
                              </div>
                            </div>
                            <div
                              className=" w-[55%] absolute right-0
                  flex justify-between bottom-1 md:w-[70%] lg:w-[40%] lg:font-light"
                            >
                              <p className="ml-2">$ {price}</p>

                              <p className=" absolute right-1">{`$ ${parseFloat(
                                price * amount
                              ).toFixed(2)}`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {/* clear all products in cart */}
            {cart.length === 0 ? (
              <></>
            ) : (
              <div className="mt-[100px] lg:w-[40%] lg:h-[40vh] lg:mt-[150px] lg:absolute lg:top-0 lg:right-0 lg:shadow-md rounded-sm ">
                <div className="hidden lg:flex  text-white  items-center justify-center rounded-sm w-[100%] absolute bottom-2">
                  <button className="bg-primary/80 py-2 w-[96%]">
                    Continue to checkout
                  </button>
                </div>
                <div
                  className="cursor-pointer py-4 bg-red-500
           text-white w-12 h-12 flex justify-center text-sm rounded-sm mt-5 
          absolute bottom-0  right-0 lg:right-2 lg:bottom-[100px]"
                  onClick={clearCart}
                >
                  <FiTrash2 />
                </div>
                {/* products cart total */}
                <div className="uppercase font-semibold absolute bottom-0 left-0 lg:left-2 lg:bottom-[100px]">
                  <span className="mr-2">Total:</span>${" "}
                  {parseFloat(total).toFixed(2)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default YourCartContext;
