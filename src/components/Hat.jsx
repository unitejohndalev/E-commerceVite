import React from "react";
import data from "../data/NikeProducts.json";
import { Link } from "react-router-dom";

const Hat = () => {
  //destructure data
  const { hats } = data;
  return (
    <div className="container max-w-[100%] mt-[200px]">
      <div className="relative">
        <div className="h-[100vh] overflow-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
            {/* map first data */}
            {hats.map((products) => {
              //destructure product hats data
              const { id, name, price, img } = products;
              return (
                <div
                  key={id}
                  className="mb-10 relative flex flex-col items-center text-center mt-10"
                >
                  <h1 className="font-medium text-center text-[2rem] absolute -top-5">
                    {name}
                  </h1>
                  <div>
                    <Link to={`/hatdescription/${id}`}>
                      <img className="rounded-xl" src={img} alt="" />
                    </Link>
                  </div>
                  <p className="font-medium text-[1.5rem] absolute bottom-0 right-4">
                    $ {price}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hat;
