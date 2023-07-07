import React, { useState } from "react";

//import data
import data from "../data/NikeProducts.json";

//import useParams
import { Link, useParams } from "react-router-dom";

//import material tailwind button
import { Button } from "@material-tailwind/react";

const ShoesDescriptions = () => {
  //destructure data
  const { shoes } = data;

  //use useParams to get shoe id from url
  const { id } = useParams();

  const shoeproduct = shoes.find((item) => {
    return item.id === parseInt(id);
  });

  //destructure shoeproduct
  const { description, name } = shoeproduct;

  //state for img show and hide onMouseOver/onMouseOut
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false)

  return (
    <div className="h-[100vh] flex justify-center items-center overflow-auto no-scrollbar">
      <div className="mt-[200px] shadow-xl w-[90%] mx-auto">
        {description.map((producinfo) => {
          const { id, info, img1, img2, img3 } = producinfo;
          return (
            <div key={id} className="flex flex-col h-[100vh] ">
              <Link to={"/hatproducts"}>
                <Button className="absolute mt-5 ml-0 z-10">BACK</Button>
              </Link>
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
                  <img
                    className="rounded-xl w-[150px]"
                    src={img3}
                    alt=""
                    width={150}
                    onMouseOver={() => setShow1(true)}
                    onMouseOut={() => setShow1(false)}
                  />
                  <div>
                    {show1 && (
                      <div className="absolute left-[16vw] top-0">
                        <img
                          src={img3}
                          className="w-[400px] h-[500px]"
                          alt=""
                        />
                      </div>
                    )}
                  </div>
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
