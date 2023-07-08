import React, { useContext } from "react";

//import useNavigate from react-dom
//by using this hook we can navigate back programmatically
import { useNavigate } from "react-router-dom";

//import cart context
import { CartContext } from "./CartContext";
import { Button } from "@material-tailwind/react";

//import react icons
import { IoMdAdd, IoMdRemove, IoMdClose } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

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

  //navigate hook
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
    
  };

  return (
    <div className="h-[100vh] overflow-hidden flex flex-col justify-center items-center">
      {/* navigate back button */}
      <button onClick={goBack} className="absolute left-2 lg:left-5 top-[110px] bg-red-600 text-white
       p-2 rounded-xl z-10">
        BACK
      </button>
      <div className="relative w-[500px]">
        <div className="h-[70vh] relative overflow-auto mt-10 no-scrollbar">
          {cart.map((hats, idx) => {
            //destructure hats data
            const { id, name, price, img, amount } = hats;
            return (
              <div key={idx} className="">
                <div
                  className="relative flex w-[500px] 
            mt-5 shadow-lg rounded-xl"
                >
                  <div className="relative">
                    <img
                      src={img}
                      alt="imgProduct"
                      className="w-[100px] p-1 rounded-xl"
                    />
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
                        className="flex justify-center items-center gap-x-5 absolute
                  bottom-1"
                      >
                        <Button
                          className="bg-white text-black"
                          onClick={() => decreaseAmount(id)}
                        >
                          <IoMdRemove />
                        </Button>
                        <p>{amount}</p>
                        <Button
                          className="bg-white text-black"
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
                      <p className="">$ {price}</p>

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
        {/* clear all products in cart */}
        <div
          className="cursor-pointer py-4 bg-red-500
           text-white w-12 h-12 flex justify-center text-xl rounded-xl mt-5 
          absolute -bottom-[80px] right-0"
          onClick={clearCart}
        >
          <FiTrash2 />
        </div>
        {/* products cart total */}
        <div className="uppercase font-semibold absolute -bottom-[80px] left-0">
          <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default YourCartContext;
