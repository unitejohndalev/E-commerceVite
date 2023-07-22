/* eslint-disable react/prop-types */
import React, { useContext } from "react";

//import css for toastify
import "../../styles/arrowUp.css";

//import useParams to get product id in url
import { useNavigate, useParams } from "react-router-dom";

//import product context to get allmerge data
import { ProductContext } from "../../contexts/ProductContext";

//import favorite context to get addToFavorite function
import { FavoriteContext } from "../../contexts/FavoriteContext";

//import cart context for addtocart function
import { CartContext } from "../../contexts/CartContext";

//import product description context
import { ProductDescriptionContext } from "../../contexts/ProductDescriptionContext";

import Footer from "../Footer";

import { HiOutlineArrowLeft } from "react-icons/hi";

//import toastify react
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import react icons
//import react icons
import { PiBagThin, PiHeartThin } from "react-icons/pi";

//remove close button
const CloseButton = ({ closeToast }) => (
  <i className="material-icons" onClick={closeToast}></i>
);

const AllSearchProductInfos = () => {
  //get all product merge from product context
  const { allProductsMerge } = useContext(ProductContext);

  //get addToFavorite dunction from favorite context
  const { addToFavorite } = useContext(FavoriteContext);

  //get addToCart function from cart context
  const { addToCart } = useContext(CartContext);

  //use useParams to get shoe id from url
  const { id } = useParams();

  // get single product base on id
  const allproducts = allProductsMerge.find((item) => {
    return item.id === parseInt(id);
  });

  //destructure allproducts variable
  const { description, name, price, gender } = allproducts;

  //navigate hook
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  //cloth context
  const {
    firstAllProductImgToggle,
    secondAllProductImgToggle,
    thirdAllProductImgToggle,
    allProductsFirstImgShow,
    allProductsSecondImgShow,
    allProductsThirdImgShow,
  } = useContext(ProductDescriptionContext);

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
  const addedToCartAndNotify = () => {
    addToCartNotify();
    addToCart(allproducts, allproducts.id);
  };

  const addToFavoriteNotify = () => {
    toast.success("Added to favorite! Shop for more!", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      closeButton: CloseButton,
      icon: <PiHeartThin />,
    });
  };
  const addeToFavoriteAndNotify = () => {
    addToFavoriteNotify();
    addToFavorite(allproducts, allproducts.id);
  };

  return (
    <div className="relative h-[100vh]">
      <div>
        <button
          className="hidden md:flex absolute top-[100px]
          ml-2 text-[1.5rem] px-[10px] cursor-pointer"
          onClick={goBack}
        >
          <HiOutlineArrowLeft />
        </button>
        <div
          onClick={goBack}
          className="absolute top-[100px] ml-2 text-[1.5rem] md:hidden
          "
        >
          <HiOutlineArrowLeft />
        </div>
      </div>
      <div className="flex justify-center mb-[150px] lg:mb-[300px]">
        <div className="h-[100%] mt-[150px] w-[90%] md:min-w-[768px] lg:max-w-[1024px] xl:max-w-[1240px] relative ">
          {description.map((producinfo) => {
            const { id, info, img1, img2, img3 } = producinfo;
            return (
              <div key={id} className="relative flex justify-center ">
                <div className="relative md:w-[100%]">
                  {/* name, price, gender */}
                  <div className="md:w-[100%] ">
                    <div className="md:absolute md:right-2 md:w-[330px] lg:w-[368px] xl:w-[468px] md:top-5">
                      <p className="font-medium text-[1.5rem]">{name}</p>
                      <p className="font-light">{gender}</p>
                      <p className="mt-3 font-medium">{`$ ${parseFloat(
                        price
                      ).toFixed(2)}`}</p>
                    </div>
                  </div>
                  <div className="mt-5 lg:h-[80vh]">
                    <div className="w-[100%] flex items-center justify-center md:justify-normal">
                      {allProductsFirstImgShow && (
                        <div>
                          <img
                            className="w-[250px]  md:w-[400px] md:h-[550px] md:ml-2 lg:ml-[100px] xl:ml-[200px] rounded-sm shadow-xl"
                            src={img1}
                          />
                        </div>
                      )}
                      {allProductsSecondImgShow && (
                        <div>
                          <img
                            className="w-[250px]  md:w-[400px] md:h-[550px] md:ml-2 lg:ml-[100px] xl:ml-[200px] rounded-sm shadow-xl "
                            src={img2}
                          />
                        </div>
                      )}
                      {allProductsThirdImgShow && (
                        <div>
                          <img
                            className="w-[250px]  md:w-[400px] md:h-[550px] md:ml-2 lg:ml-[100px] xl:ml-[200px] rounded-sm shadow-xl "
                            src={img3}
                          />
                        </div>
                      )}
                    </div>
                    <div className="mt-5 flex gap-x-2 lg:absolute lg:flex-col lg:top-0 lg:gap-y-2">
                      <img
                        className={
                          allProductsFirstImgShow
                            ? "w-[80px] h-[80px] md:ml-2 xl:w-[120px] xl:h-[140px] xl:ml-10 rounded-sm shadow-xl brightness-50"
                            : "w-[80px] h-[80px] md:ml-2 xl:w-[120px] xl:h-[140px] xl:ml-10 rounded-sm shadow-xl "
                        }
                        src={img1}
                        alt=""
                        onMouseOver={firstAllProductImgToggle}
                      />
                      <img
                        className={
                          allProductsSecondImgShow
                            ? "w-[80px] h-[80px] md:ml-2 xl:w-[120px] xl:h-[140px] xl:ml-10 rounded-sm shadow-xl brightness-50"
                            : "w-[80px] h-[80px] md:ml-2 xl:w-[120px] xl:h-[140px] xl:ml-10 rounded-sm shadow-xl "
                        }
                        src={img2}
                        alt=""
                        onMouseOver={secondAllProductImgToggle}
                      />
                      {img3 == null ? (
                        <img src="hidden" alt="" />
                      ) : (
                        <img
                          className={
                            allProductsThirdImgShow
                              ? "w-[80px] h-[80px] md:ml-2 xl:w-[120px] xl:h-[140px] xl:ml-10 rounded-sm shadow-xl brightness-50"
                              : "w-[80px] h-[80px] md:ml-2 xl:w-[120px] xl:h-[140px] xl:ml-10 rounded-sm shadow-xl "
                          }
                          src={img3}
                          alt=""
                          onMouseOver={thirdAllProductImgToggle}
                        />
                      )}
                    </div>
                    <div className="w-[100%]">
                      <div
                        className="flex flex-col gap-y-4 mt-5 md:w-[330px] md:absolute md:right-2
                    md:top-[200px] lg:w-[368px] xl:w-[468px]"
                      >
                        <button
                          className="w-[100%] bg-blue-400 text-white py-[10px] px-[10px] rounded-sm"
                          onClick={() => addedToCartAndNotify()}
                        >
                          <p>Add to Cart</p>
                        </button>

                        <button
                          className="outli w-[100%] off-bg text-white py-[10px] px-[10px] rounded-sm"
                          onClick={() => addeToFavoriteAndNotify()}
                        >
                          <p>Add to Favorite</p>
                        </button>
                      </div>
                      <div
                        className="w-[100%] mt-10 mb-10 md:w-[330px] md:absolute md:right-2 md:top-[320px]
                    lg:w-[368px] lg:mt-[100px] xl:w-[468px]"
                      >
                        <p className="font-light lg:text-[1.2rem] text-justify">
                          {info}
                        </p>
                      </div>
                    </div>
                  </div>
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

export default AllSearchProductInfos;
