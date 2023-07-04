import React from "react";

//import data
import data from "../data/Herschel.json";
import { Link } from "react-router-dom";

const HerschelProducts = () => {
  //destructure data
  const { bags } = data;


  return (
    <div className="px-[20px]">
      <div className="relative">
 
        <div>

            <div className="h-[100vh] overflow-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-[200px] mt-[150px] transition-all">
                {bags.map((products) => {
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
                        <Link to={`/bagdescription/${id}`}>

                        <img
                          className="rounded-xl w-[500px] h-[600px]"
                          src={img}
                          alt=""
                        />
                        </Link>
                        <p className="font-medium text-[1.5rem] absolute bottom-0 right-4">
                          $ {price}
                        </p>
                      </div>
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

export default HerschelProducts;
