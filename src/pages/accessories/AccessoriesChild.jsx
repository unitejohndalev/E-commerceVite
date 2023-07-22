/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//import product context to get hats data
import { ProductContext } from "../../contexts/ProductContext";



//import footer
import Footer from "../../components/Footer";

//import react icons
import { PiShoppingCartSimpleLight } from "react-icons/pi";


//import cart context for addtocart function
import { CartContext } from "../../contexts/CartContext";

const AccessoriesChild = () => {
  //get addToCart function from cart context
  const { addToCart } = useContext(CartContext);

  //get acc products from product context
  const { AccessoriesProducts } = useContext(ProductContext);

  return (
    <div className="parent-container">
      <div className="product-container">
        <div className="mapParent-container">
          {/* map first data */}
          {AccessoriesProducts.map((accproducts) => {
            //destructure product hats data
            const { id, name, price, img, gender } = accproducts;

            return (
              <div key={id} className="mapProduct-container">
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
                    onClick={() => addToCart(accproducts, accproducts.id)}
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
      <Footer />
    </div>
  );
};

export default AccessoriesChild;
