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

//import toastify react
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


//import css for toastify
import "../../styles/arrowUp.css";

//import react icons
import { PiBagThin } from "react-icons/pi";

//remove close button
const CloseButton = ({ closeToast }) => (
  <i className="material-icons" onClick={closeToast}></i>
);

const AccessoriesChild = () => {
  //get addToCart function from cart context
  const { addToCart } = useContext(CartContext);

  //get acc products from product context
  const { AccessoriesProducts } = useContext(ProductContext);



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
                    onClick={() => {
                      addToCartNotify();
                      addToCart(accproducts, accproducts.id)
                    }}
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
      <ToastContainer className="tcenter" closeButton={CloseButton} />
      <Footer />
    </div>
  );
};

export default AccessoriesChild;
