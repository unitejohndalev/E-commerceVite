import React, { useState } from "react";

//import data
import { shoes } from "../../data/NikeProducts.json";

//import FilterSelectFunction components
import FilterSelectFunction from "../FilterSelectFunction";

//import filterProducts
import ShoeFilteredList from "./ShoeFilteredList";

const ShoeMain = () => {
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
  return (
    <div className="relative ">
      <div className="flex flex-col mt-10">
        <div className="absolute top-[-20px] left-0 right-0 z-10">
          {/* filterselectfunction reusable function component */}
          <FilterSelectFunction filterValueSelected={onFilterValueSelected} />
        </div>
        {/* clothfiltered components */}
        <ShoeFilteredList filterProductList={filterProductList} />
      </div>
    </div>
  );
};

export default ShoeMain;
