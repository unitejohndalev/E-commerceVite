/* eslint-disable react/prop-types */
import React from "react";
import Footer from "../Footer";

// eslint-disable-next-line no-unused-vars
const AllSearchProductSumbitComment = ({ items }) => {
  return (
    <div className="w-[100%] mt-10 ">
      <div className="flex justify-center w-[100%] ">
        <div className="w-[100%] lg:w-[1024px] xl:w-[1234px] flex justify-center border-t-2 border-black/60">
          <div className="w-[95%] lg:flex lg:flex-wrap lg:justify-evenly xl:w-[100%] xl:justify-between lg:gap-x-5 ">
            <div className="w-[100%] mt-2 ml-2 lg:ml-0 mb-5 xl:ml-0">
              <p className=" text-[1.2rem] font-semibold lg:text-[1.5rem]">
                Reviews
              </p>
            </div>
            {items.map((itm) => {
              const { id, userRating, userName, userComment } = itm;
        
              return (
                <div
                  key={id}
                  className="rounded-sm mb-5 shadow-md w-[100%] lg:w-[400px] xl:w-[390px] relative"
                >
                  <div className="ml-1">
                    {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <button
                          type="button"
                          key={index}
                          className={
                            index <= userRating
                              ? "text-yellow-800"
                              : "text-white"
                          }
                        >
                          <span className="star text-[2rem]">&#9733;</span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="">
                    <p className="text-black/50 mb-3 ml-3">@ {userName}</p>
                  </div>
                  <div className="w-[100%] h-[100%] text-[.9rem] pl-3 pb-2 ">
                    <p>{userComment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllSearchProductSumbitComment;
