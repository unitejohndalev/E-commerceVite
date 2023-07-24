import React, { useContext } from 'react'
import SearchProduct from './SearchProduct'
//import react icons
import { CiSearch } from "react-icons/ci";

import { ProductContext } from '../../contexts/ProductContext';

const AllSearchProductInfosMain = () => {
      const {
        handleChange,
        showBody,
        clearInputField,
        handleKeypress,
        searchProduct,
        ref   
      } = useContext(ProductContext);

  
  return (
    <div className="">
      <form
        className=" relative flex justify-center items-center "
        onSubmit={clearInputField}
      >
        <input
          className=" absolute placeholder:text-[1rem] placeholder:font-light placeholder:text-black placeholder:font-montserrat bg-primary/10 border-solid w-[100%] h-[5vh] text-center  rounded-sm outline-none"
          type="text"
          ref={ref}
          placeholder="Search"
          onChange={handleChange}
          onKeyPress={handleKeypress}
          value={searchProduct}
        />
        <button
          className="text-[1.5rem] left-0 w-[30px] absolute flex justify-center items-center"
        type='submit'
        >
          <CiSearch />
        </button>
      </form>
      {showBody && (
        <div className="fixed w-[100%] left-0 ">
          <SearchProduct />
        </div>
      )}
    </div>
  );
}

export default AllSearchProductInfosMain