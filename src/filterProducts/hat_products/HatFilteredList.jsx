/* eslint-disable react/prop-types */
import React, { useContext } from "react";

import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

const HatFiltered = (props) => {

  return (
    <div className="parent-container ">
      <div className="product-container mt-0 md:mt-10">
        <div className="mapParent-container lg:mt-5 ">
          {props.filterProductList.map((products) => {
            //destructure products
            const { name, img, price, status, gender, id } = products;
            return (
              <div key={id} className="mapProduct-container">
                <div className="relative">
                  <div className="AddToCartBtn-container ">
             
                  </div>

                  <div className="name-container ">
                    <p>{name}</p>
                  </div>
                  <Link to={`/allproductsearch/${id}`}>
                    <img src={img} alt="" className="img-style" />
                  </Link>
                </div>
                <div className="price-container">
                  <p className="ml-2">{status}</p>
                  <p className="mr-2">{`$ ${parseFloat(price).toFixed(2)}`}</p>
                </div>
                <div className="gender-container">
                  <p className="p-style">{gender}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HatFiltered;
