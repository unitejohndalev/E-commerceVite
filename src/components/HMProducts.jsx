import React, { useRef, useState } from "react";

//import data
import data from "../HMProducts.json";

const HMProducts = () => {
  //destructure data
  const { jackets, clothes } = data;

  //show state
  const [show, setShow] = useState();

  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };
  let HMRef = useRef();
  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!HMRef.current.contains(e.target)) {
        setShow(false);
      }
    },[]);
  });
  return (
    <div className="px-[20px]">
      <div ref={HMRef} className="relative">
        <button
          className="ml-[90px] lg:h-[50px] lg:w-[150px] rounded-xl mt-2 bg-red-600 text-white font-medium
         text-[1.2rem] lg:ml-[250px] fixed top-1 z-10 px-[2px] transition-all"
          onClick={toggle}
        >
          H&M
        </button>
        <div>
          {show && (
            <div className="overflow-hidden">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-[200px] mt-[150px] transition-all">
                {jackets.map((products) => {
                  const { id, name, price, img } = products;
                  return (
                    <div
                      key={id}
                      className="mb-10 relative flex flex-col items-center text-center shadow-1"
                    >
                      <div className="relative flex justify-center">
                        <h1 className="font-medium text-[3rem] absolute left-2">
                          {id}
                        </h1>
                        <h1 className="font-medium text-[1.5rem] absolute -top-5 ">
                          {name}
                        </h1>
                        <img
                          className="rounded-xl w-[500px] h-[600px]"
                          src={img}
                          alt=""
                        />
                        <p className="font-medium text-[1.5rem] absolute bottom-0 right-4">
                          $ {price}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
                {clothes.map((products) => {
                  const { id, name, img, price } = products;
                  return (
                    <div
                      key={id}
                      className="mb-10 relative flex flex-col items-center text-center shadow-1 "
                    >
                      <div className="relative flex justify-center">
                        <h1 className="font-medium text-[1.5rem] lg:text-[1.7rem] xl:text-[1.9rem] absolute -top-5">
                          {name}
                        </h1>
                        <img
                          className="rounded-xl w-[500px] h-[600px] "
                          src={img}
                          alt=""
                        />
                        <p className="font-medium text-[1.5rem] absolute bottom-0 right-4">
                          $ {price}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HMProducts;
