/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

export const ProductDescriptionContext = createContext();
const ProductDescriptionProvider = ({ children }) => {
  //for hats
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

    //for shoes
  const [shoeDescriptionFirstImgShow, setShoeDescriptionFirstImgShow] =
    useState(true);
  const [shoeDescriptionSecondImgShow, setShoeDescriptionSecondImgShow] =
    useState();
     const [shoeDescriptionThirdImgShow, setShoeDescriptionThirdImgShow] =
       useState();

  const firstShoeImgToggle = () => {
    setShoeDescriptionFirstImgShow(true);
    setShoeDescriptionSecondImgShow(false);
    setShoeDescriptionThirdImgShow(false)
  };

  const secondShoeImgToggle = () => {
    setShoeDescriptionSecondImgShow(true);
    setShoeDescriptionFirstImgShow(false);
    setShoeDescriptionThirdImgShow(false)
  };

    const thirdShoeImgToggle = () => {
      setShoeDescriptionThirdImgShow(true);
      setShoeDescriptionFirstImgShow(false);
      setShoeDescriptionSecondImgShow(false)
    };

    //for cloths
      const [clothDescriptionFirstImgShow, setClothDescriptionFirstImgShow] =
        useState(true);
      const [clothDescriptionSecondImgShow, setClothDescriptionSecondImgShow] =
        useState();
      const [clothDescriptionThirdImgShow, setClothDescriptionThirdImgShow] =
        useState();

      const firstClothImgToggle = () => {
        setClothDescriptionFirstImgShow(true);
        setClothDescriptionSecondImgShow(false);
        setClothDescriptionThirdImgShow(false);
      };

      const secondClothImgToggle = () => {
        setClothDescriptionSecondImgShow(true);
        setClothDescriptionFirstImgShow(false);
        setClothDescriptionThirdImgShow(false);
      };

      const thirdClothImgToggle = () => {
        setClothDescriptionThirdImgShow(true);
        setClothDescriptionFirstImgShow(false);
        setClothDescriptionSecondImgShow(false);
      };
  return (
    <ProductDescriptionContext.Provider
      value={{
        hatDescriptionFirstImgShow,
        firstImgToggle,
        hatDescriptionSecondImgShow,
        secondImgToggle,
        shoeDescriptionFirstImgShow,
        firstShoeImgToggle,
        shoeDescriptionSecondImgShow,
        secondShoeImgToggle,
        shoeDescriptionThirdImgShow,
        thirdShoeImgToggle,
        clothDescriptionFirstImgShow,
        firstClothImgToggle,
        clothDescriptionSecondImgShow,
        secondClothImgToggle,
        clothDescriptionThirdImgShow,
        thirdClothImgToggle
      }}
    >
      {children}
    </ProductDescriptionContext.Provider>
  );
};

export default ProductDescriptionProvider;
