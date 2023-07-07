import React from "react";

//import pages
import { Link } from "react-router-dom";

const BagProducts = () => {
  return (
    <div className="container flex flex-col items-center content-center ">
      <ul className="grid grid-cols mt-[15rem] p-19 gap-5">
        <li>
          <Link to="/herschelbags">
            <button className=" m-auto items-center w=32 bg-deep-orange-200 text-lg">
              Herschel
            </button>
          </Link>
        </li>

        <li>
          <Link to="/mkbags">
            <button className=" m-auto items-center w=32 bg-deep-orange-200 text-lg">
              Michael Kors
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BagProducts;
