import React, { useContext, useState } from "react";


//import FilterSelectFunction components
import FilterSelectFunction from "../FilterSelectFunction";

//import filterProducts
import ClothFilteredList from "./ClothFilteredList";

import { ProductContext } from "../../contexts/ProductContext";

const ClothMain = () => {
  const {
    setHatShow,
    setShoeShow,
    clothShow,
    setBagShow,
    setClothShow,
    clothProducts,
    setAccShow,
  } = useContext(ProductContext);

  //state for hat products data
  const [Product, setProduct] = useState(clothProducts);

  //state for filtered data
  const [filterClothProduct, setFilterClothProduct] = useState("Best Seller");

  //filter products
  const filterProductList = Product.filter((product) => {
    if (filterClothProduct === "Best Seller") {
      return product.bestSeller === true;
    } else {
      return product.bestSeller === false;
    }
  });

  //function for filter value
  const onFilterValueSelected = (filterValue) => {
    setFilterClothProduct(filterValue);
  };

  const clothToggle = () => {
    setClothShow(true);
    setHatShow(false);
    setShoeShow(false);
    setBagShow(false)
        setAccShow(false)
  };

  return (
    <div className="relative">
      <div className="filtermain-container">
        <div className=" filtermainBtn-container">
          <button
            onClick={clothToggle}
            className="filterBtn-container left-[100px] md:left-[140px] lg:left-[230px]"
          >
            Cloths
          </button>
          <p onClick={clothToggle} className="pFilteredBtn left-[60px]">
            Cloths
          </p>
        </div>
        <div className="filterFunctionProduct-container ">
          {clothShow && (
            <div className="mt-10">
              <div
                className="filterFunction-container "
              >
                {/* filterselectfunction reusable function component */}
                <FilterSelectFunction
                  filterValueSelected={onFilterValueSelected}
                />
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
