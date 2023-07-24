/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";

//import footer
import Footer from "../../components/Footer";

//import product context to get all json data
import { ProductContext } from "../../contexts/ProductContext";

import { Link } from "react-router-dom";
import OffProductsHero from "./OffProductsHero";

//import react icons
import { PiShoppingCartSimpleLight, PiBagThin } from "react-icons/pi";

//import cart context for addtocart function
import { CartContext } from "../../contexts/CartContext";

//import toastify react
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//remove close button
const CloseButton = ({ closeToast }) => (
  <i className="material-icons" onClick={closeToast}></i>
);
const AllOffProducts = () => {
  //call all state in product context
  const { allProductsMerge } = useContext(ProductContext);

  //filter all products off price
  const filterAllProductOffPrice = allProductsMerge.filter((product) => {
    return product.offprice;
  });

  //get addToCart function from cart context
  const { addToCart } = useContext(CartContext);

  //toast
  const addToCartNotify = () => {
    toast.success("Added to cart! Shop for more!", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      closeButton: CloseButton,
      icon: <PiBagThin />,
    });
  };

  return (
    <div className="parent-container ">
      <div className="product-container">
        <OffProductsHero />
        <div className="mapParent-container ">
          {filterAllProductOffPrice.map((filteredproduct) => {
            const { id, name, price, offprice, img, gender } = filteredproduct;
            return (
              <div key={id} className="mapProduct-container">
                <div className="relative">
                  <div className="name-container">
                    <p>{name}</p>
                  </div>
                  <Link to={`/allproductsearch/${id}`}>
                    <img src={img} alt="" className="img-style " />
                  </Link>
                  <div
                    className="hidden md:flex absolute bottom-2 right-2 text-[1.5rem]
                   md:text-[2rem] cursor-pointer"
                    onClick={() => {
                      addToCartNotify();
                      addToCart(filteredproduct, filteredproduct.id);
                    }}
                  >
                    <PiShoppingCartSimpleLight />
                  </div>
                </div>

                <div className="gender-container bottom-2">
                  <p className="absolute ml-2 bottom-4 text-[.9rem] md:text-[1rem]">{`$ ${parseFloat(
                    price
                  ).toFixed(2)}`}</p>
                  <p className="absolute right-2 bottom-4 line-through text-[.9rem] md:text-[1rem] text-red-800">{`$ ${parseFloat(
                    offprice
                  ).toFixed(2)}`}</p>
                  <p className="p-style">{gender}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer className="tcenter" closeButton={CloseButton} />
      <Footer />
    </div>
  );
};

export default AllOffProducts;
