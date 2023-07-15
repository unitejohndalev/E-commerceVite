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
        <div className="w-[100%] md:max-w-[768px] lg:max-w-[1040px] flex items-center justify-center">
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
              <div className="h-[80%] relative overflow-auto no-scrollbar mt-10 flex flex-col shadow-xl ">
                {cart.map((products, idx) => {
                  //destructure hats data
                  const { id, name, price, img, amount } = products;
                  return (
                    <div key={idx} className="">
                      <div
                        className="relative flex w-[100%] 
            mt-5 shadow-lg rounded-sm"
                      >
                        <div className="relative">
                          <Link to={`/allproductsearch/${id}`}>
                            <img
                              src={img}
                              alt="imgProduct"
                              className="w-[100px] p-1 rounded-sm"
                            />
                          </Link>
                        </div>
                        <div className=" w-[100%] p-2 relative">
                          <div className="flex absolute top-0 ">
                            <h1 className="">{name}</h1>
                          </div>
                          <div
                            className="absolute right-1 top-0"
                            onClick={() => removeFromCart(id)}
                          >
                            <IoMdClose />
                          </div>
                          <div className="flex flex-row ">
                            <div
                              className="flex justify-center items-center gap-x-2 absolute
                  bottom-1"
                            >
                              <Button
                                className="bg-white text-black !rounded-sm"
                                onClick={() => decreaseAmount(id)}
                              >
                                <IoMdRemove />
                              </Button>
                              <div className="w-[20px] text-center">
                                <p className="">{amount}</p>
                              </div>
                              <Button
                                className="bg-white text-black !rounded-sm"
                                onClick={() => increaseAmount(id)}
                              >
                                <IoMdAdd />
                              </Button>
                            </div>
                          </div>
                          <div
                            className=" w-[55%] absolute right-0
                  flex justify-between bottom-1"
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
            )}
            {/* clear all products in cart */}
            {cart.length === 0 ? (
              <></>
            ) : (
              <div className="mt-[100px]">
                <div
                  className="cursor-pointer py-4 bg-red-500
           text-white w-12 h-12 flex justify-center text-sm rounded-sm mt-5 
          absolute bottom-0  right-0"
                  onClick={clearCart}
                >
                  <FiTrash2 />
                </div>
                {/* products cart total */}
                <div className="uppercase font-semibold absolute bottom-0 left-0">
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
