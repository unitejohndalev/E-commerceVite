import React, { useState, useContext } from "react";



//import FilterSelectFunction components
import FilterSelectFunction from "../FilterSelectFunction";

//import filterProducts
import ShoeFilteredList from "./ShoeFilteredList";

import { ProductContext } from "../../contexts/ProductContext";

const ShoeMain = () => {
  const {
    setHatShow,
    setClothShow,
    shoeShow,
    setBagShow,
    setShoeShow,
    shoeProducts,
    setAccShow,
  } = useContext(ProductContext);

  //state for hat products data
  const [Product, setProduct] = useState(shoeProducts);

  //state for filtered data
  const [filterShoeProduct, setFilterShoeProduct] = useState("Best Seller");

  //filter products
  const filterProductList = Product.filter((product) => {
    if (filterShoeProduct === "Best Seller") {
      return product.bestSeller === true;
    } else {
      return product.bestSeller === false;
    }
  });

  //function for filter value
  const onFilterValueSelected = (filterValue) => {
    setFilterShoeProduct(filterValue);
  };

  const shoeToggle = () => {
    setShoeShow(true);
    setHatShow(false);
    setClothShow(false);
    setBagShow(false)
        setAccShow(false)
  };

  return (
    <div className="relative ">
      <div className="filtermain-container">
        <div className="filtermainBtn-container">
          <button
            onClick={shoeToggle}
            className="filterBtn-container  md:left-[230px] lg:left-[260px] xl:left-[315px]"
          >
            Shoes
          </button>
          <p onClick={shoeToggle} className="pFilteredBtn left-[119px]">
            Shoes
          </p>
        </div>
        <div className="filterFunctionProduct-container">
          {shoeShow && (
            <div className="mt-10">
              <div className="filterFunction-container">
                {/* filterselectfunction reusable function component */}
                <FilterSelectFunction
                  filterValueSelected={onFilterValueSelected}
                />
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
