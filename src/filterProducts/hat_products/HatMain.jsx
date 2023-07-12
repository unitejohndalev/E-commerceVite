import React, { useRef, useState } from "react";
//import data
import { hats } from "../../data/NikeProducts.json";



//import FilterSelectFunction components
import FilterSelectFunction from "../FilterSelectFunction";

//import filterProducts
import HatFiltered from "./HatFilteredList";

const HatMain = () => {
  //state for hat products data
  const [Product, setProduct] = useState(hats);

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

  //show & hide state
  const [hatShow, setHatShow] = useState(true);

  const hatToggle = () => {
    setHatShow((prevShow) => !prevShow);
  };
  let hatRef = useRef();
  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!hatRef.current.contains(e.target)) {
        setHatShow(false);
      }
    });
  });

  return (
    <div className="relative ">
      <div ref={hatRef} className="absolute top-0 w-[100%]">
        <div className="max-w-[1240px] top-0 absolute">
          <button
            onClick={hatToggle}
            className="absolute z-10 left-3 btn-bg px-5 py-2 rounded-md text-white"
          >
            Hats
          </button>
        </div>
        <div className="flex flex-col mt-10 justify-center">
          {hatShow && (
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
              <HatFiltered filterProductList={filterProductList} />
            </div>
          )}
        </div>
      </div>
   
    </div>
  );
};

export default HatMain;
