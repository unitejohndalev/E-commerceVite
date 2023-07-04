import React from 'react'

//import data
import data from "../data/Herschel.json";

//import useParams
import { Link, useParams } from "react-router-dom";

//import material tailwind button
import { Button } from "@material-tailwind/react";


const BagProductDescription = () => {

     //destructure data
  const { bags} = data;

  //use useParams to get shoe id from url
  const { id } = useParams();

  //get single product base on id
  const bagproduct = bags.find((item) => {
    return item.id === parseInt(id);
  });

  //destructure bagproduct
    const { description, name } = bagproduct
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="mt-[200px] shadow-xl w-[90%] mx-auto">
        {description.map((producinfo) => {
          const { id, info, img1, img2, img3 } = producinfo;
          return (
            <div key={id} className="flex flex-col h-[100vh]">
              <Link to={"/bagproducts"}>
                <Button className="absolute mt-5 ml-5">BACK</Button>
              </Link>
              <div
                className="relative gap-6 w-[90%] m-auto h-[90vh] flex 
                        items-center"
              >
                <div className="ml-[200px] relative hidden lg:flex flex-col gap-y-6 w-[150px] h-[90%] max-w-[1220px]">
                  <img className="rounded-xl" src={img1} alt="" />
                  <img className="rounded-xl" src={img2} alt="" />
                  <img className="rounded-xl" src={img3} alt="" />
                </div>

                <div className="relative h-[100%] w-[100%] flex justify-center gap-x-10">
                  <img
                    className="w-[400px] h-[500px] lg:w-[550px] lg:h-[700px] lg:absolute lg:left-0 "
                    src={img1}
                    alt=""
                  />

                  <div className="flex items-center absolute h-[100%] xl:w-[40%] w-[100%] lg:right-0">
                    <div className="absolute w-[100%] flex justify-center top-10">
                      <h1 className=" text-[1rem] xl:text-[2.3rem] xxl:text-[2.5rem] font-light">
                        {name}
                      </h1>
                    </div>
                    <div className="h-[30%] absolute bottom-0 xl:relative ">
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
  )
}

export default BagProductDescription