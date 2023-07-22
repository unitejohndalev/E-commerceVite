import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

//import product context to get shoes data
import { ProductContext } from "../../contexts/ProductContext";


//import footer
import Footer from "../../components/Footer";

//import arrow up component
import ArrowUp from "../../components/arrowup/ArrowUp";

//import react icons
import { PiShoppingCartSimpleLight } from "react-icons/pi";

//import cart context for addtocart function
import { CartContext } from "../../contexts/CartContext";


const NikeProducts = () => {
  //get addToCart function from cart context
  const { addToCart } = useContext(CartContext);

  //get hat products from product context
  const { shoeProducts } = useContext(ProductContext);

  //FOR PAGINATION

  //  const [currentPage, setCurrentPage] = useState(1);
  //  const productPerPage = 3;

  //     const indexOfLastProduct = currentPage * productPerPage;
  //     const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  //     const currentProducts = shoeProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  //     const npage = Math.ceil(shoeProducts.leght / productPerPage)
  //     const numbers = [...Array(npage + 1).keys().slice(1)]

  return (
    <div className="parent-container">
      <div className="product-container">
        <div className="mapParent-container">
          {/* map first data */}
          {shoeProducts.map((shoeproducts) => {
            //destructure product hats data
            const { id, name, price, img, gender } = shoeproducts;

            return (
              <div key={id} className="mapProduct-container md:h-[50vh]">
                <div className="relative">
                  <div className="name-container">
                    <p>{name}</p>
                  </div>
                  <Link to={`/allproductsearch/${id}`}>
                    <img src={img} alt="" className="img-style" />
                  </Link>
                  <div
                    className="hidden md:flex absolute bottom-2 right-2 text-[1.5rem]
                   md:text-[2rem] cursor-pointer"
                    onClick={() => addToCart(hatproducts, hatproducts.id)}
                  >
                    <PiShoppingCartSimpleLight />
                  </div>
                </div>
                <div className="gender-container bottom-2">
                  <p className="absolute ml-2 bottom-4">{`$ ${parseFloat(
                    price
                  ).toFixed(2)}`}</p>
                  <p className="p-style">{gender}</p>
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

export default NikeProducts;
