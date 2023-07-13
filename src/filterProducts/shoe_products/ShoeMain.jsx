import React, { useRef, useState, useContext } from "react";

//import data
import { shoes } from "../../data/NikeProducts.json";

//import FilterSelectFunction components
import FilterSelectFunction from "../FilterSelectFunction";

//import filterProducts
import ShoeFilteredList from "./ShoeFilteredList";

import { ProductContext } from "../../contexts/ProductContext";

const ShoeMain = () => {
  const { setHatShow, setClothShow, shoeShow, setShoeShow } =
    useContext(ProductContext);

  //state for hat products data
  const [Product, setProduct] = useState(shoes);

  //state for filtered data
  const [filterHatProduct, setFilterHatProduct] = useState("Best Seller");

  //filter products
  const filterProductList = Product.filter((product) => {
    if (filterHatProduct === "Best Seller") {
      return product.bestSeller === true;
    } else {
      return product.bestSeller === false;
    }
  });

  //function for filter value
  const onFilterValueSelected = (filterValue) => {
    setFilterHatProduct(filterValue);
  };

  const shoeToggle = () => {
    setShoeShow(true);
    setHatShow(false);
    setClothShow(false);
  };

  return (
    <div className="relative ">
      <div  className="absolute top-0 w-[100%]">
        <div className="max-w-[1240px] top-0 absolute">
          <button
            onClick={shoeToggle}
            className="absolute left-[205px] z-10 btn-bg px-5 py-2 rounded-sm text-white"
          >
            Shoes
          </button>
        </div>
        <div className="flex flex-col mt-10 ">
          {shoeShow && (
            <div className="mt-10">
              <div className="flex flex-col items-center">
                <div
                  className="w-[100%] ml-5 mb-5 md:w-[768px] justify-start gap-x-5 lg:w-[1240px]
           "
                >
                  {/* filterselectfunction reusable function component */}
                  <FilterSelectFunction
                    filterValueSelected={onFilterValueSelected}
                  />
                </div>
              </div>
              {/* hatfiltered components */}
              <ShoeFilteredList filterProductList={filterProductList} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoeMain;
