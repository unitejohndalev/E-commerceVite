import React, { useContext } from 'react'
import SearchProduct from '../SearchProduct'
//import react icons
import { GoSearch } from "react-icons/go";

import { ProductContext } from '../../contexts/ProductContext';

const AllSearchProductInfosMain = () => {
      const {handleChange, showBody } =
        useContext(ProductContext);
  return (
    <div className="">
      <div className=" relative flex justify-center items-center ">
        <input
          className=" absolute placeholder:text-[1rem] placeholder:font-light bg-primary/10 border-solid w-[100%] h-[5vh] text-center rounded-sm outline-none"
          type="text"
          placeholder='Search'
          onChange={handleChange}
        />
        <div className="text-[1.5rem] left-0  w-[30px] absolute flex justify-center items-center">
          <GoSearch />
        </div>
        
      </div>
      {showBody && (
        <div className="absolute w-[100%] left-0 ">
          <SearchProduct />
        </div>
      )}
    </div>
  );
}

export default AllSearchProductInfosMain