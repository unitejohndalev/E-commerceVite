import React, { useRef, useState } from "react";
//import data
import { clothes } from "../../data/HMProducts.json";

//import FilterSelectFunction components
import FilterSelectFunction from "../FilterSelectFunction";

//import filterProducts
import ClothFilteredList from "./ClothFilteredList";

const ClothMain = () => {
  //state for hat products data
  const [Product, setProduct] = useState(clothes);

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
  const [clothShow, setClothShow] = useState();

  const clothToggle = () => {
    setClothShow((prevShow) => !prevShow);
  };
  let clothRef = useRef();
  React.useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!clothRef.current.contains(e.target)) {
        setClothShow(false);
      }
    });
  });

  return (
    <div className="relative">
      <div ref={clothRef} className="absolute top-0 w-[100%]">
        <div className="max-w-[1240px] top-0 absolute">
          <button
            onClick={clothToggle}
            className="absolute left-[100px] z-10 btn-bg px-5 py-2 rounded-sm text-white"
          >
            Cloths
          </button>
        </div>
        <div className="flex flex-col mt-10">
          {clothShow && (
            <div className="mt-10">
              <div className="flex flex-col items-center ">
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
              <ClothFilteredList filterProductList={filterProductList} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClothMain;
