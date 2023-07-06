import React, { useState } from "react";
//import data
import { hats} from "../../data/NikeProducts.json";

//import components
import FeatureProductChild from "./HatSelectFunction";

//import filterProducts
import HatFiltered from "./HatFilteredList";

const HatMain = () => {
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

  //function for filter value
  const onFilterValueSelected = (filterValue) => {
    setFilterHatProduct(filterValue);
  };


  return (
    <div className="relative border-solid border-2 border-yellow-800">
      <div className="flex flex-col h-[100vh] mt-[150px] overflow-auto">
        <div className="absolute top-[120px] left-0 z-10">
        {/* featureproductchild component */}
          <FeatureProductChild filterValueSelected={onFilterValueSelected} />
        </div>
        {/* hatfiltered components */}
        <HatFiltered filterProductList={filterProductList} />
      </div>
    </div>
  );
};

export default HatMain;
