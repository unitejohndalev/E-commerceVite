/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'

//import shoe and hat data
import shoeshatsData from '../data/NikeProducts.json'

//import cloth data
import clothData from '../data/HMProducts.json'

//for passing data anywhere
//make sure this component wrap everything in main.jsx in order for it to work -- imagine you talk like indian
export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  //destructure shoes and hats data
  const { hats, shoes } = shoeshatsData;

  //destructure cloths data
  const {clothes} = clothData


  //state for hats
  const [hatProducts, setHatProducts] = useState([]);

  //handle hats side effect
  useEffect(() => {
    setHatProducts(hats);
  }, []);

  //state for shoes
  const [shoeProducts, setShoeProducts] = useState([]);

  //handle shoes side effects
  useEffect(() => {
    setShoeProducts(shoes);
  }, []);

  //state for cloths
  const [clothProducts, setClothProducts] = useState([]);

  //handle shoes side effects
  useEffect(() => {
    setClothProducts(clothes);
  }, []);

  //make product context the provider
  //set the value to the created DATA states
  //then pass it to children
  return (
    <ProductContext.Provider value={{ hatProducts, shoeProducts, clothProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider