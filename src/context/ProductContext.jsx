import React, { createContext } from 'react'

//import data
import {hats,shoes} from "../data/NikeProducts.json"
import {clothes} from "../data/HMProducts.json"
import {bags} from "../data/Herschel.json"

//import page featureproducts
import FeatureProducts from '../pages/FeatureProducts'

//create context
export const ProductsContext = createContext()

const ProductsContextProvider = () => {

  //setting hooks for each data
  const [productsHats, setProductHats] = useState(hats)
  const [productShoes, setProductShoes] = useState(shoes)
  const [productClothes, setProductClothes] = useState(clothes)
  const [productBags, setProductBags] = useState(bags)

  


  return (
    <ProductsContext.Provider
    value={{
      productsHats,
      productShoes,
      productClothes,
      productBags
    }}
    >
    <FeatureProducts/>
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider