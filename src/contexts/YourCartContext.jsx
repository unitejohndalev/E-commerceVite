import React, { useContext, useState } from "react";

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

import { HiOutlineArrowLeft } from "react-icons/hi";

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

  //state for remove all ordered products? pop up
  const [removeAll, setRemoveAll] = useState(false);

  //toggle btn function fo remove all products? pop up
  const removeAllToggleBtn = () => {
    setRemoveAll((prev) => !prev);
  };

  //both state update when yes is clicked clearcart and removealltogglebtn state
  const clickHandler = () => {
    clearCart()
    removeAllToggleBtn()
  }
  return (
    <div className="h-[100%] font-montserrat">
      {/* navigate back button */}
      <div>
        <button
          className="hidden md:flex absolute top-[100px]
          ml-2 text-[1.5rem] px-[10px] cursor-pointer"
          onClick={goBack}
        >
          <HiOutlineArrowLeft />
        </button>
        <div
          onClick={goBack}
          className="absolute top-[100px] ml-2 text-[1.5rem] md:hidden
          "
        >
          <HiOutlineArrowLeft />
        </div>
      </div>
      <div className="flex mt-[100px] justify-center items-center">
        <div className="w-[100%] md:max-w-[768px] lg:max-w-[1240px] flex items-center justify-center">
          <div className="relative w-[90%] mt-[60px] h-[100%] ">
            {cart.length === 0 ? (
              <div className=" flex justify-center items-center h-[50vh]">
                <p className="text-[2rem] font-medium">Your Cart is empty!</p>
              </div>
            ) : (
              <div className=" h-[40vh] md:h-[60vh] lg:w-[50%] overflow-x-hidden">
                <div className="h-[80%] relative flex flex-col">
                  {cart.map((products, idx) => {
                    //destructure hats data
                    const { id, name, price, img, amount } = products;
                    return (
                      <div
                        key={idx}
                        className="w-[100%] shadow-sm lg:shadow-none rounded-sm "
                      >
                        <div
                          className="relative flex md:w-[95%] 
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
                            <div className="flex absolute top-0 lg:w-[50%] lg:left-[180px]">
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
                              className=" w-[30%]
                  flex justify-between h-[55%] absolute right-0 bottom-0  lg:font-light "
                            >
                              <p className="absolute right-1 bottom-0">{`$ ${parseFloat(
                                price
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
              <div className="relative mt-[100px]  mb-10 h-[35vh] md:h-[50vh] lg:w-[40%] lg:h-[50vh] lg:mt-[0] lg:absolute lg:top-0 lg:right-0 lg:shadow-md rounded-sm">
                <div className="  h-[25vh] md:h-[35vh] lg:h-[33vh] lg:flex lg:flex-col w-[100%] overflow-auto">
                  {cart.map((products, idx) => {
                    const { name, price, amount } = products;
                    return (
                      <div key={idx} className="w-[100%]">
                        <div className=" w-[100%] flex flex-col mt-2 relative">
                          <div className=" flex items-center">
                            <p className="font-light text-[.9rem] absolute left-2">
                              {amount}x
                            </p>
                            <p className="ml-10 w-[200px]">{name}</p>
                            <p className="font-light text-[.9rem] absolute right-2">{`$ ${parseFloat(
                              price * amount
                            ).toFixed(2)}`}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className=" flex text-white items-center justify-center rounded-sm w-[100%] absolute bottom-[-50px] md:bottom-2">
                  <button className="bg-primary/80 py-2 w-[96%]">
                    Continue to checkout
                  </button>
                </div>
                <div
                  className="cursor-pointer py-4 bg-red-500
           text-white w-12 h-12 flex justify-center text-sm rounded-sm mt-5 
          absolute left-2 md:left-3 md:bottom-[60px]"
                  onClick={removeAllToggleBtn}
                >
                  <FiTrash2 />
                </div>
                {removeAll && (
                  <div
                    className="h-[50vh] w-[100%] fixed z-[100] top-1/2 left-1/2 -translate-y-1/2 
                  -translate-x-1/2 text-center lg:w-[1024px]  bg-primary/90 rounded-sm flex 
                  flex-col items-center justify-center text-white"
                  >
                    <p className="text-[2rem]">Remove all ordered products?</p>
                    <div className="flex gap-x-10 mt-5">
                      <button
                        className="hover:text-black text-[1.5rem]"
                        onClick={clickHandler}
                      >
                        Yes
                      </button>
                      <button
                        className="hover:text-black text-[1.5rem]"
                        onClick={removeAllToggleBtn}
                      >
                        No
                      </button>
                    </div>
                  </div>
                )}
                {/* products cart total */}
                <div className="uppercase font-semibold absolute right-2 bottom-0 md:right-3 md:bottom-[60px]">
                  <span className="mr-2">Total:</span>$
                  {parseFloat(total).toFixed(2)}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* w-[1240px] div */}
      </div>
      <Footer />
    </div>
  );
};

export default YourCartContext;
