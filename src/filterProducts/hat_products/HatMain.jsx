import React, { useContext, useState } from "react";

import { ProductContext } from "../../contexts/ProductContext";

//import FilterSelectFunction components
import FilterSelectFunction from "../FilterSelectFunction";

//import filterProducts
import HatFiltered from "./HatFilteredList";

const HatMain = () => {
  const {
    hatShow,
    setHatShow,
    setClothShow,
    setBagShow,
    setShoeShow,
    hatProducts,
    setAccShow,
  } = useContext(ProductContext);
  //state for hat products data
  const [Product, setProduct] = useState(hatProducts);

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

  const hatToggle = () => {
    setHatShow(true);
    setClothShow(false);
    setShoeShow(false);
    setBagShow(false)
        setAccShow(false)
  };


  return (
    <div className="relative ">
      <div className="filtermain-container">
        <div className="filtermainBtn-container">
          <button onClick={hatToggle} className=" filterBtn-container md:left-[25px] lg:left-[65px] xl:left-[120px]">
            Hats
          </button>
          <p onClick={hatToggle} className="pFilteredBtn">
            Hats
          </p>
        </div>
        <div className="filterFunctionProduct-container">
          {hatShow && (
            <div className="mt-10">
              <div className="filterFunction-container">
                {/* filterselectfunction reusable function component */}
                <FilterSelectFunction
                  filterValueSelected={onFilterValueSelected}
                />
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
