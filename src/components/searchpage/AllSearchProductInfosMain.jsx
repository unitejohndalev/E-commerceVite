import React, { useContext } from "react";
import SearchProduct from "./SearchProduct";
//import react icons
import { CiSearch } from "react-icons/ci";

import { ProductContext } from "../../contexts/ProductContext";

const AllSearchProductInfosMain = () => {
  const {
    handleChange,
    showBody,
    clearInputField,
    handleKeypress,
    searchProduct,
    ref,
    adjustWidth,
  } = useContext(ProductContext);

  return (
    <div className="relative">
      <form
        className=" relative flex justify-center items-center "
        onSubmit={clearInputField}
      >
        <div className="w-[100%] flex items-center">
          <input
            className={
              adjustWidth === true
                ? "absolute placeholder:text-[1rem] placeholder:font-light placeholder:text-black placeholder:font-montserrat bg-primary/10 border-solid w-[40vw] left-0 h-[5vh] text-center rounded-sm outline-none md:w-[50vw] md:left-[60px] lg:w-[40vw] lg:left-[10px] xl:w-[25vw] xl:left-[55px] transition-all"
                : "absolute placeholder:text-[1rem] placeholder:font-light placeholder:text-black placeholder:font-montserrat bg-primary/10 border-solid w-[40vw] left-0 h-[5vh] text-center rounded-sm outline-none md:w-[20vw] md:left-[300px] lg:left-[220px] xl:w-[10vw] xl:left-[295px] transition-all"
            }
            type="text"
            ref={ref}
            placeholder="Search"
            onChange={handleChange}
            onKeyPress={handleKeypress}
            value={searchProduct}
          />
          <button
            className={
              adjustWidth === true
                ? "text-[1.5rem] left-3 md:left-[60px] lg:left-[10px]   xl:left-[55px] w-[30px] absolute flex justify-center items-center transition-all"
                : "text-[1.5rem] left-3 md:left-[300px] lg:left-[220px] xl:left-[295px] w-[30px] absolute flex justify-center items-center transition-all"
            }
            type="submit"
          >
            <CiSearch />
          </button>
        </div>
      </form>
      {showBody && (
        <div className="fixed w-[100%] left-0 ">
          <SearchProduct />
        </div>
      )}
    </div>
  );
};

export default AllSearchProductInfosMain;
