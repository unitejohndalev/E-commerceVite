/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const ProductDescriptionContext = createContext();
const ProductDescriptionProvider = ({ children }) => {
  const [hatDescriptionFirstImgShow, setHatDescriptionFirstImgShow] =
    useState(true);
  const [hatDescriptionSecondImgShow, setHatDescriptionSecondImgShow] =
    useState();

    const firstImgToggle = () => {
        setHatDescriptionFirstImgShow(true)
        setHatDescriptionSecondImgShow(false)
    }

    const secondImgToggle = () => {
        setHatDescriptionSecondImgShow(true)
        setHatDescriptionFirstImgShow(false)
    }
  return (
    <ProductDescriptionContext.Provider
      value={{
        hatDescriptionFirstImgShow,
        firstImgToggle,
        hatDescriptionSecondImgShow,
        secondImgToggle,
      }}
    >
      {children}
    </ProductDescriptionContext.Provider>
  );
};

export default ProductDescriptionProvider;
