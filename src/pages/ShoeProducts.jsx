import React from 'react'

//import components
import NikeProductDescription from '../context/NikeProductDescription'
import NikeProducts from "../components/NikeProducts"


const ShoeProducts = () => {
  return (
    <div className="border-solid border-2 border-red-800">
      <NikeProducts />
      <NikeProductDescription />
    </div>
  );
}

export default ShoeProducts