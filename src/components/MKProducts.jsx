import React from "react";

import data from "../data/MKProducts.json";

const MKProducts = () => {
  //destructure data
  const { bags } = data;

  return (
    <div>
      <div className=" ">
        <div className="relative">
          <div className="h-[100vh] overflow-auto ">
            <div className=" space-x-4 mb-2 grid md:grid-cols-3 l:grid-cols-12 me-5 m-2 mt-[150px] transition-all">
              {bags.map((mkbags) => {
                const { id, img, name, price } = mkbags;

                return (
                  <div
                    key={id}
                    className="relative flex flex-col items-center text-center"
                  >
                    <p className="text-base "></p>
                    <img className="rounded-3xl w-48 h-45 " src={img}></img>
                    <p className=" text-black text-center w-60 font-medium text-sm m-5">
                      <p className="font-bold text-xs mb-2">Michael Kors</p>
                      {name}
                      <p className="font-light text-gray-800 mt-4">
                        {" "}
                        $ {price}
                      </p>
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
