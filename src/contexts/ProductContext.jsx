/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import shoeshats from '../data/NikeProducts.json'

//for passing data anywhere
//make sure this component wrap everything in main.jsx in order for it to work -- imagine you talk like indian
export const ProductContext = createContext()

const ProductProvider = ({children}) => {
    //destructure data
    const {hats, shoes} = shoeshats

    //state for hats
    const [hatProducts, setHatProducts] = useState([])

       useEffect(() => {
            setHatProducts(hats)
       }, []);

  return (
    <ProductContext.Provider 

    value={{hatProducts}}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider