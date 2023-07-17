import React, { useContext } from "react";

import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

const SearchProduct = () => {
  const { allProductsMerge, searchProduct, setShowBody, searchRef } =
    useContext(ProductContext);

  return (
    <div className="relative">
      <div
        className="flex flex-col items-center absolute bg-white"
        ref={searchRef}
      >
        <div className="absolute right-[50px] top-5">
          <button onClick={() => setShowBody(false)}>close</button>
        </div>
        <div className="mt-[50px]  ">
          <div
            className=" flex flex-wrap  mt-2 justify-center gap-x-[20px] w-[100%] h-[60vh] lg:h-[50vh]
             overflow-auto
        "
          >
            {allProductsMerge
              .filter((item) => {
                if (searchProduct == "") {
                  return item;
                } else if (
                  item.name
                    .toLowerCase()
                    .includes(searchProduct.toLocaleLowerCase())
                ) {
                  return item;
                }
              })
              .map((item) => {
                const { id, name, price, img, gender } = item;
                return (
                  <div key={id} className="">
                    {searchProduct === "" ? (
                      <></>
                    ) : (
                      <div className="mt-2 lg:w-[200px] shadow-xl rounded-md h-[250px] mb-[50px] relative">
                        <div className="w-[100%] flex flex-col justify-center items-center ">
                          <div className="relative">
                            <div className="absolute w-[100%] text-center text-[.9rem]">
                              <p>{name}</p>
                            </div>
                            <Link
                              to={`/allproductsearch/${id}`}
                              onClick={() => setShowBody(false)}
                            >
                              <img
                                src={img}
                                alt=""
                                className="w-[200px] h-[250px] rounded-t-md"
                              />
                            </Link>
                          </div>

                          <div className="flex w-[100%] absolute bottom-2">
                            <p className=" ml-2 text-[.9rem]">{`$ ${parseFloat(
                              price
                            ).toFixed(2)}`}</p>
                          </div>
                          <div className="text-right w-[100%] absolute bottom-2">
                            <p className="font-light text-[.8rem] ml-2">
                              {gender}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
