/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const ProductDescriptionContext = createContext();
const ProductDescriptionProvider = ({ children }) => {
 
      //all merge products state
      const [allProductsFirstImgShow, setAllProductsFirstImgShow] = useState(true)
      const [allProductsSecondImgShow, setAllProductsSecondImgShow] = useState(false)
      const [allProductsThirdImgShow, setAllProductsThirdImgShow] = useState(false)

      const firstAllProductImgToggle = () => {
        setAllProductsFirstImgShow(true)
        setAllProductsSecondImgShow(false)
        setAllProductsThirdImgShow(false)
      }
      
      const secondAllProductImgToggle = () => {
        setAllProductsSecondImgShow(true);
        setAllProductsFirstImgShow(false);
        setAllProductsThirdImgShow(false);
      };
      
      const thirdAllProductImgToggle = () => {
        setAllProductsThirdImgShow(true);
        setAllProductsFirstImgShow(false);
        setAllProductsSecondImgShow(false);
      };

  return (
    <ProductDescriptionContext.Provider
      value={{
      
        firstAllProductImgToggle,
        secondAllProductImgToggle,
        thirdAllProductImgToggle,
        allProductsFirstImgShow,
        allProductsSecondImgShow,
        allProductsThirdImgShow

      }}
    >
      {children}
    </ProductDescriptionContext.Provider>
  );
};

export default ProductDescriptionProvider;
