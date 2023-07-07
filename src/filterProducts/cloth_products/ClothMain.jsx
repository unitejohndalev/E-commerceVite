import React, { useState } from "react";
//import data
import {clothes} from '../../data/HMProducts.json'

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

  return (
    <div className="relative border-solid border-2 border-yellow-800">
      <div className="flex flex-col h-[75vh] overflow-auto">
        <div className="absolute top-[-20px] left-0 z-10">
          {/* filterselectfunction reusable function component */}
          <FilterSelectFunction filterValueSelected={onFilterValueSelected} />
        </div>
        {/* clothfiltered components */}
        <ClothFilteredList filterProductList={filterProductList} />
      </div>
    </div>
  );
};

export default ClothMain;
