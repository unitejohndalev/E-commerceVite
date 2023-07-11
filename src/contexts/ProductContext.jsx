/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";

//import shoe and hat data
import shoeshatsData from "../data/NikeProducts.json";

//import cloth data
import clothData from "../data/HMProducts.json";

//import bag data
import MKBagData from "../data/MKBags.json";
import HerschelBag from "../data/Herschel.json";

//for passing data anywhere
//make sure this component wrap everything in main.jsx in order for it to work -- imagine you talk like indian
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //destructure shoes and hats data
  const { hats, shoes } = shoeshatsData;

  //destructure cloths data
  const { clothes } = clothData;

  //destructure bags data
  const { bags } = MKBagData;
  const { herschelbags } = HerschelBag;

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

  //state for mkbag
  const [MKBagProducts, setMKBagProducts] = useState([]);

  //handle mkbag side effect
  useEffect(() => {
    setMKBagProducts(bags);
  }, []);

  //state for herschelbag
  const [HerschelBagProducts, setHerschelBagProducts] = useState([]);

  //handle herschelbag side effect
  useEffect(() => {
    setHerschelBagProducts(herschelbags);
  }, []);

  //make product context the provider
  //set the value to the created DATA states
  //then pass it to children
  return (
    <ProductContext.Provider
      value={{
        hatProducts,
        shoeProducts,
        clothProducts,
        MKBagProducts,
        HerschelBagProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
