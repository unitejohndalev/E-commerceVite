/* eslint-disable react/prop-types */
import React, { useContext, useRef, useState } from "react";

import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

//import react icons
import { PiShoppingCartSimpleLight, PiBagThin } from "react-icons/pi";

//import cart context for addtocart function
import { CartContext } from "../../contexts/CartContext";

//import toastify react
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import css for toastify
import "../../styles/arrowUp.css";

//remove close button
const CloseButton = ({ closeToast }) => (
  <i className="material-icons" onClick={closeToast}></i>
);

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ShoeFilteredList = (props) => {
  //get addToCart function from cart context
  const { addToCart } = useContext(CartContext);

  //FOR PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 8;

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = props.filterProductList.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const npage = Math.ceil(props.filterProductList.length / productPerPage);

  const pageTopRef = useRef(null);
  const handleChange = (event, value) => {
    setCurrentPage(value);
    pageTopRef.current.scrollIntoView();
  };

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
    <div className="parent-container " ref={pageTopRef}>
      <div className="product-container mt-0 md:mt-10">
        <div className="mapParent-container lg:mt-5 ">
          {currentProducts.map((products) => {
            //destructure products
            const { name, img, price, status, gender, id } = products;
            return (
              <div key={id} className="mapProduct-container ">
                <div className="relative">
                  <div className="name-container ">
                    <p>{name}</p>
                  </div>
                  <Link to={`/allproductsearch/${id}`}>
                    <img src={img} alt="" className="img-style" />
                  </Link>
                  <div
                    className="hidden md:flex absolute bottom-2 right-2 text-[1.5rem]
                   md:text-[2rem] cursor-pointer"
                    onClick={() => {
                      addToCartNotify();
                      addToCart(products, products.id);
                    }}
                  >
                    <PiShoppingCartSimpleLight />
                  </div>
                </div>
                <div className="gender-container bottom-2">
                  <p className="absolute ml-2 bottom-4 md:bottom-0 md:right-2">{`$ ${parseFloat(
                    price
                  ).toFixed(2)}`}</p>
                  <p className="ml-2 hidden md:flex">{status}</p>
                  <p className="p-style">{gender}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Stack spacing={2} className="mt-[50px]">
          <Pagination
            count={npage}
            page={currentPage}
            onChange={handleChange}
          />
        </Stack>
      </div>
      <ToastContainer className="tcenter" closeButton={CloseButton} />
      <Footer />
    </div>
  );
};

export default ShoeFilteredList;
