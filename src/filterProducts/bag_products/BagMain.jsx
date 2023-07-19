import React, { useContext, useState } from "react";

//import FilterSelectFunction components
import FilterSelectFunction from "../FilterSelectFunction";

//import filterProducts
import BagFilteredList from "./BagFilteredList";

import { ProductContext } from "../../contexts/ProductContext";

const BagMain = () => {
    const {
      setHatShow,
      setClothShow,
      setShoeShow,
      setBagShow,
      bagShow,
      allBagsMerge,
      setAccShow,
    } = useContext(ProductContext);

    //state for hat products data
    const [Product, setProduct] = useState(allBagsMerge);
 
   
    //state for filtered data
    const [filterMKBagProduct, setFilterMKBagProduct] = useState("Best Seller");

    //filter products
    const filterProductList = Product.filter((product) => {
      if (filterMKBagProduct === "Best Seller") {
        return product.bestSeller === true;
      } else {
        return product.bestSeller === false;
      }
    });

  

    //function for filter value
    const onFilterValueSelected = (filterValue) => {
      setFilterMKBagProduct(filterValue);
    };

    const bagsToggle = () => {
      setBagShow(true)
      setShoeShow(false);
      setHatShow(false);
      setClothShow(false);
          setAccShow(false)
    };
  return (
    <div className="relative ">
      <div className="filtermain-container">
        <div className="filtermainBtn-container">
          <button
            onClick={bagsToggle}
            className="filterBtn-container  md:left-[336px] lg:left-[437px]"
          >
            Bags
          </button>
          <p onClick={bagsToggle} className="pFilteredBtn left-[180px]">
            Bags
          </p>
        </div>
        <div className="filterFunctionProduct-container">
          {bagShow && (
            <div className="mt-10">
              <div className="filterFunction-container">
                {/* filterselectfunction reusable function component */}
                <FilterSelectFunction
                  filterValueSelected={onFilterValueSelected}
                />
              </div>

              {/* hatfiltered components */}
              <BagFilteredList filterProductList={filterProductList} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BagMain;
