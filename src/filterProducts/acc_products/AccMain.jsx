import React, { useContext, useState } from "react";

//import FilterSelectFunction components
import FilterSelectFunction from "../FilterSelectFunction";


import { ProductContext } from "../../contexts/ProductContext";
import AccFilteredList from "./AccFilteredList";

const AccMain = () => {
  const {
    setHatShow,
    setShoeShow,
    setBagShow,
    setClothShow,
    setAccShow,
    accShow,
    AccessoriesProducts,
  } = useContext(ProductContext);

  //state for hat products data
  const [Product, setProduct] = useState(AccessoriesProducts);

  //state for filtered data
  const [filterAccProduct, setFilterAccProduct] = useState("Best Seller");

  //filter products
  const filterProductList = Product.filter((product) => {
    if (filterAccProduct === "Best Seller") {
      return product.bestSeller === true;
    } else {
      return product.bestSeller === false;
    }
  });

  //function for filter value
  const onFilterValueSelected = (filterValue) => {
    setFilterAccProduct(filterValue);
  };

  const AccToggle = () => {
    setAccShow(true);
    setClothShow(false);
    setHatShow(false);
    setShoeShow(false);
    setBagShow(false);
  };
  return (
    <div className="relative">
      <div className="filtermain-container">
        <div className=" filtermainBtn-container">
          <button
            onClick={AccToggle}
            className="filterBtn-container left-[100px] md:left-[440px] lg:left-[530px]"
          >
            Accessories
          </button>
          <p onClick={AccToggle} className="pFilteredBtn left-[270px]">
            Accessories
          </p>
        </div>
        <div className="filterFunctionProduct-container ">
          {accShow && (
            <div className="mt-10">
              <div className="filterFunction-container ">
                {/* filterselectfunction reusable function component */}
                <FilterSelectFunction
                  filterValueSelected={onFilterValueSelected}
                />
              </div>

              {/* hatfiltered components */}
              <AccFilteredList filterProductList={filterProductList} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccMain;
