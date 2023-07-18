/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link } from "react-router-dom";

//import product context to get hats data
import { ProductContext } from "../../contexts/ProductContext";

//import cart context
import { CartContext } from "../../contexts/CartContext";

//import footer
import Footer from "../../components/Footer";

const AccessoriesChild = () => {
  //get acc products from product context
  const { AccessoriesProducts } = useContext(ProductContext);

  //get addToCart function from cart context
  const { addToCart } = useContext(CartContext);
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
                  <div className="AddToCartBtn-container">
                    <button
                      onClick={() => addToCart(accproducts, id)}
                      className="btn-primary"
                    >
                      <p>Add to Cart</p>
                    </button>
                  </div>
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
      <Footer />
    </div>
  );
};

export default AccessoriesChild;
