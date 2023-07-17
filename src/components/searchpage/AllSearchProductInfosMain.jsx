import React, { useContext } from 'react'
import SearchProduct from '../SearchProduct'

import { ProductContext } from '../../contexts/ProductContext';

const AllSearchProductInfosMain = () => {
      const {handleChange, showBody } =
        useContext(ProductContext);
  return (
    <div className=''>
      <div className=" flex justify-center">
        <input
          className="border-solid  bg-transparent w-[100%] h-[5vh] text-center border-b-2 outline-none"
          placeholder="Search..."
          type="text"
          onChange={handleChange}
        />
      </div>
  {showBody &&    <div className='absolute w-[100%] left-0 h-[25vh]'>


      <SearchProduct />
      </div>}
    </div>
  );
}

export default AllSearchProductInfosMain