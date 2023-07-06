/* eslint-disable react/prop-types */
import React from "react";

const ClothFiltered = (props) => {
  return (
    <div>
      <div>
        {props.filterProductList.map((products) => {
          //destructure products
          const { name, img, price, status, id, description } = products;
          return (
            <div
              key={id}
              className="relative border-solid border-2 border-yellow-800 flex justify-center mb-10"
            >
              <div className="border-solid border-2 border-red-800 w-[90%]">
                <div className="">
                  <div className="relative w-[425px] h-[400px] border-solid border-2 border-red-800 flex flex-col items-center">
                    <h1 className="absolute left-0">{id}</h1>
                    <h1 className="absolute">{name}</h1>
                    <img className="h-[100%] w-[100%]" src={img} alt="" />
                    <p className="absolute bottom-0 right-0">$ {price}</p>
                    <p className="absolute bottom-0 left-0">{status}</p>
                  </div>
                </div>

                <div>
                  {description.map((infos) => {
                    //destructure info
                    const { info, id } = infos;
                    return (
                      <div key={id} className="relative">
                        <div
                          className="max-w-[550px] border-solid border-2 border-yellow-800 absolute right-0
                          bottom-0"
                        >
                          <p>{info}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClothFiltered;
