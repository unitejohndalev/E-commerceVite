import React, { useContext, useEffect, useRef, useState } from "react";

//import useNavigate from react-dom
//by using this hook we can navigate back programmatically

//import useParams to get product id in url
import { useNavigate, useParams } from "react-router-dom";

//import product context to get hats data
import { ProductContext } from "../contexts/ProductContext";

//import cart context for addtocart function
import { CartContext } from "../contexts/CartContext";

//import product description context
import { ProductDescriptionContext } from "../contexts/ProductDescriptionContext";

const ShoesDescriptions = () => {
  //get hat products from product context
  const { hatProducts } = useContext(ProductContext);

  //get addToCart function from cart context
  const { addToCart } = useContext(CartContext);

  //use useParams to get shoe id from url
  const { id } = useParams();

  // get single product base on id
  const hatproduct = hatProducts.find((item) => {
    return item.id === parseInt(id);
  });

  //destructure hatproduct variable
  const { description, name, price, gender } = hatproduct;

  //navigate hook
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const {
    hatDescriptionFirstImgShow,
    firstImgToggle,
    hatDescriptionSecondImgShow,
    secondImgToggle,
  } = useContext(ProductDescriptionContext);
  return (
    <div className="relative h-[100%]  ">
      <div>
        <button
          className="absolute top-[100px]
          ml-2 bg-blue-400 text-white py-[5px] px-[10px] rounded-sm"
          onClick={goBack}
        >
          <p>Back</p>
        </button>
      </div>
      <div className="flex justify-center">
        <div className="h-[100%] mt-[150px] w-[90%] md:min-w-[768px] lg:max-w-[1024px] xl:max-w-[1240px] relative ">
          {description.map((producinfo) => {
            const { id, info, img1, img2 } = producinfo;
            return (
              <div
                key={id}
                className="relative flex justify-center "
              >
                <div className="relative md:w-[100%]">
                  {/* name, price, gender */}
                  <div className="md:w-[100%] ">
                    <div className="md:absolute md:right-2 md:w-[330px] lg:w-[368px] xl:w-[568px] md:top-5">
                      <p className="font-medium text-[1.5rem]">{name}</p>
                      <p className="font-light">{gender}</p>
                      <p className="mt-3 font-medium">{`$ ${parseFloat(
                        price
                      ).toFixed(2)}`}</p>
                    </div>
                  </div>
                  <div className="mt-5 lg:h-[80vh]">
                    {hatDescriptionFirstImgShow && (
                      <div>
                        <img
                          className="w-[400px] h-[450px] md:ml-2 lg:ml-[100px] xl:ml-[200px] rounded-t-md shadow-xl"
                          src={img1}
                        />
                      </div>
                    )}
                    {hatDescriptionSecondImgShow && (
                      <div>
                        <img
                          className="w-[400px] h-[450px] md:ml-2 lg:ml-[100px] xl:ml-[200px] rounded-t-md shadow-xl "
                          src={img2}
                        />
                      </div>
                    )}
                    <div className="mt-5 flex gap-x-2 lg:absolute lg:flex-col lg:top-0 lg:gap-y-2">
                      <img
                        className={
                          hatDescriptionFirstImgShow
                            ? "w-[80px] h-[80px] md:ml-2 xl:w-[120px] xl:h-[120px] xl:ml-10 rounded-sm shadow-xl brightness-50"
                            : "w-[80px] h-[80px] md:ml-2 xl:w-[120px] xl:h-[120px] xl:ml-10 rounded-sm shadow-xl "
                        }
                        src={img1}
                        alt=""
                        onMouseOver={firstImgToggle}
                      />
                      <img
                        className={
                          hatDescriptionSecondImgShow
                            ? "w-[80px] h-[80px] md:ml-2 xl:w-[120px] xl:h-[120px] xl:ml-10 rounded-sm shadow-xl brightness-50"
                            : "w-[80px] h-[80px] md:ml-2 xl:w-[120px] xl:h-[120px] xl:ml-10 rounded-sm shadow-xl "
                        }
                        src={img2}
                        alt=""
                        onMouseOver={secondImgToggle}
                      />
                    </div>
                    <div
                      className="flex flex-col gap-y-4 mt-5 md:w-[330px] md:absolute md:right-2
                    md:top-[200px] lg:w-[368px] xl:w-[568px]"
                    >
                      <button className="w-[100%] bg-blue-400 text-white py-[10px] px-[10px] rounded-sm"
                      onClick={() => addToCart(hatproduct, hatproduct.id)}>
                        <p>Add to Cart</p>
                      </button>
                      <button className="w-[100%] off-bg text-white py-[10px] px-[10px] rounded-sm">
                        <p>Add to Favorite</p>
                      </button>
                    </div>
                    <div
                      className="w-[410px] mt-10 mb-10 md:w-[330px] md:absolute md:right-2 md:top-[320px]
                    lg:w-[368px] lg:mt-[100px] xl:w-[568px]"
                    >
                      <p className="font-light lg:text-[1.2rem] text-justify">
                        {info}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShoesDescriptions;
