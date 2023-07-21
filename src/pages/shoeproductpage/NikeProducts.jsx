import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

//import product context to get shoes data
import { ProductContext } from "../../contexts/ProductContext";


//import footer
import Footer from "../../components/Footer";

//import arrow up component
import ArrowUp from "../../components/arrowup/ArrowUp";

const NikeProducts = () => {
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
