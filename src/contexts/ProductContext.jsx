/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useRef, useState } from "react";

//import shoe and hat data
import shoeshatsData from "../data/NikeProducts.json";

//import cloth data
import clothData from "../data/HMProducts.json";

//import bag data
import MKBagData from "../data/MKBags.json";
import HerschelBag from "../data/Herschel.json";

//import accs daa
import AccessoriesData from "../data/Accessories.json"

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

  //destructure acc data
  const { accessory } = AccessoriesData;

  //state for hats
  const [hatProducts, setHatProducts] = useState([]);

  //handle hats side effect
  useEffect(() => {
    setHatProducts(hats);
  }, [hats]);

  //state for shoes
  const [shoeProducts, setShoeProducts] = useState([]);

  //handle shoes side effects
  useEffect(() => {
    setShoeProducts(shoes);
  }, [shoes]);

  //state for cloths
  const [clothProducts, setClothProducts] = useState([]);

  //handle shoes side effects
  useEffect(() => {
    setClothProducts(clothes);
  }, [clothes]);

  //state for mkbag
  const [MKBagProducts, setMKBagProducts] = useState([]);

  //handle mkbag side effect
  useEffect(() => {
    setMKBagProducts(bags);
  }, [bags]);

  //state for herschelbag
  const [HerschelBagProducts, setHerschelBagProducts] = useState([]);

  //handle herschelbag side effect
  useEffect(() => {
    setHerschelBagProducts(herschelbags);
  }, [herschelbags]);

  //state for accessories
  const [AccessoriesProducts, setAccessoriesProducts] = useState([]);

  //handle acc side effect
  useEffect(() => {
    setAccessoriesProducts(accessory);
  }, [accessory]);

  //show state for hat
  const [hatShow, setHatShow] = useState(true);

  //show state for cloth
  const [clothShow, setClothShow] = useState();

  //show state for shoe
  const [shoeShow, setShoeShow] = useState();

  //show state for bags
  const [bagShow, setBagShow] = useState();

  //show state for accessories
  const [accShow, setAccShow] = useState();

  //merge bags data into one
  const allBagsMerge = [...MKBagProducts, ...HerschelBagProducts];




 

  //merge all json data into 1 single array
  const allProductsMerge = [
    ...hatProducts,
    ...shoeProducts,
    ...clothProducts,
    ...MKBagProducts,
    ...HerschelBagProducts,
    ...AccessoriesProducts,
  ];

  //state for search product
  const [searchProduct, setSearchProduct] = useState("");

  //state to hide search products body when not using search bar
  const [showBody, setShowBody] = useState(false);

  //input function for search
  const handleChange = (event) => {
    setSearchProduct(event.target.value);
    setShowBody(true);
  };

  //use useRef for search body, when click outside it'll close
  //NOTE THIS IS REMOVE SINCE, ITS CAUSING THE APP TO HAVE SOME ERRORS
  // let searchRef = useRef();
  // React.useEffect(() => {
  //   document.addEventListener("mousedown", (e) => {
  //     if (!searchRef.current.contains(e.target)) {
  //       setShowBody(false);
  //     }
  //   });
  // });

  //img function for home hero
  const [homeFirstImg, setHomeFirstImg] = useState(true);
  const [homeSecondImg, setHomeSecondImg] = useState();
  const [homeThirdImg, setHomeThirdImg] = useState();

  const homeFirstImgToggle = () => {
    setHomeFirstImg((prev) => !prev);
    setHomeSecondImg(false);
  };
  const homeSecondImgToggle = () => {
    setHomeSecondImg((prev) => !prev);
    setHomeFirstImg(false);
    setHomeThirdImg(false);
  };
  const homeThirdImgToggle = () => {
    setHomeThirdImg((prev) => !prev);
    setHomeFirstImg(false);
    setHomeSecondImg(false);
  };

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
        AccessoriesProducts,
        setHatShow,
        hatShow,
        setClothShow,
        clothShow,
        setShoeShow,
        shoeShow,
        setBagShow,
        bagShow,
        setAccShow,
        accShow,
        allBagsMerge,
        allProductsMerge,
        searchProduct,
        handleChange,
        showBody,
        setShowBody,
        homeFirstImg,
        homeSecondImg,
        homeThirdImg,
        homeFirstImgToggle,
        homeSecondImgToggle,
        homeThirdImgToggle,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
