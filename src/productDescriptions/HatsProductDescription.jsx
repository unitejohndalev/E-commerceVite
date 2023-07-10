import React, { useContext, useEffect, useRef, useState } from "react";

//import useNavigate from react-dom
//by using this hook we can navigate back programmatically

//import useParams to get product id in url
import { useNavigate, useParams } from "react-router-dom";

//import product context to get hats data
import { ProductContext } from "../contexts/ProductContext";

//import cart context for addtocart function
import { CartContext } from "../contexts/CartContext";


//import material tailwind button
import { Button } from "@material-tailwind/react";

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
  const { description, name, price } = hatproduct;

  //state for img show and hide onMouseOver/onMouseOut
  const [show, setShow] = useState(false);

  //navigate hook
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="h-[100vh] flex justify-center items-center overflow-auto no-scrollbar ">
      <div className="mt-[200px] shadow-xl w-[90%] mx-auto">
        {description.map((producinfo) => {
          const { id, info, img1, img2, img3 } = producinfo;
          return (
            <div key={id} className="flex flex-col h-[100vh] ">
              <div onClick={goBack}>
                <Button className="absolute mt-5 ml-0 z-10">BACK</Button>
              </div>

              <div
                className="relative gap-6 w-[90%] m-auto h-[90vh] flex 
                        items-center"
              >
                <div
                  className="w-[100%] hidden lg:flex flex-col gap-y-2 
                 h-[100%] relative z-9 px-10 "
                >
                  <img className="rounded-xl " src={img1} width={150} />
                  <div>
                    <div className="absolute left-[16vw] top-0">
                      <img src={img1} className="w-[400px] h-[500px]" alt="" />
                    </div>
                  </div>
                  <img
                    className="rounded-xl "
                    src={img2}
                    alt=""
                    width={150}
                    onMouseOver={() => setShow(true)}
                    onMouseOut={() => setShow(false)}
                  />
                  <div>
                    {show && (
                      <div className="absolute left-[16vw] top-0">
                        <img
                          src={img2}
                          className="w-[400px] h-[500px]"
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                  <img className="rounded-xl w-[150px]" src={img3} alt="" />
                </div>
                <div className="relative h-[100%] w-[100%] lg:w-[80%] flex justify-center gap-x-10 0">
                  <img
                    className="w-[400px] h-[500px] lg:hidden "
                    src={img1}
                    alt=""
                  />

                  <div className="flex items-center absolute h-[100%] xl:w-[100%] w-[100%] lg:right-0">
                    <div className="absolute w-[100%] flex justify-center text-center top-0">
                      <h1 className=" text-[1rem] xl:text-[2.3rem] xxl:text-[2.5rem] font-light">
                        {name}
                      </h1>
                      <div className="absolute right-5 top-5 z-10">
                        {/* destructure hat product must pass as parameter */}
                        <Button
                          onClick={() => addToCart(hatproduct, hatproduct.id)}
                        >
                          ADD
                        </Button>
                      </div>
                      <p className="font-medium text-[1.5rem] absolute bottom-0 right-4">
                        $ {price}
                      </p>
                    </div>
                    <div className="h-[30%] absolute bottom-[100px] ">
                      <p className="font-light text-[1rem] xl:text-[1.2rem]">
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
  );
};

export default ShoesDescriptions;
