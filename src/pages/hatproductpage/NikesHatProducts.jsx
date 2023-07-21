/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//import product context to get hats data
import { ProductContext } from "../../contexts/ProductContext";

//import footer
import Footer from "../../components/Footer";

//import arrow up component
import ArrowUp from "../../components/arrowup/ArrowUp";

//import react icons
import { PiShoppingCartSimpleLight } from "react-icons/pi";


//import cart context for addtocart function
import { CartContext } from "../../contexts/CartContext";

const NikesHatProducts = () => {
  //get hat products from product context
  const { hatProducts } = useContext(ProductContext);

  //get addToCart function from cart context
  const { addToCart } = useContext(CartContext);

  return (
    <div className="parent-container">
      <div className="product-container">
        <div className="mapParent-container">
          {/* map first data */}
          {hatProducts.map((hatproducts) => {
            //destructure product hats data
            const { id, name, price, img, gender } = hatproducts;

            return (
              <div key={id} className="mapProduct-container">
                <div className="relative">
                  <div className="name-container">
                    <p>{name}</p>
                  </div>
                  <Link to={`/allproductsearch/${id}`}>
                    <img src={img} alt="" className="img-style" />
                  </Link>
                </div>
                <div className="price-container">
                  <p className=" ml-2">{`$ ${parseFloat(price).toFixed(2)}`}</p>
                </div>
                <div className="gender-container">
                  <p className="p-style">{gender}</p>
                </div>
                <div
                  className="hidden md:flex absolute bottom-2 right-2 text-[1.5rem]
                   md:text-[2rem] cursor-pointer"
                  onClick={() => addToCart(hatproducts, hatproducts.id)}
                >
                  <PiShoppingCartSimpleLight />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ArrowUp />

      <Footer />
    </div>
  );
};

export default NikesHatProducts;
