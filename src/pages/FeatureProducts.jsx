import React, { useState } from "react";



//import data
import { hats} from "../data/NikeProducts.json";

//import components
import FeatureProductChild from "./FeatureProductChild";

//import filterProducts
import HatFiltered from "../filterProducts/HatFiltered";

const FeatureProducts = () => {
  //state for hat products data
  const [hatProduct, setHatProduct] = useState(hats);

  //state for filtered data
  const [filterHatProduct, setFilterHatProduct] = useState("Best Seller");

  //filter products
  const filterProductList = hatProduct.filter((product) => {
    if (filterHatProduct === "Best Seller") {
      return product.bestSeller === true;
    } else {
      return product.bestSeller === false;
    }
  });

  console.log(filterProductList);

  //function for filter value
  const onFilterValueSelected = (filterValue) => {
    setFilterHatProduct(filterValue);
  };

  return (
    <div className="relative border-solid border-2 border-yellow-800">
      <div className="flex flex-col h-[100vh] mt-[150px] overflow-auto">
        <div className="absolute top-[120px] left-0 z-10">
          <FeatureProductChild filterValueSelected={onFilterValueSelected} />
        </div>
        <HatFiltered filterProductList={filterProductList} />
      </div>
    </div>
  );
};

export default FeatureProducts;
